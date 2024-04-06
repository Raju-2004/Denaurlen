import React from 'react'
import Image1 from '../assets/Group 24.svg'
import Image2 from '../assets/Group 23.png'
import Image3 from '../assets/Group 37.svg'
import ActivityCard from './ActivityCard'
const HomePage = () => {
  return (
    <div className='w-screen h-screen p-10 bg-bottom bg-contain bg-Wave bg-no-repeat'>
      <div>
        <div className='text-indigo text-5xl font-bold leading-7 text-center'>
            Welcome to DENAURLEN
        </div>
        <div className='py-6 text-lg text-gray-400 font-medium leading-6 text-center'>
            Gamify with Smart Savvy Social Network
        </div>
      </div>
      <div className='grid grid-cols-3 py-5 justify-items-center'>
        <ActivityCard number={1} text='Activity to infinity' image={Image1}/>
        <ActivityCard number={2} text='One Platform Multiple Persona' image={Image2}/>
        <ActivityCard number={3} text='Real you, rewards for you!' image={Image3}/>
      </div>
      <div className='w-36 pl-7 my-16 mx-[700px] py-2 gap-0 bg-indigo text-white rounded-lg'>
        Get Started
      </div>
    </div>
  )
}

export default HomePage
