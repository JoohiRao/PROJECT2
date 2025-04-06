const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Check if token is valid
const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(" ")[1];

    if (!token)
      return res.status(401).json({ message: "No token, authorization denied" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user)
      return res.status(401).json({ message: "User not found" });

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

// Role-based access
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: `Access denied for role: ${req.user.role}` });
    }
    next();
  };
};

module.exports = { protect, authorizeRoles };
