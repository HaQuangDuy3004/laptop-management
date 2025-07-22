import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faComments, faDownload, faRocket } from '@fortawesome/free-solid-svg-icons'

export default function CallToAction() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-r from-custom-red to-red-600">
      <div className="px-4 sm:px-6 md:px-12 lg:px-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-white mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              Sẵn Sàng Bắt Đầu Dự Án Của Bạn?
            </h2>
            <p className="text-sm sm:text-base md:text-xl opacity-90 max-w-3xl mx-auto">
              Hãy để chúng tôi hỗ trợ bạn với những thiết bị công nghệ tốt nhất. 
              Liên hệ ngay để nhận tư vấn miễn phí và báo giá ưu đãi!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Quick Actions */}
            <a 
              href="tel:0898401028"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 text-center hover:bg-opacity-20 transition-all duration-300 group border border-white border-opacity-20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-xl md:text-2xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Gọi Ngay</h3>
              <p className="text-white text-xs sm:text-sm opacity-80">0898 401 028</p>
            </a>

            <a 
              href="#"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 text-center hover:bg-opacity-20 transition-all duration-300 group border border-white border-opacity-20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faComments} className="text-lg sm:text-xl md:text-2xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Chat Zalo</h3>
              <p className="text-white text-xs sm:text-sm opacity-80">Tư vấn 24/7</p>
            </a>

            <a 
              href="#"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 text-center hover:bg-opacity-20 transition-all duration-300 group border border-white border-opacity-20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faDownload} className="text-lg sm:text-xl md:text-2xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Tải Catalog</h3>
              <p className="text-white text-xs sm:text-sm opacity-80">Bảng giá 2024</p>
            </a>

            <a 
              href="#"
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-3 sm:p-4 md:p-6 text-center hover:bg-opacity-20 transition-all duration-300 group border border-white border-opacity-20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faRocket} className="text-lg sm:text-xl md:text-2xl text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Đặt Ngay</h3>
              <p className="text-white text-xs sm:text-sm opacity-80">Giao trong 2h</p>
            </a>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
            <button className="w-full sm:w-auto bg-white text-custom-red px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Nhận Báo Giá Miễn Phí
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-white hover:text-custom-red transition-colors">
              Xem Thêm Dự Án
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 opacity-80">
              <div className="text-white text-center mb-4">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">1000+</div>
                <div className="text-xs sm:text-sm">Khách hàng</div>
              </div>
              <div className="text-white text-center mb-4">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">500+</div>
                <div className="text-xs sm:text-sm">Thiết bị</div>
              </div>
              <div className="text-white text-center mb-4">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">24/7</div>
                <div className="text-xs sm:text-sm">Hỗ trợ</div>
              </div>
              <div className="text-white text-center mb-4">
                <div className="text-lg sm:text-xl md:text-2xl font-bold">5+</div>
                <div className="text-xs sm:text-sm">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
