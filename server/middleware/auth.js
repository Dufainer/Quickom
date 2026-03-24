const jwt = require('jsonwebtoken');

/**
 * Verifies the JWT token in the Authorization header.
 */
function auth(req, res, next) {
  // TODO: implement token verification
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
}

module.exports = auth;
