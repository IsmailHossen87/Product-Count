/* eslint-disable react/prop-types */
import React from 'react'

export default function Product({singleData,DataPause}) {
  const {id,category,description,img,price,isFeature} = singleData
  console.log(singleData)
  return (
      <div className="card bg-base-100 shadow-xl x col-span-1 p-4">
        <figure>
          <img
            className='w-full h-44'
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
          <p>Price : {price}</p>
          <p>{isFeature?"feature Category":"Not Category"}</p>
          <div className="card-actions">
            <button onClick={()=>DataPause(singleData)} className="btn btn-primary">Add to Card</button>
          </div>
        </div>
      </div>
  )
}
