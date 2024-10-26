import React, { useEffect, useState } from 'react'
import Product from './Product'

export default function AllProduct({DataPause}) {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
  return (
    <div className='col-span-2 border rounded-lg '>
      <div className='grid grid-cols-2 gap-4'>
      {
        products.map((data,indx) => <Product DataPause={DataPause} key={indx} singleData= {data}></Product>)
      }
      </div>
   
      
    </div>
  )
}
