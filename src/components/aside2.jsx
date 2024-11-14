import React from 'react'
import { useSelector } from 'react-redux'

const Aside2 = () => {
    const color=useSelector(state=>state.color.value)
  return (
    <div >
     <div className='box' style={{background:color}}>

     </div>
     
    </div>
    
  )
}

export default Aside2
