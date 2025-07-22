import axios from 'axios'

// Base URL của backend API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Tạo axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptor để tự động thêm token vào header
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Interceptor để xử lý response và error
api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response?.status === 401) {
      // Token hết hạn hoặc không hợp lệ
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/'
    }
    return Promise.reject(error)
  }
)

// Auth Service
export const authService = {
  // Đăng ký
  async register(userData) {
    try {
      const response = await api.post('/auth/register', userData)
      
      if (response.data.success && response.data.token) {
        // Lưu token và user info vào localStorage
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      
      return response.data
    } catch (error) {
      throw error.response?.data || { error: 'Lỗi kết nối server' }
    }
  },

  // Đăng nhập
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password })
      
      if (response.data.success && response.data.token) {
        // Lưu token và user info vào localStorage
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      
      return response.data
    } catch (error) {
      throw error.response?.data || { error: 'Lỗi kết nối server' }
    }
  },

  // Đăng xuất
  async logout() {
    try {
      await api.post('/auth/logout')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      // Xóa thông tin khỏi localStorage
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    }
  },

  // Lấy thông tin user hiện tại
  async getCurrentUser() {
    try {
      const response = await api.get('/auth/me')
      return response.data
    } catch (error) {
      throw error.response?.data || { error: 'Lỗi kết nối server' }
    }
  },

  // Kiểm tra trạng thái đăng nhập
  isAuthenticated() {
    return !!localStorage.getItem('token')
  },

  // Lấy user từ localStorage
  getStoredUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  },

  // Lấy token từ localStorage
  getToken() {
    return localStorage.getItem('token')
  }
}

// User Service
export const userService = {
  // Lấy profile
  async getProfile() {
    try {
      const response = await api.get('/users/profile')
      return response.data
    } catch (error) {
      throw error.response?.data || { error: 'Lỗi kết nối server' }
    }
  },

  // Cập nhật profile
  async updateProfile(userData) {
    try {
      const response = await api.put('/users/profile', userData)
      
      if (response.data.success && response.data.user) {
        // Cập nhật user info trong localStorage
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      
      return response.data
    } catch (error) {
      throw error.response?.data || { error: 'Lỗi kết nối server' }
    }
  }
}

// Export default api instance cho các service khác
export default api
