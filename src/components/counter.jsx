import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease_count, increase_count } from '../redux/slice/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count=useSelector((state)=>state.counter.value)
    
  
    
    const increase_countt=()=>{
        dispatch(increase_count())
    }
    const decrease_countt=()=>{
        dispatch(decrease_count())
    }
  return (
    <div className='ct'>
      <button onClick={increase_countt}>+</button>
      <span className='count'>{count}</span>
      <button onClick={decrease_countt}>-</button>
    </div>
  )
}

export default Counter;
