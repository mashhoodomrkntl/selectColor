import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const color=useSelector(stat=>stat.color.value)
  return (
    <div>
      <div className='box' style={{background:color}}>
        
      </div>
      
      <hr />
    </div>
  )
}

export default Header
