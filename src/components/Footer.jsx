import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-32 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="h-10 sm:h-12 mr-2 sm:mr-3"/>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-custom-red">Dịch Vụ Cho Thuê Laptop</h3>
                <p className="text-xs sm:text-sm text-gray-400">Giải pháp công nghệ chuyên nghiệp</p>
              </div>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Chúng tôi cung cấp dịch vụ cho thuê laptop, thiết bị công nghệ chất lượng cao 
              với giá cả hợp lý, phục vụ mọi nhu cầu từ cá nhân đến doanh nghiệp.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-custom-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <FontAwesomeIcon icon={faFacebook} className="text-sm sm:text-base" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-custom-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <FontAwesomeIcon icon={faTwitter} className="text-sm sm:text-base" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-custom-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="text-sm sm:text-base" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-custom-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="text-sm sm:text-base" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-custom-red">Dịch Vụ</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Cho thuê laptop</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Cho thuê iPad</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Cho thuê máy chiếu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Cho thuê màn hình LCD</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Cho thuê máy in</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Cabin dịch vụ</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-custom-red">Liên Kết</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Giới thiệu</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Dự án</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Liên hệ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Điều khoản sử dụng</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Hỗ trợ khách hàng</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-custom-red">Liên Hệ</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-custom-red mt-1 text-sm sm:text-base" />
                <div>
                  <p className="text-gray-300 text-xs sm:text-sm">123 Đường ABC, Quận 1</p>
                  <p className="text-gray-300 text-xs sm:text-sm">TP. Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <FontAwesomeIcon icon={faPhone} className="text-custom-red text-sm sm:text-base" />
                <p className="text-gray-300 text-xs sm:text-sm">0898 401 028</p>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <FontAwesomeIcon icon={faEnvelope} className="text-custom-red text-sm sm:text-base" />
                <p className="text-gray-300 text-xs sm:text-sm">info@laptoprent.vn</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-4 sm:mt-6">
              <h5 className="font-semibold mb-2 text-sm sm:text-base">Đăng ký nhận tin</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email của bạn"
                  className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-gray-700 text-white rounded-l-lg focus:outline-none focus:bg-gray-600"
                />
                <button className="bg-custom-red px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-r-lg hover:bg-red-700 transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 px-4 sm:px-6 md:px-12 lg:px-32 py-4 sm:py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-3 md:mb-0 text-center md:text-left">
            © 2025 Dịch Vụ Cho Thuê Laptop. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Điều khoản</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
