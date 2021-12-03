module.exports = {
  success: (req, res, statusCode, message) => {
    res.status(statusCode || 200).json({ message });
  },
  error: (req, res, statusCode, message) => {
    res.status(statusCode || 500).json({ error: message });
  },
};
