import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('TẤT CẢ')

  const products = [
    {
      id: 1,
      name: 'MacBook Pro 16" M2',
      category: 'LAPTOP',
      price: '500.000',
      originalPrice: '700.000',
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/200',
      features: ['M2 Chip', '16GB RAM', '512GB SSD', 'Retina Display'],
      discount: 30
    },
    {
      id: 2,
      name: 'iPad Pro 12.9"',
      category: 'MÁY TÍNH BẢNG',
      price: '300.000',
      originalPrice: '400.000',
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/200',
      features: ['M2 Chip', '128GB Storage', 'Apple Pencil Support', 'Magic Keyboard'],
      discount: 25
    },
    {
      id: 3,
      name: 'Epson EcoTank L3250',
      category: 'MÁY IN',
      price: '80.000',
      originalPrice: '120.000',
      rating: 4.6,
      reviews: 67,
      image: '/api/placeholder/300/200',
      features: ['In màu', 'Scan', 'Copy', 'WiFi'],
      discount: 33
    },
    {
      id: 4,
      name: 'BenQ MW632ST',
      category: 'MÁY CHIẾU',
      price: '400.000',
      originalPrice: '500.000',
      rating: 4.7,
      reviews: 45,
      image: '/api/placeholder/300/200',
      features: ['3200 Lumens', 'Short Throw', 'WXGA', 'HDMI'],
      discount: 20
    },
    {
      id: 5,
      name: 'LG 27UL500-W',
      category: 'LCD',
      price: '250.000',
      originalPrice: '350.000',
      rating: 4.5,
      reviews: 78,
      image: '/api/placeholder/300/200',
      features: ['27 inch', '4K UHD', 'IPS Panel', 'HDR10'],
      discount: 29
    },
    {
      id: 6,
      name: 'Cabin Dịch Vụ Premium',
      category: 'CABIN DỊCH',
      price: '1.500.000',
      originalPrice: '2.000.000',
      rating: 4.9,
      reviews: 23,
      image: '/api/placeholder/300/200',
      features: ['Âm thanh cách ly', 'Điều hòa', 'Bàn làm việc', 'WiFi cao tốc'],
      discount: 25
    }
  ]

  const categories = ['TẤT CẢ', 'LAPTOP', 'MÁY TÍNH BẢNG', 'MÁY IN', 'MÁY CHIẾU', 'LCD', 'CABIN DỊCH']

  const filteredProducts = selectedCategory === 'TẤT CẢ' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Sản Phẩm Cho Thuê
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá bộ sưu tập thiết bị công nghệ đa dạng với chất lượng cao và giá cả hợp lý
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-custom-red text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group hover-lift animate-fade-in-up ${
                index % 3 === 0 ? '' : index % 3 === 1 ? 'animation-delay-200' : 'animation-delay-400'
              }`}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <div className="w-full h-32 sm:h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-6xl opacity-50">
                    {product.category === 'LAPTOP' && '💻'}
                    {product.category === 'MÁY TÍNH BẢNG' && '📱'}
                    {product.category === 'MÁY IN' && '🖨️'}
                    {product.category === 'MÁY CHIẾU' && '📽️'}
                    {product.category === 'LCD' && '🖥️'}
                    {product.category === 'CABIN DỊCH' && '🏢'}
                  </span>
                </div>
                
                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                    -{product.discount}%
                  </div>
                )}
                
                {/* Wishlist Button */}
                <button className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors group-hover:scale-110">
                  <FontAwesomeIcon icon={faHeart} className="text-gray-400 hover:text-red-500 transition-colors text-sm sm:text-base" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs sm:text-sm text-custom-red font-semibold bg-red-50 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center text-yellow-500">
                    <FontAwesomeIcon icon={faStar} className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="ml-1 text-xs sm:text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-custom-red transition-colors">
                  {product.name}
                </h3>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 2 && (
                      <span className="text-xs text-gray-500">+{product.features.length - 2} khác</span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-custom-red">{product.price}₫</span>
                    <span className="text-xs sm:text-sm text-gray-500 line-through ml-2">{product.originalPrice}₫</span>
                    <div className="text-xs sm:text-sm text-gray-600">/ ngày</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 sm:gap-3">
                  <button className="flex-1 bg-custom-red text-white py-2 sm:py-2.5 md:py-3 px-3 sm:px-4 text-sm sm:text-base rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center">
                    <FontAwesomeIcon icon={faShoppingCart} className="mr-1 sm:mr-2 text-sm sm:text-base" />
                    <span className="hidden sm:inline">Thuê Ngay</span>
                    <span className="sm:hidden">Thuê</span>
                  </button>
                  <button className="px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base border border-custom-red text-custom-red rounded-lg font-semibold hover:bg-custom-red hover:text-white transition-colors">
                    <span className="hidden sm:inline">Chi Tiết</span>
                    <span className="sm:hidden">Xem</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-white text-custom-red border-2 border-custom-red px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-semibold hover:bg-custom-red hover:text-white transition-colors">
            Xem Thêm Sản Phẩm
          </button>
        </div>
      </div>
    </section>
  )
}
