import { useState } from "react"
import AllProduct from "./Componenets/AllProduct"
import Cardcontainer from "./Componenets/Cardcontainer"
import Header from "./Componenets/Header"

function App() {
const [singledata,setSingleData] = useState([])
const handledata =(product) =>{
  const isexit = singledata.find(p=> p.id === product.id);
  if(isexit){
    alert('already click the item')
   
  }else{
    const newProducts = [...singledata,product]
    setSingleData(newProducts)
  }
}
console.log(setSingleData)
  return (
    <>
    <div className="container mx-auto">
    <Header singledata={singledata}></Header>
    <section className="grid grid-cols-3 px-2 gap-3 mt-4">
      <AllProduct 
      DataPause ={handledata}
      ></AllProduct>
      <Cardcontainer singledata={singledata}></Cardcontainer>
    </section>

    </div>
 
        
    </>
  )
}

export default App
