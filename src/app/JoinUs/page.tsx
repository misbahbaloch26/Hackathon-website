import React from 'react'

const JoinUs = () => {
  return (
    <div>
      <section  className="text-gray-600 body-font relative">
        <div className='container px-5 py-24 mx-auto  text-center'>
            <h1 className='font-bold text-center text-black font-sans mb-4'>BECOME A NIKE MEMBER</h1>
            <p className='mb-3 text-gray-500'>Create your Nike Member profile and get <br /> first access to the very best of Nike <br /> products,
                 inspiration and community.</p>
        <div/>
       
       <div className=' text-center'>
<input type="text" placeholder='Email address' className=' sm:w-[100px] md:w-[310px] lg:w-[320] xl:w-[324px]
 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
               leading-8 transition-colors duration-200 ease-in-out mt-2 '/>
<br />

<input type="text" placeholder='password' className=' bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
               leading-8 transition-colors duration-200 ease-in-out mt-2  sm:w-[100px] md:w-[310px] lg:w-[320] xl:w-[324px]'/>

<br />
<input type="text" placeholder='First Name' className=' bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
               leading-8 transition-colors duration-200 ease-in-out mt-2  sm:w-[100px] md:w-[310px] lg:w-[320] xl:w-[324px]'/>

<br />
<input type="text" placeholder='Last Name' className=' bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
               leading-8 transition-colors duration-200 ease-in-out mt-2  sm:w-[100px] md:w-[310px] lg:w-[320] xl:w-[324px]'/>

<br />
<input type="text" placeholder='Date of Birth' className=' bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
               leading-8 transition-colors duration-200 ease-in-out mt-2  sm:w-[100px] md:w-[310px] lg:w-[320] xl:w-[324px]'/>
               <h3 className='font-light text-sm text-slate-500 '>
               Get a Nike Member Reward every year on your Birthday.
               </h3>
<input type="text" placeholder='Pakistan' className=' bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
               leading-8 transition-colors duration-200 ease-in-out mt-2  sm:w-[100px] md:w-[310px] lg:w-[320] xl:w-[324px]'/>
               </div>

               <div className=' text-center mt-5'>
                <button className='border-2 border-gray-300 w-[153] h-[43] rounded-sm' >Male</button> 
                <button className='border-2 border-gray-300 ml-[15] w-[153] h-[43]'>Female</button>


              
                <p className='mt-5'>Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                <p>By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
                


               
                <div className="p-2 w-full  text-center mt-5">
          <button className="flex text-center justify-center mx-auto text-white bg-black w-[324px] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Sign In
          </button>
        </div>

        <p>Already a Member? 
            <a href="/SignIn" className='underline text-blue-900'>Sign in</a>
        </p>
               </div>
        </div>
      </section>
    </div>
  )
}

export default JoinUs