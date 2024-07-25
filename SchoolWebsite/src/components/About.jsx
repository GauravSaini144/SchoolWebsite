import React from 'react'

function About() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:my-10 space-y-10'>
        
        <h1 className='text-3xl '>About Us</h1>
        <div id='history' className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>History</p>
            <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
        </div>
        <div id='vision' className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Vision</p>
            <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
        </div>
        <div id='mission' className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Mission</p>
            <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
        </div>
        <div id='message' className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Principal's Message
            </p>
            <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
        </div>
        <div id='infra' className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Infrastructure and Facilities</p>
            <ul className='list-disc ml-8' >
                <li>State-of-the-art science and computer labs</li>
                <li>Spacious and well-equipped classrooms</li>
                <li>Library with a vast collection of books and digital resources</li>
                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
            </ul>
        </div>
    </div>

  )
}

export default About