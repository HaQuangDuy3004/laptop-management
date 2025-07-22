import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      position: 'Giám đốc IT',
      company: 'Công ty ABC',
      content: 'Dịch vụ cho thuê laptop rất chuyên nghiệp. Thiết bị chất lượng cao, giao hàng nhanh chóng và hỗ trợ tận tình. Chúng tôi đã sử dụng dịch vụ này cho nhiều sự kiện và luôn hài lòng.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      id: 2,
      name: 'Trần Thị B',
      position: 'Event Manager',
      company: 'Eventify Vietnam',
      content: 'Cần thuê 50 laptop cho sự kiện lớn, họ đã hỗ trợ rất tốt từ tư vấn đến giao hàng và thu hồi. Giá cả hợp lý, thiết bị mới và hoạt động ổn định suốt 3 ngày sự kiện.',
      rating: 5,
      avatar: '👩‍💻'
    },
    {
      id: 3,
      name: 'Lê Minh C',
      position: 'Freelancer',
      company: 'Designer',
      content: 'Laptop thuê có cấu hình cao, đáp ứng tốt nhu cầu thiết kế đồ họa. Quy trình thuê đơn giản, nhân viên nhiệt tình. Sẽ tiếp tục sử dụng dịch vụ này.',
      rating: 5,
      avatar: '🎨'
    },
    {
      id: 4,
      name: 'Phạm Văn D',
      position: 'Sinh viên',
      company: 'ĐH Khoa học Tự nhiên',
      content: 'Thuê laptop để làm đồ án tốt nghiệp. Giá sinh viên rất ưu đãi, máy chạy mượt, hỗ trợ cài đặt phần mềm chuyên dụng. Cảm ơn team đã hỗ trợ nhiệt tình!',
      rating: 5,
      avatar: '🎓'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="px-4 sm:px-6 md:px-12 lg:px-32">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Hàng nghìn khách hàng đã tin tưởng và sử dụng dịch vụ của chúng tôi
            </p>
          </div>

          {/* Testimonials Slider */}
          <div className="relative animate-fade-in-up animation-delay-200">
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
              <div className="text-center">
                {/* Quote Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-custom-red rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-lg sm:text-xl md:text-2xl text-white" />
                </div>

                {/* Testimonial Content */}
                <div className="mb-6 sm:mb-7 md:mb-8">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6 italic">
                    "{testimonials[currentSlide].content}"
                  </p>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-4 sm:mb-5 md:mb-6">
                    {[...Array(testimonials[currentSlide].rating)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500 text-sm sm:text-base" />
                    ))}
                  </div>

                  {/* Customer Info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl">
                      {testimonials[currentSlide].avatar}
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="font-bold text-gray-800 text-base sm:text-lg">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-custom-red font-medium text-sm sm:text-base">
                        {testimonials[currentSlide].position}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        {testimonials[currentSlide].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 sm:left-0 md:-left-4 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-custom-red hover:bg-custom-red hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-sm sm:text-base" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 sm:right-0 md:-right-4 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-custom-red hover:bg-custom-red hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-sm sm:text-base" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-custom-red' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
