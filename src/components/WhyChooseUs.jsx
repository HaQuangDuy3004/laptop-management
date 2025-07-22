import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShield, faClock, faHeadset, faTruck, faStar, faUserTie } from '@fortawesome/free-solid-svg-icons'

export default function WhyChooseUs() {
  const features = [
    {
      icon: faShield,
      title: 'Bảo Hành Toàn Diện',
      description: 'Cam kết bảo hành 100% thiết bị, hỗ trợ thay thế ngay lập tức nếu có sự cố'
    },
    {
      icon: faClock,
      title: 'Giao Hàng 24/7',
      description: 'Dịch vụ giao hàng nhanh chóng trong 2 giờ tại TP.HCM và các tỉnh lân cận'
    },
    {
      icon: faHeadset,
      title: 'Hỗ Trợ Kỹ Thuật',
      description: 'Đội ngũ kỹ thuật viên chuyên nghiệp sẵn sàng hỗ trợ 24/7'
    },
    {
      icon: faTruck,
      title: 'Miễn Phí Vận Chuyển',
      description: 'Miễn phí giao nhận trong bán kính 20km cho đơn hàng trên 1 triệu'
    },
    {
      icon: faStar,
      title: 'Thiết Bị Chất Lượng Cao',
      description: 'Tất cả thiết bị đều là hàng chính hãng, mới 100% hoặc đã qua kiểm định'
    },
    {
      icon: faUserTie,
      title: 'Tư Vấn Chuyên Nghiệp',
      description: 'Đội ngũ tư vấn giàu kinh nghiệm, hỗ trợ lựa chọn thiết bị phù hợp nhất'
    }
  ]

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="px-4 sm:px-6 md:px-12 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Tại Sao Chọn Chúng Tôi?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực cho thuê thiết bị công nghệ, 
              chúng tôi cam kết mang đến dịch vụ tốt nhất cho khách hàng
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group animate-fade-in-up ${
                  index % 3 === 0 ? 'animation-delay-200' : 
                  index % 3 === 1 ? 'animation-delay-400' : 'animation-delay-600'
                }`}
              >
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6 md:p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-custom-red hover-lift">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-custom-red rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform">
                    <FontAwesomeIcon icon={feature.icon} className="text-lg sm:text-xl md:text-2xl text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 group-hover:text-custom-red transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-8 md:mt-12 lg:mt-16 bg-gradient-to-r from-custom-red to-red-600 rounded-2xl p-6 sm:p-8 md:p-12 animate-fade-in-up animation-delay-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center text-white">
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">1000+</div>
                <div className="text-sm sm:text-base text-red-100">Khách hàng hài lòng</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">500+</div>
                <div className="text-sm sm:text-base text-red-100">Thiết bị có sẵn</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">24/7</div>
                <div className="text-sm sm:text-base text-red-100">Hỗ trợ khách hàng</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">5+</div>
                <div className="text-sm sm:text-base text-red-100">Năm kinh nghiệm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
