import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPhone, 
  faEnvelope, 
  faMapMarkerAlt, 
  faClock,
  faPaperPlane,
  faUser,
  faBuilding,
  faComments
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook, 
  faLinkedin, 
  faYoutube,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    service: 'Cho thuê laptop'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24h.')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      service: 'Cho thuê laptop'
    })
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: faPhone,
      title: 'Hotline',
      details: ['0898 401 028', '028 3825 6789'],
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: faEnvelope,
      title: 'Email',
      details: ['info@laptoprent.vn', 'support@laptoprent.vn'],
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Địa chỉ',
      details: ['123 Nguyễn Huệ, Q.1, TP.HCM', '456 Lê Lợi, Q.1, TP.HCM'],
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: faClock,
      title: 'Thời gian làm việc',
      details: ['T2-T6: 8:00 - 18:00', 'T7-CN: 8:00 - 17:00'],
      color: 'text-purple-600 bg-purple-50'
    }
  ]

  const offices = [
    {
      name: 'Văn phòng TP.HCM',
      address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
      phone: '0898 401 028',
      email: 'hcm@laptoprent.vn',
      hours: 'T2-T6: 8:00-18:00, T7-CN: 8:00-17:00',
      isMain: true
    },
    {
      name: 'Chi nhánh Hà Nội',
      address: '456 Hoàng Kiếm, Quận Hoàn Kiếm, Hà Nội',
      phone: '024 3826 5789',
      email: 'hn@laptoprent.vn',
      hours: 'T2-T6: 8:00-18:00, T7: 8:00-12:00',
      isMain: false
    },
    {
      name: 'Chi nhánh Đà Nẵng',
      address: '789 Trần Phú, Quận Hải Châu, Đà Nẵng',
      phone: '0236 3827 4567',
      email: 'dn@laptoprent.vn',
      hours: 'T2-T6: 8:00-18:00, T7: 8:00-12:00',
      isMain: false
    }
  ]

  const socialLinks = [
    { icon: faFacebook, url: '#', label: 'Facebook', color: 'text-blue-600 hover:bg-blue-50' },
    { icon: faWhatsapp, url: '#', label: 'WhatsApp', color: 'text-green-600 hover:bg-green-50' },
    { icon: faLinkedin, url: '#', label: 'LinkedIn', color: 'text-blue-700 hover:bg-blue-50' },
    { icon: faYoutube, url: '#', label: 'YouTube', color: 'text-red-600 hover:bg-red-50' }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-red to-red-600 text-white py-20">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`text-center p-6 rounded-xl border hover-lift animate-fade-in-up animation-delay-${(index + 1) * 200}`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${info.color} flex items-center justify-center`}>
                    <FontAwesomeIcon icon={info.icon} className="text-2xl" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-gray-600 mb-1">
                      {detail}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-slide-in-left">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      Gửi Tin Nhắn Cho Chúng Tôi
                    </h2>
                    <p className="text-gray-600">
                      Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong vòng 24h
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Họ và tên *
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-all"
                            placeholder="Nhập họ và tên"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Số điện thoại *
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-all"
                            placeholder="Nhập số điện thoại"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-all"
                            placeholder="Nhập email"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Công ty
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-all"
                            placeholder="Tên công ty (tùy chọn)"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dịch vụ quan tâm
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-all"
                      >
                        <option value="Cho thuê laptop">Cho thuê laptop</option>
                        <option value="Cho thuê iPad">Cho thuê iPad</option>
                        <option value="Cho thuê máy chiếu">Cho thuê máy chiếu</option>
                        <option value="Cho thuê màn hình LCD">Cho thuê màn hình LCD</option>
                        <option value="Cho thuê máy in">Cho thuê máy in</option>
                        <option value="Cabin dịch">Cabin dịch</option>
                        <option value="Khác">Khác</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tiêu đề *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-all"
                        placeholder="Tiêu đề tin nhắn"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nội dung *
                      </label>
                      <div className="relative">
                        <FontAwesomeIcon icon={faComments} className="absolute left-3 top-4 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows="5"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none transition-all resize-none"
                          placeholder="Mô tả chi tiết nhu cầu của bạn..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-custom-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faPaperPlane} />
                          <span>Gửi Tin Nhắn</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>

              {/* Map & Offices */}
              <div className="animate-slide-in-right">
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Vị Trí Văn Phòng
                  </h3>
                  <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-4xl mb-4" />
                      <p>Bản đồ Google Maps</p>
                      <p className="text-sm">(Tích hợp thực tế)</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Kết Nối Với Chúng Tôi
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className={`flex items-center space-x-3 p-4 rounded-lg border transition-colors ${social.color}`}
                      >
                        <FontAwesomeIcon icon={social.icon} className="text-xl" />
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Hệ Thống Văn Phòng
              </h2>
              <p className="text-lg text-gray-600">
                Chúng tôi có mặt tại các thành phố lớn để phục vụ bạn tốt nhất
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-lg p-6 border-t-4 hover-lift animate-fade-in-up animation-delay-${(index + 2) * 200} ${
                    office.isMain ? 'border-custom-red' : 'border-gray-300'
                  }`}
                >
                  {office.isMain && (
                    <div className="bg-custom-red text-white text-xs px-3 py-1 rounded-full inline-block mb-4">
                      Văn phòng chính
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {office.name}
                  </h3>
                  
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-custom-red mt-1 flex-shrink-0" />
                      <span>{office.address}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={faPhone} className="text-custom-red flex-shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <FontAwesomeIcon icon={faEnvelope} className="text-custom-red flex-shrink-0" />
                      <span>{office.email}</span>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <FontAwesomeIcon icon={faClock} className="text-custom-red mt-1 flex-shrink-0" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Câu Hỏi Thường Gặp
              </h2>
              <p className="text-lg text-gray-600">
                Những câu hỏi phổ biến từ khách hàng
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Thời gian tối thiểu để thuê thiết bị là bao lâu?',
                  answer: 'Chúng tôi nhận đơn thuê tối thiểu 1 ngày. Đối với các đơn hàng dài hạn, chúng tôi có chính sách giảm giá đặc biệt.'
                },
                {
                  question: 'Có cung cấp dịch vụ giao hàng tận nơi không?',
                  answer: 'Có, chúng tôi có dịch vụ giao hàng tận nơi trong bán kính 20km từ văn phòng. Miễn phí giao hàng cho đơn hàng trên 1 triệu đồng.'
                },
                {
                  question: 'Nếu thiết bị gặp sự cố trong quá trình thuê thì sao?',
                  answer: 'Chúng tôi cam kết thay thế thiết bị trong vòng 2 giờ nếu có sự cố. Đội ngũ kỹ thuật luôn sẵn sàng hỗ trợ 24/7.'
                },
                {
                  question: 'Có hỗ trợ cài đặt phần mềm theo yêu cầu không?',
                  answer: 'Có, chúng tôi hỗ trợ cài đặt các phần mềm cơ bản miễn phí. Đối với phần mềm đặc biệt, chúng tôi sẽ báo giá chi tiết.'
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-lg shadow-md p-6 animate-fade-in-up animation-delay-${(index + 2) * 100}`}
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
