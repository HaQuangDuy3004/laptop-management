import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-600 via-purple-600 to-custom-red overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-4 sm:top-6 md:top-10 left-4 sm:left-6 md:left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-20 right-8 sm:right-12 md:right-20 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 right-4 sm:right-6 md:right-10 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white bg-opacity-10 rounded-full animate-ping"></div>
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/4 sm:left-1/3 w-12 h-12 sm:w-18 sm:h-18 md:w-24 md:h-24 bg-white bg-opacity-5 rounded-full animate-pulse"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 animate-fade-in-up">
              Dịch Vụ Cho Thuê Laptop
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 opacity-90 animate-fade-in-up animation-delay-200">
              Giải pháp công nghệ chuyên nghiệp cho mọi nhu cầu
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-400">
              <button className="bg-white text-custom-red px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Khám Phá Ngay
              </button>
              <button className="border-2 border-white text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-white hover:text-custom-red transition-all duration-300 transform hover:scale-105">
                Xem Bảng Giá
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-32 py-6 md:py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">DỊCH VỤ CHO THUÊ</h2>
        </div>
        
        <div className="flex flex-wrap justify-center md:justify-between gap-3 sm:gap-4 md:gap-8">
          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg mb-2 md:mb-3 flex items-center justify-center group-hover:bg-custom-red group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">📱</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-custom-red transition-colors">TẤT CẢ</p>
            <div className="w-full h-0.5 bg-custom-red mt-1"></div>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg mb-2 md:mb-3 flex items-center justify-center group-hover:bg-custom-red group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">📽️</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-custom-red transition-colors">MÁY CHIẾU</p>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg mb-2 md:mb-3 flex items-center justify-center group-hover:bg-custom-red group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">📱</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-custom-red transition-colors">MÁY TÍNH BẢNG</p>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg mb-2 md:mb-3 flex items-center justify-center group-hover:bg-custom-red group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">🖨️</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-custom-red transition-colors">MÁY IN</p>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg mb-2 md:mb-3 flex items-center justify-center group-hover:bg-custom-red group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">🖥️</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-custom-red transition-colors">LCD</p>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg mb-2 md:mb-3 flex items-center justify-center group-hover:bg-custom-red group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">💻</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-custom-red transition-colors">LAPTOP</p>
          </div>

          <div className="text-center group cursor-pointer">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-lg mb-2 md:mb-3 flex items-center justify-center group-hover:bg-custom-red group-hover:text-white transition-colors">
              <span className="text-lg sm:text-xl md:text-2xl">🏢</span>
            </div>
            <p className="text-xs sm:text-sm md:text-base font-medium text-gray-700 group-hover:text-custom-red transition-colors">CABIN DỊCH</p>
          </div>
        </div>
      </div>
    </section>
  )
}
