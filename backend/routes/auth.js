const express = require('express')
const jwt = require('jsonwebtoken')
const rateLimit = require('express-rate-limit')
const User = require('../models/User')

const router = express.Router()

// Rate limiting cho auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 attempts per 15 minutes
  message: {
    error: 'Quá nhiều lần thử. Vui lòng thử lại sau 15 phút.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// Helper function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '24h'
  })
}

// Helper function to send response with token
const sendTokenResponse = (user, statusCode, res, message) => {
  const token = generateToken(user._id)
  
  const userResponse = {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    role: user.role,
    avatar: user.avatar,
    isEmailVerified: user.isEmailVerified,
    createdAt: user.createdAt
  }

  res.status(statusCode).json({
    success: true,
    message,
    token,
    user: userResponse
  })
}

// @route   POST /api/auth/register
// @desc    Đăng ký user mới
// @access  Public
router.post('/register', authLimiter, async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone } = req.body

    // Validation
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Vui lòng điền đầy đủ thông tin bắt buộc'
      })
    }

    // Check if user already exists
    const existingUser = await User.findByEmail(email)
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'Email này đã được sử dụng'
      })
    }

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      phone
    })

    // Update last login
    user.lastLogin = new Date()
    await user.save()

    sendTokenResponse(user, 201, res, 'Đăng ký thành công!')

  } catch (error) {
    console.error('Register error:', error)
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message)
      return res.status(400).json({
        success: false,
        error: errors.join(', ')
      })
    }

    res.status(500).json({
      success: false,
      error: 'Lỗi server, vui lòng thử lại sau'
    })
  }
})

// @route   POST /api/auth/login
// @desc    Đăng nhập user
// @access  Public
router.post('/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Vui lòng nhập email và mật khẩu'
      })
    }

    // Find user and include password
    const user = await User.findByEmail(email).select('+password')
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Email hoặc mật khẩu không chính xác'
      })
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        error: 'Tài khoản đã bị khóa. Vui lòng liên hệ admin'
      })
    }

    // Check password
    const isPasswordMatch = await user.comparePassword(password)
    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        error: 'Email hoặc mật khẩu không chính xác'
      })
    }

    // Update last login
    user.lastLogin = new Date()
    await user.save()

    sendTokenResponse(user, 200, res, 'Đăng nhập thành công!')

  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      error: 'Lỗi server, vui lòng thử lại sau'
    })
  }
})

// @route   POST /api/auth/logout
// @desc    Đăng xuất user (client-side mainly)
// @access  Private
router.post('/logout', (req, res) => {
  res.json({
    success: true,
    message: 'Đăng xuất thành công!'
  })
})

// @route   GET /api/auth/me
// @desc    Lấy thông tin user hiện tại
// @access  Private
router.get('/me', async (req, res) => {
  try {
    // Get token from header
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }

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

      const userResponse = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
        avatar: user.avatar,
        isEmailVerified: user.isEmailVerified,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt
      }

      res.json({
        success: true,
        user: userResponse
      })

    } catch (jwtError) {
      return res.status(401).json({
        success: false,
        error: 'Token không hợp lệ'
      })
    }

  } catch (error) {
    console.error('Get user error:', error)
    res.status(500).json({
      success: false,
      error: 'Lỗi server, vui lòng thử lại sau'
    })
  }
})

module.exports = router
