import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faMapMarkerAlt, faClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.')
  }

  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="px-4 md:px-8 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Sẵn sàng tư vấn và hỗ trợ bạn tìm giải pháp cho thuê thiết bị phù hợp nhất
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Thông Tin Liên Hệ</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-custom-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-sm md:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Địa Chỉ</h4>
                      <p className="text-gray-600 text-sm md:text-base break-words">123 Đường ABC, Quận 1, TP. Hồ Chí Minh</p>
                      <p className="text-gray-600 text-sm md:text-base break-words">456 Đường XYZ, Quận 3, TP. Hồ Chí Minh</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-custom-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faPhone} className="text-white text-sm md:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Điện Thoại</h4>
                      <p className="text-gray-600 text-sm md:text-base">Hotline: 0898 401 028</p>
                      <p className="text-gray-600 text-sm md:text-base">Zalo/Viber: 0898 401 028</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-custom-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm md:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Email</h4>
                      <p className="text-gray-600 text-sm md:text-base break-all">info@laptoprent.vn</p>
                      <p className="text-gray-600 text-sm md:text-base break-all">support@laptoprent.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-custom-red rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faClock} className="text-white text-sm md:text-base" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Giờ Làm Việc</h4>
                      <p className="text-gray-600 text-sm md:text-base">Thứ 2 - Thứ 6: 8:00 - 18:00</p>
                      <p className="text-gray-600 text-sm md:text-base">Thứ 7 - CN: 8:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-xl p-3 md:p-4 shadow-lg">
                <div className="w-full h-48 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl md:text-4xl mb-2" />
                    <p className="text-sm md:text-base">Bản đồ vị trí</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Gửi Tin Nhắn</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-colors"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-colors"
                      placeholder="Nhập email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số Điện Thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-colors"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dịch Vụ Quan Tâm
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-colors"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="laptop">Cho thuê Laptop</option>
                      <option value="ipad">Cho thuê iPad</option>
                      <option value="projector">Cho thuê Máy chiếu</option>
                      <option value="lcd">Cho thuê LCD</option>
                      <option value="printer">Cho thuê Máy in</option>
                      <option value="cabin">Cabin dịch vụ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tin Nhắn *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Mô tả chi tiết nhu cầu của bạn..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-custom-red text-white py-2 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 text-sm md:text-base"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-sm md:text-base" />
                  <span>Gửi Tin Nhắn</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
