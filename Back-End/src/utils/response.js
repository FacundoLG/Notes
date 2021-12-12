export const success = (req, res, statusCode, message, data) => {
  res.status(statusCode || 200).json({ message, data });
};
export const error = (req, res, statusCode, message) => {
  res.status(statusCode || 500).json({ error: message });
};
