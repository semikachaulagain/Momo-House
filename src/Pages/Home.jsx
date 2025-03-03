import React from 'react'
import { HiMiniArrowLongRight } from 'react-icons/hi2'
import onebg from '../assets/Home/onebg.png'
import man from '../assets/Home/man.png'
import semicircle from '../assets/Home/semicircle.png'
import plate from '../assets/Home/plate.png'
import { NavLink } from 'react-router-dom'
import momologo from "../assets/Home/momologo.png";
import {FaFacebook} from "react-icons/fa";
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillTikTok } from 'react-icons/ai';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";

const Home = () => {
  return (
    <div>
    <div className='h-190'>
    <section className="container mx-auto flex flex-col md:flex-row items-center py-16 px-6">
        <div className="md:w-1/2 ml-[110px] mt-[100px]">
        <h1 className='text-gray-500 space-x-2 tracking-[2px]'>RESTAURANT</h1>
            <h2 className="text-4xl font-bold text-gray-800">
                The <span className="text-white bg-cover bg-center" style={{ backgroundImage: `url(${onebg}` }}>#One</span>
            </h2>
            <p className='font-bold text-[50px]'>Momo <span className='text-orange-600'>Restaurant</span></p>
            <p className="mt-4 text-gray-600">More than <span className="font-semibold text-orange-500">20+</span> varieties of momo available for you.</p>
           <NavLink to = "/Menu"> 
            <button className='flex justify-center items-center border h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]' >
            Explore Food Menu
            <HiMiniArrowLongRight className='mt-[5px] ml-[5px] text-2xl' />
          </button></NavLink>
        </div>
        
        <div className='flex'>
          <div>
            <img src={semicircle} alt="" className='h-[700px] absolute right-0 top-0 -z-50' />
          </div>
          <div>
            <img src={plate} alt="" className='h-[400px] absolute right-[30px] top-[150px]' />
          </div>
        </div>
    </section>
    </div>

    <div className='ml-[110px] h-[500px] flex justify-between'>
        <div className=' w-[360px] h-[430px] bg-teal-900 flex justify-center rounded-t-[300px]'>
          <img src={man} alt="" className='h-[500px] absolute top-[754px]' />
        </div>
        <div className='w-[500px] mr-[100px]'>
          <h1 className='font-bold text-[35px]'>Why Customer <span className='text-orange-600'>Love Us</span></h1>
          <p className='mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo qui rerum hic adipisci nostrum dolorum deleniti cupiditate numquam, quae architecto vitae similique, placeat optio mollitia dignissimos minus officiis vel unde! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil atque quod eos eligendi odit. Ratione, nisi culpa nihil perspiciatis alias libero cumque dolorum officiis saepe quod, mollitia ducimus commodi corrupti!
          </p>
          <button className='flex justify-center items-center border h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]' >Explore Our Story <HiMiniArrowLongRight className='mt-[5px] ml-[5px] text-2xl' /></button>
        </div>
      </div>

      <div className="h-50">
       
        <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-[25px] '>Our  <span className='text-orange-600'>Most Popular</span> Recipes</h1>
        <p className='mt-[10px] text-gray-500' >Browse through a varieties of recipes with fresh ingridients selected only from the best places</p>
        </div>
      
      <div className='mt-10 flex justify-center items-center space-x-4'>
      <button className='border h-10 w-25 rounded-2xl bg-white hover:bg-gray-200 text-black'>Buff</button>
      <button className='border border-gray-300 h-10 w-25 rounded-2xl bg-white hover:bg-gray-200 text-black'>Chicken</button>
      <button className='border border-gray-300 h-10 w-25 rounded-2xl bg-white hover:bg-gray-200 text-black'>Veg</button>
      </div>
      
      <div>
      
      </div>

      <div className='flex justify-center items-center'>
      <button className='flex justify-center items-center border h-[55px] w-[220px] rounded-[50px] bg-teal-900 text-white hover:bg-teal-950 mt-[40px]' >Explore Our Story <HiMiniArrowLongRight className='mt-[5px] ml-[5px] text-2xl' /></button>
      </div>

        <div className='mt-[40px] h-[400px] bg-gray-100 p-[50px]'>
              <div className=' flex justify-between items-center w-[1128px] h-[200px]'>
                <div className='w-[408px] h-[192px]'>
                  <img src={momologo} alt="" className='w-[152px] h-[48px]' />
                  <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate nisi iusto unde quis quibusdam impedit ex facilis doloremque quaerat laudantium.</p>
                </div>
                <div className='w-[168px] h-[158px] flex flex-col justify-center'>
                  <h1 className='text-[25px] text-teal-700'>Momos</h1>
                  <NavLink to = "/About"> <h3>About Us</h3></NavLink>
                  <NavLink to = "/Menu"> <h3>Our Menu</h3></NavLink>
                  <NavLink to = "/Service"><h3>Our Services</h3></NavLink>  
                  <NavLink to = "/Contact"><h3>Contact Us</h3></NavLink>
                </div>
                <div className='w-[168px] h-[158px] flex flex-col items-start'>
                  <h1 className='text-[25px] text-teal-700'>Legals</h1>
                  <h3>Terms & Conditions</h3>
                  <h3>Privacy Policy</h3>
                  <h3>Supports</h3>
                </div>
                <div className='w-[168px] h-[158px] space-y-2' >
                  <h1 className='text-[25px] text-teal-700'>Follow Us</h1>
                  <div className='flex gap-3'>
                    <FaFacebook className='h-[35px] w-[35px] text-gray-500' />
                    <FaLinkedin className='h-[35px] w-[35px] text-gray-500' />
                    <FaSquareTwitter className='h-[35px] w-[35px] text-gray-500' />
                  </div>
                  <div className='flex gap-3'>
                    <IoLogoYoutube className='h-[35px] w-[35px] text-gray-500' />
                    <FaInstagram className='h-[35px] w-[35px] text-gray-500' />
                    <AiFillTikTok className='h-[35px] w-[35px] text-gray-500' />
                  </div>
                </div>
              </div>
              <div className='border-b-1 border-gray-500 mt-[50px]'></div>
              <div>
                <h1 className='text-gray-500 flex justify-center mt-[30px]'>Copyright ©2025 Everest Momo Pvt Ltd. All Rights Reserved.</h1>
              </div>
              </div>
     </div> 
    </div>
  )
}

export default Home
