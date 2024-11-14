import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const color=useSelector(state=>state.color.value)
  return (
    <div>
        <hr />
        <div className='box' style={{background:color}}></div>
      

    </div>
  )
}

export default Footer
