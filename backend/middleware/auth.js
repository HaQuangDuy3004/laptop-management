const jwt = require('jsonwebtoken')
const User = require('../models/User')

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token

  // Get token from header
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  // Make sure token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Không có quyền truy cập. Vui lòng đăng nhập'
    })
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Get user from database
    const user = await User.findById(decoded.userId)
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'User không tồn tại'
      })
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        error: 'Tài khoản đã bị khóa'
      })
    }

    // Add user to request object
    req.user = user
    next()

  } catch (error) {
    console.error('Auth middleware error:', error)
    return res.status(401).json({
      success: false,
      error: 'Token không hợp lệ'
    })
  }
}

// Middleware to restrict to specific roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        error: `Chỉ ${roles.join(', ')} mới có quyền truy cập`
      })
    }
    next()
  }
}

module.exports = {
  protect,
  authorize
}
