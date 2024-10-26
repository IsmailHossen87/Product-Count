import React from 'react'

export default function Cardcontainer({singledata}) {
  return (
    <div className='col-span-1 border rounded-lg text-center'>
      <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
      {
              singledata.map((data,index) =>
                <tr key={index} className="hover">
                  <th>{index + 1}</th>
                  <td  className='text-blue-400'>{data.productName}</td>
                  <td>{data.price}</td>
                  <td className='text-lime-300'>{data.category}</td>
                  <div className="card-action flex justify-center">
                 <button className=" btn bg-green-400 px-3 rounded-full font-medium text-xl mt-6">Prepare</button>
               </div>
            </tr>
              )
      }
    </div>
  )
}
