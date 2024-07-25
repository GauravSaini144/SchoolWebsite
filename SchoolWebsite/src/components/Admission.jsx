import React from 'react'
import Form from "../assets/Form.png"

function Admission() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:my-10 space-y-10'>
    
    <h1 className='text-3xl'>Admission</h1>
    <div  className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Process</p>
            <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        </div>

    <div  className='w-full text-xl my-5 space-y-3'>
           <p className='text-2xl font-bold'>Criteria</p>
           <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
    </div>
    <div  className='w-full text-xl my-5 space-y-3'>
           <p className='text-2xl font-bold'>Download Form</p>
           <a href={Form} download="Admission_Form" target="_blank" rel="noreferrer">
        <button className='btn btn-ghost bg-slate-300 mt-3'>Download Admission Form</button>
      </a>
    </div>

    <div className='w-full text-xl my-5 space-y-3'>
            <p className='text-2xl font-bold'>Important Dates:
            </p>
            <ul className='list-disc ml-8' >
                <li>Admission Form Availability: March 1st</li>
                <li>Last Date for Submission: March 31st</li>
                <li>Entrance Test: April 15th</li>
                <li>Announcement of Results: April 30th</li>
            </ul>
        </div>

    </div>
  )
}

export default Admission