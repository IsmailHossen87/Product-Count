import React from 'react'

export default function Header({singledata}) {
  return (
    <div className='bg-gray-300 py-3 px-2'>
        <nav className='flex justify-between '>
            <p className='font-bold '>logo</p>
            <div>
                <ul className='flex gap-3'>
                    <li>Home</li>
                    <li>Product</li>
                    <li className='font-bold ' >Card :{singledata.length}</li>
                    <li className='font-bold'>Taka : 200</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
