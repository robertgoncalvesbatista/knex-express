class ErrorHandler {
  constructor() {}

  register(err, req, res, next) {
    if (err instanceof Error) {
      res.status(500).json({ message: err.message });
    }

    if (err instanceof ReferenceError) {
      res.status(500).json({ message: err.message });
    }

    if (err instanceof TypeError) {
      res.status(500).json({ message: err.message });
    }

    if (err instanceof SyntaxError) {
      res.status(500).json({ message: err.message });
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default ErrorHandler;
