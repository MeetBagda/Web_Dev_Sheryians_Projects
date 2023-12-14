"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [images, setImages] = useState([]);
  useEffect(()=>{
    getImages()
  },[])
  const getImages = async ()=>{
    try {
      const response = await axios.get("https://picsum.photos/v2/list")
      const data = response.data;
      setImages(data) 
    } catch (error) {
      console.log("An error occurs while fetching images!!!")
    }
  }
  return (
    <>
      <button onClick={getImages} className='bg-green-400 rounded font-bold text-white px-5 py-5 mx-10 my-10 '>
        Get Image
      </button>
      <div className='p-10'>
        {images.map((elem,i)=>{
          return <img key={i} src={elem.download_url} width={300} height={300} className='m-20 rounded inline-block'/>
        })}
      </div>
    </>
  )
}

export default page