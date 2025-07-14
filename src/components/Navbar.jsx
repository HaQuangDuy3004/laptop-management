export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-100 border-t border-gray-300 py-3 px-4 md:px-12 lg:px-32">
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li className="relative group cursor-pointer hover:text-custom-red transition-colors">
            DỊCH VỤ CHO THUÊ ▾
            {/* Dropdown menu */}
            <div className="absolute top-full left-0 mt-3 w-48 bg-white border border-gray-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  CABIN DỊCH
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  LAPTOP
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  IPAD, MÁY TÍNH BẢNG
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  MÁY IN
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  LCD
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  MÁY CHIẾU
                </li>
              </ul>
            </div>
          </li>
          <li className="cursor-pointer hover:text-custom-red transition-colors">
            GIỚI THIỆU
          </li>
          <li className="cursor-pointer hover:text-custom-red transition-colors">
            DỰ ÁN
          </li>
          <li className="cursor-pointer hover:text-custom-red transition-colors">
            LIÊN HỆ
          </li>
        </ul>
      </nav>
    </>
  );
}
