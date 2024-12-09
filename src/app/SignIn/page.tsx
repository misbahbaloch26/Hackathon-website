import React from 'react'

const SignIn = () => {
  return (
    <div>
        <section className="text-gray-600 body-font relative">

  <div className="container px-5 py-24 mx-auto ">

    <div className="flex flex-col justify-center text-center w-full mb-12 pt-1">
    
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 mt-0 font-sans">
        Your Account <br /> for everything <br /> Nike
      </h1>
      </div>

    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2 justify-center  text-center">
       
        <div className="p-2 w-full">
          <div className="relative">
           
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email address'
              className="w-[324px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
               focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
               leading-8 transition-colors duration-200 ease-in-out mt-2 "
            />
          </div>
        </div>
<br />
        <div className="p-2 w-full">
          <div className="relative">
           <input
             type="password"
             id="email"
             name="email"
             placeholder='password'
             className=" bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500
              focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 
              leading-8 transition-colors duration-200 ease-in-out w-[324px]"
             />
           </div>
          </div>

          <div className='flex  items-center justify-between p-4 mx-5 gap-2  '>
            <h3 className='pr-2'>keep me sign in </h3>
            <div className='flex items-center gap-5 pl-5'><h3 >forgotten your password?</h3></div>
          </div>

          <div>
            <p>By logging in, you agree to Nike's <a href="#" className='underline'>privacy policy</a> <br />
            and<a href="#" className='underline'>Terms and Conditions</a></p>
          </div>

        <div className="p-2 w-full  text-center mt-5">
          <button className="flex text-center justify-center mx-auto text-white bg-black w-[324px] border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Sign In
          </button>
        </div>
       
               
            <div className='flex justify-center text center'>
               <p>Not a Member? <a href="JoinUs" className='underline text-blue-900'>Join Us</a></p>
            </div>


      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default SignIn