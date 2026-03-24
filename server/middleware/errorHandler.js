/**
 * Global error handler middleware.
 */
function errorHandler(err, req, res, _next) {
  // TODO: add structured logging
  console.error('[error]', err.message);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
  });
}

module.exports = errorHandler;
