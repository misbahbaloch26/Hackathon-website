import React from 'react'
import HomeContent, { BestProducts } from '../components/HomeContent'
import SignIn from '../SignIn/page'


const Home = () => {
  return (
    <div>
       <div>
        <HomeContent/>
        <BestProducts/>
        
       </div>

    </div>
  )
}

export default Home