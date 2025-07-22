import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import AuthModal from './AuthModal'
import UserProfile from './UserProfile'

export default function Navbar({ onPageChange, currentPage }) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)

  const handleAuthSuccess = (userData) => {
    setUser(userData)
    setIsLoggedIn(true)
    setIsAuthModalOpen(false)
  }

  const handleOpenAuth = (mode) => {
    setAuthMode(mode)
    setIsAuthModalOpen(true)
  }

  const handleCloseAuth = () => {
    setIsAuthModalOpen(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }
  return (
    <>
      <nav className="bg-gray-100 border-t border-gray-300 px-4 sm:px-6 md:px-12 lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <ul className="flex flex-wrap text-gray-700 font-medium w-full lg:w-auto">
            <li 
              className={`py-2 lg:py-3 px-2 sm:px-3 lg:px-4 cursor-pointer hover:text-white hover:bg-custom-red transition-colors text-sm lg:text-base ${
                currentPage === 'home' ? 'bg-custom-red text-white' : ''
              }`}
              onClick={() => onPageChange('home')}
            >
              TRANG CHỦ
            </li>
            <li className="py-2 lg:py-3 px-2 sm:px-3 lg:px-4 relative group cursor-pointer hover:text-white hover:bg-custom-red transition-colors text-sm lg:text-base">
              <FontAwesomeIcon icon={faBars} className="mr-1 lg:mr-2" />
              <span className="hidden sm:inline">DANH MỤC SẢN PHẨM</span>
              <span className="sm:hidden">DANH MỤC</span>
              <span className="hidden lg:inline"> ▾</span>
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-48 lg:w-full bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <ul>
                  <li className="px-3 lg:px-4 py-2 text-black hover:text-custom-red hover:bg-custom-beige cursor-pointer text-sm lg:text-base">
                    CABIN DỊCH
                  </li>
                  <li className="px-3 lg:px-4 py-2 text-black hover:text-custom-red hover:bg-custom-beige cursor-pointer text-sm lg:text-base">
                    LAPTOP
                  </li>
                  <li className="px-3 lg:px-4 py-2 text-black hover:text-custom-red hover:bg-custom-beige cursor-pointer text-sm lg:text-base">
                    IPAD, MÁY TÍNH BẢNG
                  </li>
                  <li className="px-3 lg:px-4 py-2 text-black hover:text-custom-red hover:bg-custom-beige cursor-pointer text-sm lg:text-base">
                    MÁY IN
                  </li>
                  <li className="px-3 lg:px-4 py-2 text-black hover:text-custom-red hover:bg-custom-beige cursor-pointer text-sm lg:text-base">
                    LCD
                  </li>
                  <li className="px-3 lg:px-4 py-2 text-black hover:text-custom-red hover:bg-custom-beige cursor-pointer text-sm lg:text-base">
                    MÁY CHIẾU
                  </li>
                </ul>
              </div>
            </li>
            <li 
              className={`py-2 lg:py-3 px-2 sm:px-3 lg:px-4 cursor-pointer hover:text-white hover:bg-custom-red transition-colors text-sm lg:text-base ${
                currentPage === 'about' ? 'bg-custom-red text-white' : ''
              }`}
              onClick={() => onPageChange('about')}
            >
              <span className="hidden sm:inline">GIỚI THIỆU</span>
              <span className="sm:hidden">GIỚI THIỆU</span>
            </li>
            <li 
              className={`py-2 lg:py-3 px-2 sm:px-3 lg:px-4 cursor-pointer hover:text-white hover:bg-custom-red transition-colors text-sm lg:text-base ${
                currentPage === 'projects' ? 'bg-custom-red text-white' : ''
              }`}
              onClick={() => onPageChange('projects')}
            >
              DỰ ÁN
            </li>
            <li 
              className={`py-2 lg:py-3 px-2 sm:px-3 lg:px-4 cursor-pointer hover:text-white hover:bg-custom-red transition-colors text-sm lg:text-base ${
                currentPage === 'contact' ? 'bg-custom-red text-white' : ''
              }`}
              onClick={() => onPageChange('contact')}
            >
              LIÊN HỆ
            </li>
          </ul>

          {/* Auth Section */}
          <div className='flex items-center space-x-2 lg:space-x-3 mt-2 lg:mt-0 w-full lg:w-auto justify-center lg:justify-end'>
            {isLoggedIn ? (
              <UserProfile user={user} onLogout={handleLogout} />
            ) : (
              <div className='flex items-center space-x-2'>
                <button
                  onClick={() => handleOpenAuth('login')}
                  className='px-2 sm:px-3 py-1.5 sm:py-2 text-custom-red border border-custom-red rounded-lg hover:bg-custom-red hover:text-white transition-colors font-medium text-xs sm:text-sm'
                >
                  Đăng Nhập
                </button>
                <button
                  onClick={() => handleOpenAuth('register')}
                  className='px-2 sm:px-3 py-1.5 sm:py-2 bg-custom-red text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-xs sm:text-sm'
                >
                  Đăng Ký
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={handleCloseAuth}
        initialMode={authMode}
        onAuthSuccess={handleAuthSuccess}
      />
    </>
  );
}
