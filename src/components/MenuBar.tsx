import React from 'react'
import { CiBookmark } from 'react-icons/ci';
import { FaPrayingHands, FaHandHoldingHeart } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { IoBookOutline } from 'react-icons/io5';
import { PiBatteryPlusVerticalLight, PiChatsCircleDuotone } from 'react-icons/pi';
import { TbCategory2 } from 'react-icons/tb';
export default function MenuBar() {
  return (
    <div className="relative ">
    {/* Menu bar for larger screens */}
    <div className="hidden md:flex flex-col container mx-auto justify-around items-center fixed top-0 left-0 h-full w-16 bg-gray-100 shadow-lg py-6 space-y-6">
      <div className="p-2 bg-[#1fa45b]  rounded-lg text-white">
        <FaPrayingHands className='text-5xl' />
      </div>
     <div className='space-y-4'>
     <GoHome  className="text-3xl text-gray-500 hover:text-green-200" />
      <TbCategory2  className="text-3xl text-gray-500 hover:text-green-200" />
      <HiOutlineLightBulb  className="text-3xl text-gray-500 hover:text-green-200" />
      <CiBookmark className="text-3xl text-gray-500 hover:text-green-200" />
      <PiBatteryPlusVerticalLight  className="text-3xl text-gray-500 hover:text-green-200" />
      <PiChatsCircleDuotone  className="text-3xl text-gray-500 hover:text-green-200" />
      <IoBookOutline  className="text-3xl text-gray-500 hover:text-green-200" />
     </div>
      <div className="p-2 bg-green-500 rounded-lg text-white">
        <FaHandHoldingHeart className='text-4xl' />
      </div>
    </div>

    {/* Menu bar for smaller screens */}
    <div className="flex md:hidden justify-around fixed bottom-0 left-0 w-full bg-gray-100 p-4 shadow-lg">
      <GoHome  size={24} className="text-gray-500 mx-4 hover:text-green-500" />
      <TbCategory2 size={24} className="text-gray-500 mx-4 hover:text-green-500" />
      <HiOutlineLightBulb size={24} className="text-gray-500 mx-4 hover:text-green-500" />
      <CiBookmark size={24} className="text-gray-500 mx-4 hover:text-green-500" />
      <PiBatteryPlusVerticalLight size={24} className="text-gray-500 mx-4 hover:text-green-500" />
      <PiChatsCircleDuotone size={24} className="text-gray-500 mx-4 hover:text-green-500" />
      <IoBookOutline size={24} className="text-gray-500 mx-4 hover:text-green-500" />
    </div>
  </div>
  )
}
