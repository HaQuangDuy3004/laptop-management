import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCalendarAlt, 
  faMapMarkerAlt, 
  faUsers, 
  faLaptop,
  faEye,
  faFilter,
  faSearch
} from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('TẤT CẢ')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['TẤT CẢ', 'HỘI NGHỊ', 'SỰ KIỆN', 'GIÁO DỤC', 'DOANH NGHIỆP', 'KHÁCH SẠN']

  const projects = [
    {
      id: 1,
      title: 'Hội nghị quốc tế về Công nghệ 2024',
      category: 'HỘI NGHỊ',
      client: 'Bộ Khoa học và Công nghệ',
      date: 'Tháng 12, 2024',
      location: 'TP.HCM',
      participants: 500,
      equipment: 'Laptop, Máy chiếu, Hệ thống âm thanh',
      description: 'Cung cấp thiết bị cho hội nghị quốc tế quy mô lớn với sự tham gia của các chuyên gia công nghệ từ nhiều quốc gia.',
      image: '🏢',
      status: 'Hoàn thành',
      duration: '3 ngày'
    },
    {
      id: 2,
      title: 'Chương trình đào tạo nhân viên Samsung',
      category: 'DOANH NGHIỆP',
      client: 'Samsung Vietnam',
      date: 'Tháng 11, 2024',
      location: 'Hà Nội',
      participants: 200,
      equipment: 'Laptop Dell, iPad, Máy in',
      description: 'Hỗ trợ thiết bị cho chương trình đào tạo kỹ năng công nghệ cho nhân viên Samsung.',
      image: '💼',
      status: 'Hoàn thành',
      duration: '5 ngày'
    },
    {
      id: 3,
      title: 'Triển lãm Công nghệ Việt Nam 2024',
      category: 'SỰ KIỆN',
      client: 'VINASA',
      date: 'Tháng 10, 2024',
      location: 'TP.HCM',
      participants: 1000,
      equipment: 'Laptop, Máy tính bảng, Màn hình LCD',
      description: 'Cung cấp thiết bị hiển thị và demo cho triển lãm công nghệ lớn nhất Việt Nam.',
      image: '🎪',
      status: 'Hoàn thành',
      duration: '4 ngày'
    },
    {
      id: 4,
      title: 'Khóa học Lập trình - ĐH Bách Khoa',
      category: 'GIÁO DỤC',
      client: 'Đại học Bách Khoa TP.HCM',
      date: 'Tháng 9, 2024',
      location: 'TP.HCM',
      participants: 150,
      equipment: 'Laptop HP, Máy chiếu',
      description: 'Cho thuê laptop cho khóa học lập trình mùa hè dành cho sinh viên.',
      image: '🎓',
      status: 'Hoàn thành',
      duration: '30 ngày'
    },
    {
      id: 5,
      title: 'Hội thảo Chuyển đổi số - Khách sạn Rex',
      category: 'KHÁCH SẠN',
      client: 'Rex Hotel Saigon',
      date: 'Tháng 8, 2024',
      location: 'TP.HCM',
      participants: 80,
      equipment: 'Laptop, Máy chiếu, Hệ thống âm thanh',
      description: 'Hỗ trợ thiết bị cho hội thảo về chuyển đổi số trong ngành khách sạn.',
      image: '🏨',
      status: 'Hoàn thành',
      duration: '1 ngày'
    },
    {
      id: 6,
      title: 'Sự kiện ra mắt sản phẩm Viettel',
      category: 'SỰ KIỆN',
      client: 'Viettel Group',
      date: 'Tháng 7, 2024',
      location: 'Hà Nội',
      participants: 300,
      equipment: 'iPad Pro, MacBook, Máy chiếu 4K',
      description: 'Cung cấp thiết bị cao cấp cho sự kiện ra mắt sản phẩm mới của Viettel.',
      image: '🚀',
      status: 'Hoàn thành',
      duration: '2 ngày'
    },
    {
      id: 7,
      title: 'Chương trình đào tạo FPT Software',
      category: 'DOANH NGHIỆP',
      client: 'FPT Software',
      date: 'Tháng 1, 2025',
      location: 'Đà Nẵng',
      participants: 250,
      equipment: 'Laptop Lenovo, Máy chiếu, Tablet',
      description: 'Dự án cung cấp thiết bị cho chương trình đào tạo nhân viên mới.',
      image: '🔧',
      status: 'Đang thực hiện',
      duration: '10 ngày'
    },
    {
      id: 8,
      title: 'Hội nghị Y tế Quốc tế',
      category: 'HỘI NGHỊ',
      client: 'Bộ Y tế',
      date: 'Tháng 2, 2025',
      location: 'TP.HCM',
      participants: 400,
      equipment: 'Laptop Dell, Máy chiếu, Hệ thống hội nghị',
      description: 'Dự án hỗ trợ thiết bị cho hội nghị y tế quốc tế.',
      image: '⚕️',
      status: 'Sắp triển khai',
      duration: '3 ngày'
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'TẤT CẢ' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getStatusColor = (status) => {
    switch (status) {
      case 'Hoàn thành':
        return 'bg-green-100 text-green-800'
      case 'Đang thực hiện':
        return 'bg-blue-100 text-blue-800'
      case 'Sắp triển khai':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-custom-red to-red-600 text-white py-20">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dự Án Của Chúng Tôi
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              Khám phá những dự án tiêu biểu mà chúng tôi đã thực hiện thành công
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="text-4xl font-bold text-custom-red mb-2">100+</div>
                <div className="text-gray-600">Dự án hoàn thành</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-200">
                <div className="text-4xl font-bold text-custom-red mb-2">50K+</div>
                <div className="text-gray-600">Người tham gia</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-400">
                <div className="text-4xl font-bold text-custom-red mb-2">15+</div>
                <div className="text-gray-600">Ngành nghề</div>
              </div>
              <div className="text-center animate-fade-in-up animation-delay-600">
                <div className="text-4xl font-bold text-custom-red mb-2">99%</div>
                <div className="text-gray-600">Thành công</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm dự án..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faFilter} className="text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-red focus:border-transparent outline-none"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover-lift animate-fade-in-up ${
                    index % 3 === 0 ? '' : index % 3 === 1 ? 'animation-delay-200' : 'animation-delay-400'
                  }`}
                >
                  {/* Project Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <div className="text-custom-red font-semibold mb-3">
                      {project.client}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="px-6 pb-4">
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="w-4 h-4 mr-2 text-custom-red" />
                        <span>{project.date} • {project.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4 mr-2 text-custom-red" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faUsers} className="w-4 h-4 mr-2 text-custom-red" />
                        <span>{project.participants} người tham gia</span>
                      </div>
                      <div className="flex items-center">
                        <FontAwesomeIcon icon={faLaptop} className="w-4 h-4 mr-2 text-custom-red" />
                        <span>{project.equipment}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <button className="flex items-center space-x-2 text-custom-red hover:text-red-700 font-semibold">
                      <FontAwesomeIcon icon={faEye} />
                      <span>Xem chi tiết</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Không tìm thấy dự án nào
                </h3>
                <p className="text-gray-500">
                  Hãy thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-custom-red to-red-600">
        <div className="px-4 md:px-12 lg:px-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bạn Có Dự Án Cần Hỗ Trợ?
            </h2>
            <p className="text-xl mb-8">
              Hãy để chúng tôi giúp bạn thực hiện dự án một cách hoàn hảo nhất
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-custom-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Liên Hệ Tư Vấn
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-custom-red transition-colors">
                Xem Báo Giá
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
