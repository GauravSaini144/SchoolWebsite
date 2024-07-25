import React from 'react'

function Faculty() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:my-10 space-y-10'>
     
     <h1 className='text-3xl'>Faculty at Springdale</h1>
     <div className='w-full text-xl my-5 space-y-3'>
            <ul className='list-disc ml-8 space-y-4' >
                <li><span className='font-bold'>John Doe: Principal</span>, M.Ed, 20 years of experience in educational administration.
                </li>
                <li><span className='font-bold'>Jane Smith: Vice Principal</span>, M.Sc. in Physics, 15 years of teaching experience.</li>
                <li><span className='font-bold'>Emily Johnson: English Teacher</span>, M.A. in English, 10 years of teaching experience.
                </li>
                <li><span className='font-bold'>Michael Brown: Mathematics Teacher</span>, M.Sc. in Mathematics, 8 years of teaching experience.
                </li>
                <li><span className='font-bold'>Sophia Davis: Science Teacher</span>, M.Sc. in Chemistry, 12 years of teaching experience.
                </li>
                <li><span className='font-bold'>David Wilson: Computer Science Teacher</span>, B.Tech in Computer Science, 5 years of teaching experience.
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Faculty