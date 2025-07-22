import React from 'react'
import logo from '../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header({ onPageChange }) {

  return (
    <>
        <div className='flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 md:px-12 lg:px-32 py-3 lg:py-2.5 border-b border-gray-200 bg-white gap-4 lg:gap-0'>
            <div className='flex items-center cursor-pointer w-full lg:w-auto justify-center lg:justify-start' onClick={() => onPageChange('home')}>
                <img src={logo} alt="logo" className='h-12 sm:h-14 md:h-16 mr-2 sm:mr-2.5'/>
                <h2 className='text-custom-red text-sm sm:text-base md:text-lg font-bold text-center lg:text-left'>DỊCH VỤ CHO THUÊ LAPTOP</h2>
            </div>

            <div className='w-full lg:w-auto text-center lg:text-right'>
                <h2 className='text-custom-red font-bold mb-2 lg:mb-1.5 text-sm sm:text-base'>HOTLINE: 0898 401 028</h2>
                <div className='w-full sm:w-80 md:w-96 mx-auto lg:mx-0 flex border border-gray-300 h-8 sm:h-9'>
                    <input 
                        placeholder='Tìm kếm sản phẩm..' 
                        className='border-none px-2 sm:px-2.5 flex-1 outline-none text-sm sm:text-base'
                    />
                    <button className='w-8 sm:w-10 bg-custom-red border-none text-white cursor-pointer hover:bg-red-800 transition-colors'>
                        <FontAwesomeIcon icon={faSearch} className="text-sm sm:text-base" />
                    </button>
                </div>
            </div>
        </div>
    </>
  );
}
