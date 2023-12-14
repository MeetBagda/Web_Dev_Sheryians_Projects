"use client"
import Header from '@/Components/Header';
import React, { useState } from 'react'

const page = () => {
  let [count, setCount] = useState(1)
  const [user, setUser] = useState("MEET")
  function increment(){
    setCount(count + 1);
  }
  return (
    <>
      <h1 className='text-3xl text-red-500 font-bold bg-blue-300'>Count : {count}</h1>
      <button className='bg-slate-400 rounded mt-5' onClick={()=>{increment()}}>Increment</button>
      <Header user={user}/>
    </>
  )
}

export default page