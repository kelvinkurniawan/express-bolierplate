const jwt = require("jsonwebtoken");
const config = require("../config/jwt.config");
const { errorResponse, successResponse } = require("../utils/response");

exports.verifyToken = (req, res, next) => {
  let tokenHeader = req.headers["authorization"];

  if (!tokenHeader) {
    errorResponse(res, { statusCode: 403, message: "No Token provided!" });
  }

  let token = tokenHeader.split(" ");

  if (token[0] !== "Bearer") {
    errorResponse(res, { statusCode: 500, message: "Invalid Token Format!" });
  }

  if (!token[1]) {
    errorResponse(res, { statusCode: 403, message: "Invalid Token" });
  }

  jwt.verify(token[1], config.secret, (err, decoded) => {
    if (err) {
      errorResponse(res, { statusCode: 500, message: "Invalid Token!" });
    }

    req.userId = decoded.id;
    next();
  });
};
