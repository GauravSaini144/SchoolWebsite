import React from 'react'

function Academics() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:my-10 space-y-10'>
    <h1 className='text-3xl' >Academics</h1>
    <div className='w-full text-xl my-5 space-y-6'>
    <p className='text-2xl font-bold'>Curriculum:</p>
    <p ><span className='font-bold'>Primary (Grades 1-5):</span> English, Mathematics, Science, Social Studies, Art, Physical Education
    </p>
    <p><span className='font-bold'>Secondary (Grades 6-10):</span> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
    </p>
    <p><span className='font-bold'> Senior Secondary (Grades 11-12):</span>
    </p><ul className='list-disc ml-10 space-y-2'>
        <li><span className='font-bold'>Science Stream:</span> Physics, Chemistry, Biology, Mathematics, Computer Science, English
        </li>
        <li><span className='font-bold'>Commerce Stream:</span> Accountancy, Business Studies, Economics, Mathematics, English
        </li>
    </ul>
     <p><span className='font-bold'>Teaching Methodologies:</span> "We use a blend of traditional and modern teaching techniques to cater to different learning styles."
     </p>
     <p><span className='font-bold'>Educational Resources:</span> "Digital classrooms, interactive learning modules, and access to online educational platforms."
     </p>

    </div></div>
  )
}

export default Academics