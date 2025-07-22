import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEye, 
  faBullseye, 
  faUsers, 
  faAward, 
  faHandshake, 
  faLaptop,
  faCalendarAlt,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'

export default function About() {
  const stats = [
    {
      icon: faUsers,
      number: '1000+',
      label: 'Khách hàng tin tưởng',
      color: 'text-blue-600'
    },
    {
      icon: faLaptop,
      number: '500+',
      label: 'Thiết bị có sẵn',
      color: 'text-green-600'
    },
    {
      icon: faCalendarAlt,
      number: '5+',
      label: 'Năm kinh nghiệm',
      color: 'text-purple-600'
    },
    {
      icon: faThumbsUp,
      number: '99%',
      label: 'Khách hàng hài lòng',
      color: 'text-orange-600'
    }
  ]

  const values = [
    {
      icon: faEye,
      title: 'Tầm nhìn',
      description: 'Trở thành công ty hàng đầu Việt Nam trong lĩnh vực cho thuê thiết bị công nghệ, mang đến giải pháp tối ưu cho mọi nhu cầu của khách hàng.',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: faBullseye,
      title: 'Sứ mệnh',
      description: 'Cung cấp dịch vụ cho thuê thiết bị chất lượng cao với giá cả hợp lý, hỗ trợ khách hàng tiết kiệm chi phí và nâng cao hiệu quả công việc.',
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: faAward,
      title: 'Giá trị cốt lõi',
      description: 'Chất lượng - Uy tín - Chuyên nghiệp - Tận tâm. Chúng tôi cam kết mang đến trải nghiệm dịch vụ tốt nhất cho từng khách hàng.',
      color: 'bg-purple-50 text-purple-600'
    }
  ]

  const team = [
    {
      name: 'Nguyễn Văn Nam',
      position: 'Giám đốc điều hành',
      experience: '8 năm kinh nghiệm',
      avatar: '👨‍💼',
      description: 'Chuyên gia trong lĩnh vực công nghệ và quản lý dự án'
    },
    {
      name: 'Trần Thị Lan',
      position: 'Trưởng phòng Kinh doanh',
      experience: '6 năm kinh nghiệm',
      avatar: '👩‍💻',
      description: 'Chuyên viên tư vấn và phát triển kinh doanh'
    },
    {
      name: 'Lê Minh Tuấn',
      position: 'Trưởng phòng Kỹ thuật',
      experience: '7 năm kinh nghiệm',
      avatar: '👨‍🔧',
      description: 'Kỹ sư chuyên về bảo trì và hỗ trợ kỹ thuật'
    }
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-red to-red-600 text-white py-20">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Về Chúng Tôi
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Chúng tôi tự hào là đơn vị hàng đầu trong lĩnh vực cho thuê thiết bị công nghệ tại Việt Nam
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center animate-fade-in-up ${
                    index % 2 === 0 ? 'animation-delay-200' : 'animation-delay-400'
                  }`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.color} bg-gray-50`}>
                    <FontAwesomeIcon icon={stat.icon} className="text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Câu Chuyện Của Chúng Tôi
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Được thành lập từ năm 2019, chúng tôi bắt đầu với mong muốn đơn giản: 
                    giúp các doanh nghiệp và cá nhân tiếp cận công nghệ hiện đại mà không cần 
                    đầu tư quá lớn.
                  </p>
                  <p>
                    Qua 5 năm phát triển, chúng tôi đã phục vụ hơn 1000 khách hàng từ các 
                    doanh nghiệp lớn đến các startup, từ các sự kiện quy mô nhỏ đến những 
                    hội nghị quốc tế.
                  </p>
                  <p>
                    Với đội ngũ chuyên nghiệp và kho thiết bị đa dạng, chúng tôi cam kết 
                    mang đến giải pháp tối ưu nhất cho mọi nhu cầu của khách hàng.
                  </p>
                </div>
              </div>
              <div className="animate-slide-in-right">
                <div className="bg-gradient-to-br from-custom-red to-red-600 rounded-2xl p-8 text-white">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2019</div>
                      <div className="text-red-100">Năm thành lập</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">3</div>
                      <div className="text-red-100">Văn phòng</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-red-100">Nhân viên</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-red-100">Hỗ trợ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tầm Nhìn & Sứ Mệnh
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Những giá trị cốt lõi định hướng mọi hoạt động của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`text-center animate-fade-in-up animation-delay-${(index + 2) * 200}`}
                >
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${value.color} flex items-center justify-center`}>
                    <FontAwesomeIcon icon={value.icon} className="text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Đội Ngũ Lãnh Đạo
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Những con người tài năng đứng sau thành công của chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl shadow-lg p-6 text-center hover-lift animate-fade-in-up animation-delay-${(index + 2) * 200}`}
                >
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center text-4xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <div className="text-custom-red font-semibold mb-1">
                    {member.position}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {member.experience}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Tại Sao Chọn Chúng Tôi?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center animate-fade-in-up animation-delay-200">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faAward} className="text-2xl text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Chất lượng cao</h3>
                <p className="text-sm text-gray-600">Thiết bị chính hãng, mới 100%</p>
              </div>

              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faHandshake} className="text-2xl text-green-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Dịch vụ tận tâm</h3>
                <p className="text-sm text-gray-600">Hỗ trợ 24/7, tư vấn chuyên nghiệp</p>
              </div>

              <div className="text-center animate-fade-in-up animation-delay-600">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faUsers} className="text-2xl text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Kinh nghiệm lâu năm</h3>
                <p className="text-sm text-gray-600">5+ năm trong ngành</p>
              </div>

              <div className="text-center animate-fade-in-up animation-delay-800">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faThumbsUp} className="text-2xl text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Giá cả hợp lý</h3>
                <p className="text-sm text-gray-600">Giá tốt nhất thị trường</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
