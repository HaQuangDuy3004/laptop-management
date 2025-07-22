import React, { createContext, useState, useEffect } from 'react'
import { authService } from '../services/authService'

const AuthContext = createContext()

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Kiểm tra authentication status khi component mount
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = authService.getToken()
        const storedUser = authService.getStoredUser()

        if (token && storedUser) {
          // Verify token với server
          const response = await authService.getCurrentUser()
          if (response.success) {
            setUser(response.user)
            setIsAuthenticated(true)
          } else {
            // Token không hợp lệ, clear localStorage
            authService.logout()
          }
        }
      } catch (error) {
        console.error('Auth initialization error:', error)
        // Token không hợp lệ, clear localStorage
        authService.logout()
      } finally {
        setIsLoading(false)
      }
    }

    initializeAuth()
  }, [])

  // Đăng nhập
  const login = async (email, password) => {
    try {
      setIsLoading(true)
      const response = await authService.login(email, password)
      
      if (response.success) {
        setUser(response.user)
        setIsAuthenticated(true)
        return { success: true, message: response.message }
      } else {
        return { success: false, error: response.error }
      }
    } catch (error) {
      console.error('Login error:', error)
      return { 
        success: false, 
        error: error.error || 'Đăng nhập thất bại. Vui lòng thử lại.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Đăng ký
  const register = async (userData) => {
    try {
      setIsLoading(true)
      const response = await authService.register(userData)
      
      if (response.success) {
        setUser(response.user)
        setIsAuthenticated(true)
        return { success: true, message: response.message }
      } else {
        return { success: false, error: response.error }
      }
    } catch (error) {
      console.error('Register error:', error)
      return { 
        success: false, 
        error: error.error || 'Đăng ký thất bại. Vui lòng thử lại.' 
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Đăng xuất
  const logout = async () => {
    try {
      await authService.logout()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setUser(null)
      setIsAuthenticated(false)
    }
  }

  // Cập nhật thông tin user
  const updateUser = (updatedUser) => {
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }

  // Refresh user data từ server
  const refreshUser = async () => {
    try {
      const response = await authService.getCurrentUser()
      if (response.success) {
        setUser(response.user)
        localStorage.setItem('user', JSON.stringify(response.user))
        return response.user
      }
    } catch (error) {
      console.error('Refresh user error:', error)
      // Nếu có lỗi, có thể token đã hết hạn
      logout()
    }
  }

  const value = {
    // State
    user,
    isAuthenticated,
    isLoading,
    
    // Actions
    login,
    register,
    logout,
    updateUser,
    refreshUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
