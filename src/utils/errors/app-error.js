class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.explanation = message;
  }
}

module.exports = AppError;

// We can use StackTrace function also in future
