import React, { useState } from 'react'

function Contact() {
  const [input, setInput]=useState({name:"", email:"", message:""});

  const handleChange=(event)=>{
    setInput((currdata)=>{
      currdata[event.target.name]=event.target.value;
      return {
        ...currdata
      }
    }
    )
  }

  const handleSubmit=(event)=>{


    event.preventDefault();

    console.log(input);
    setInput({name:"", email:"", message:""});
  }
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:my-10 space-y-10'>
      <h1 className='text-3xl'>Contact Us</h1>
      
      <div className='w-full text-xl my-5 space-y-6'>
        <p className='text-2xl font-bold'>Address :</p>
        <p>Springdale Public School, 123 Education Lane, Cityville, State, 203006</p>

      </div>
        
      <div className='w-full text-xl my-5 space-y-6'>
        <p><span className='font-bold'>Phone :</span> +1 (123) 456-7890</p>
      </div>
      <div className='w-full text-xl my-5 space-y-6'>
        <p><span className='font-bold'>Email :</span> info@springdale.edu</p>

      </div>

      <div className='text-xl my-5 space-y-6'>
        <p className='text-2xl font-bold'>Contact Form :</p>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-6'  style={{width:"60%"}}>
      
           <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Name" name='name' value={input.name} onChange={handleChange} required/>
        
        
           <input type="text" className="input input-bordered w-full max-w-xs" placeholder="Email" name='email' value={input.email} onChange={handleChange} required/>
    

        <textarea className="textarea textarea-bordered" placeholder="Message" name='message' value={input.message} onChange={handleChange} required></textarea>

        <button className='btn btn ghost w-20'>Submit</button>
        </form>
      </div>
      <div className='w-full text-xl my-5 space-y-6'>
        <p className='text-2xl font-bold'>Map Location :</p>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9330660826336!2d72.8679081750518!3d19.066680282135913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8ebf2dfe3e9%3A0x1e402f1b9c8b9a77!2sDhirubhai%20Ambani%20International%20School!5e0!3m2!1sen!2sin!4v1721827299242!5m2!1sen!2sin" 
       width="auto"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex="0"
      loading='lazy'></iframe>
      </div>
    </div>
  )
}

export default Contact