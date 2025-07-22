const express = require('express')
const User = require('../models/User')

const router = express.Router()

// @route   GET /api/users/profile
// @desc    Lấy thông tin profile user
// @access  Private
router.get('/profile', async (req, res) => {
  try {
    // Middleware sẽ thêm user vào req
    const user = await User.findById(req.user.id)
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User không tồn tại'
      })
    }

    res.json({
      success: true,
      user: {
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
    })

  } catch (error) {
    console.error('Get profile error:', error)
    res.status(500).json({
      success: false,
      error: 'Lỗi server, vui lòng thử lại sau'
    })
  }
})

// @route   PUT /api/users/profile
// @desc    Cập nhật thông tin profile
// @access  Private
router.put('/profile', async (req, res) => {
  try {
    const { firstName, lastName, phone } = req.body

    // Validation
    if (!firstName || !lastName) {
      return res.status(400).json({
        success: false,
        error: 'Họ và tên là bắt buộc'
      })
    }

    const user = await User.findById(req.user.id)
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User không tồn tại'
      })
    }

    // Update fields
    user.firstName = firstName
    user.lastName = lastName
    if (phone) user.phone = phone

    await user.save()

    res.json({
      success: true,
      message: 'Cập nhật thông tin thành công!',
      user: {
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
    })

  } catch (error) {
    console.error('Update profile error:', error)
    
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

module.exports = router
