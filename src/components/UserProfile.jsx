import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUser, 
  faSignOutAlt, 
  faChevronDown,
  faHistory,
  faHeart,
  faCog,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'

export default function UserProfile({ user, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    onLogout()
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <div className="w-8 h-8 bg-custom-red rounded-full flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-white text-sm" />
        </div>
        <div className="text-left">
          <div className="text-sm font-medium text-gray-900">
            {user?.fullName || 'Người dùng'}
          </div>
          <div className="text-xs text-gray-500">
            {user?.email}
          </div>
        </div>
        <FontAwesomeIcon 
          icon={faChevronDown} 
          className={`text-gray-400 text-xs transition-transform ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 animate-fade-in-up">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-custom-red rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-900">
                  {user?.fullName || 'Người dùng'}
                </div>
                <div className="text-sm text-gray-500">
                  {user?.email}
                </div>
                <div className="text-xs text-custom-red">
                  {user?.phone}
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 text-custom-red" />
              <span>Đơn hàng của tôi</span>
            </a>
            
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FontAwesomeIcon icon={faHistory} className="w-4 h-4 text-custom-red" />
              <span>Lịch sử thuê</span>
            </a>
            
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FontAwesomeIcon icon={faHeart} className="w-4 h-4 text-custom-red" />
              <span>Sản phẩm yêu thích</span>
            </a>
            
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <FontAwesomeIcon icon={faCog} className="w-4 h-4 text-custom-red" />
              <span>Cài đặt tài khoản</span>
            </a>
          </div>

          {/* Logout */}
          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-2 w-full text-left text-red-600 hover:bg-red-50 transition-colors"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
