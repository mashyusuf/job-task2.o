import React from 'react'
import boyImg from '../app/assets/boyImg.png'
import Image from 'next/image'
import Link from 'next/link'
import Duas from './Banner'

export default function Dua() {
  return (
    <div>
       <Link href={''}>
      <div className='flex gap-2 items-center justify-between'>
      <Image src={boyImg} alt='boyImage' width={50} height={50} />
     <div className='flex-col'>
     <h1 className='text-sm font-semibold text-green-600'>Introduction to Dua</h1>
     <p className='text-xs text-gray-400'>Subcategory: 11</p>
      </div>
      <div className='flex-col items-center'>
        <p className='text-black text-xs'>15</p>
        <p className='text-gray-400 text-xs'>Duas</p>
      </div>
      </div>
       </Link>
       <Duas />
    </div>
  )
}
