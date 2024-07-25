import React from 'react'
import Slider from './Slider'
import Slider2 from './Slider2'
import slides from '../data/Banner.js'
import culturalFest from '../data/culturalFest.js'
import ScienceExh from '../data/ScienceExh.js'
function Home() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 my-10'><p className='text-3xl text-center'>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p></div>
    <Slider slides={slides} />
    <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 my-10'><p className='text-3xl'><span className='font-bold'>Science Exhibition -</span> Showcasing Student Innovations</p></div>
    <Slider2 images={ScienceExh} />
    <div className='max-w-screen-2xl container mx-auto md:px-10 px-4 my-10'><p className='text-3xl '><span className='font-bold'>Cultural Fest -</span> Embracing Diversity and Creativity</p></div>

    <Slider slides={culturalFest} />
    </>
  )
}

export default Home