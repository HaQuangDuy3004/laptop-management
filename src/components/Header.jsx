import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <>
        <div className='flex justify-between items-center px-4 md:px-12 lg:px-32 py-2.5 border-b border-gray-200 bg-white'>
            <div className='flex items-center'>
                <img src={logo} alt="logo" className='h-16 mr-2.5'/>
                <h2 className='text-custom-red text-lg font-bold '>DỊCH VỤ CHO THUÊ LAPTOP</h2>
            </div>

            <div className='text-right'>
                <h2 className='text-custom-red font-bold mb-1.5'>HOTLINE: 0123456789</h2>
                <div className='flex border border-gray-300 h-9'>
                    <input 
                        placeholder='Tìm kếm sản phẩm...' 
                        className='border-none px-2.5 flex-1 outline-none'
                    />
                    <button className='w-10 bg-custom-red border-none text-white cursor-pointer hover:bg-red-800 transition-colors'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </div>
        </div>
    </>
  );
}
