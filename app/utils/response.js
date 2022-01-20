const successResponse = (res, options) => {
  return res.send({
    success: true,
    message: options.message ? options.message : "Success",
    data: options.data ? options.data : [],
    timestamp: new Date(),
  });
};

const errorResponse = (res, options) => {
  return res.status(options.statusCode).send({
    success: false,
    message: options.message ? options.message : "Error",
    status: options.statusCode,
    timestamp: new Date(),
    error: options.error ? options.error : null,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
