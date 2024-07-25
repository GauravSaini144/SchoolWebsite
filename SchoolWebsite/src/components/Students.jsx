import React from 'react'

function Students() {
  return (
    <div className='max-w-screen-2xl container md:px-20 px-4 md:my-10 space-y-10'>
        <h1 className='text-3xl' >Students</h1>
        <div className='w-full text-xl my-5 space-y-6'>
            <p className='text-2xl font-bold'>Life at Springdale:
            </p>
            <ul className='list-disc ml-10'>
                <li><span className='font-bold'>Extracurricular Activities:</span> Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
                </li>
                <li><span className='font-bold'>Clubs and Societies:</span> "Literary Society, Environmental Club, Astronomy Club, Coding Club"
                </li>
            </ul>
        </div>

        <div className='w-full text-xl my-5 space-y-6'>
            <p className='text-2xl font-bold'>Achievements:
            </p>
            <ul className='list-disc ml-10'>
                <li>John Smith - National Level Math Olympiad Winner</li>
                <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
                <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
            </ul>
        </div>
        <div className='w-full text-xl my-5 space-y-6'>
            <p className='text-2xl font-bold'>Student Council:
            </p>
            <ul className='list-disc ml-10'>
                <li> <span className='font-bold'>President:</span> Amy Parker, Grade 12
                </li>
                <li><span className='font-bold'>Vice President:</span> Rajiv Mehta, Grade 11
                </li>
                <li><span className='font-bold'>Secretary:</span> Lisa Wong, Grade 10
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Students