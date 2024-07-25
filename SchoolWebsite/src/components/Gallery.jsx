import React from 'react'
import C2 from "../assets/C2.png"
import Banner4 from "../assets/Banner4.jpg"
import Banner3 from "../assets/Banner3.jpg"
function Gallery() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:my-10 space-y-10'>
      <h1 className='text-3xl'>Gallery</h1>
    <div  className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Students performing in the cultural fest</p>
            <img src={C2} alt="Image" loading='lazy' />
        </div>

    <div  className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>A glimpse of our interactive classrooms.</p>
            <img src={Banner4} alt="image" loading='lazy' />
      </div>

      <div  className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Students reading and studying in the school library.</p>
            <img src={Banner3} alt="image" loading='lazy' />
      </div>


    </div>
  )
}

export default Gallery