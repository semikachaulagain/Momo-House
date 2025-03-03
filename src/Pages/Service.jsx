import React from 'react'
import person from '../assets/Service/person.png'
import background from '../assets/Service/background.png'
import { FaPlayCircle } from "react-icons/fa";
import {NavLink} from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import momologo from "../assets/Home/momologo.png";
import services3 from "../assets/Service/services3.png";
import services4 from "../assets/Service/services4.png";
import services5 from "../assets/Service/services5.png";
import QR from "../assets/Service/QR.png";


const Service = () => {
  return (
    <div>
      
      <div className='bg-white h-[600px] ml-[110px] mt-[20px] flex justify-between'>
        <div className='mt-[100px]'>
          <h1 className='text-teal-700 text-[50px] font-parisienne mb-[30px]'>Our Services</h1>
          <h2 className='text-gray-500 tracking-[2px]'>KNOWING OUR CUSTOMERS NEEDS </h2>
          <p className='flex flex-col text-orange-600 font-bold text-[25px] mt-[10px]'>We're more than just momos.
            <span className='text-black'> We're a full-service dining experience. </span></p>
        </div>
        <div className='mr-[100px]'>
          <img src={person} alt="" className='h-[500px]' />
        </div>
      </div>
      
      <div className='h-130'>
        <img src={background} alt='background-image' className='h-130 w-screen blur-[1px] absolute -z-1 '/>
        <div  className='ml-20 pt-55 text-white'>
        <h1 className='text-[40px] font-bold'>Dine With Us</h1>
        <p>Enjoy our momos in the comfort of your own home with our delivery services</p>
        <NavLink to="https://www.youtube.com/watch?v=uy2csLtW0nk" target='_blank'>
          <button className='flex justify-center items-center gap-4 w-[200px] h-[64px] bg-teal-600 rounded-[100px] text-[16px] mt-[50px] hover:bg-teal-800'>
          <FaPlayCircle className='h-[32px] w-[32px]' /> Watch the Video</button>
          </NavLink>
        </div>
      </div>

      <div className='ml-[110px] flex gap-[120px] h-[500px] mt-[80px]'>
        <div className='w-[456px] h-[270px]'>
          <img src={services4} alt="" className='w-[56px] h-[56px]' />
          <h1 className='text-[31px] font-bold mt-[20px]'>Private Party</h1>
          <p className=' mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
            Lectus faucibus lorem ac adipiscing.
            Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
          <div className='flex items-center justify-center mt-[30px] gap-6 w-[456px] h-[152px] shadow-2xl rounded-2xl'>
            <h1 className='flex flex-col text-[25px] text-teal-600'>Scan the QR code <span className='text-[14px] text-gray-600'>You can also check about the service</span></h1>
            <img src={QR} alt="" className='w-[120px] h-[120px]' />
          </div>
        </div>
        <div>
          <img src={services3} alt="" className='w-[500px] h-[450px] absolute right-[100px] rounded-[16px]' />
        </div>
      </div>
     
      <div className='ml-[110px] gap-[120px] h-[500px] flex mt-[60px]'>
        <div>
          <img src={services3} alt="" className='w-[500px] h-[450px] mt-[10px] rounded-[16px]' />
        </div>
        <div className='w-[456px] h-[270px] flex flex-col '>
          <img src={services5} alt="" className='w-[56px] h-[56px] mt-[20px]' />
          <h1 className='text-[39px] font-bold'>Categring</h1>
          <p className='mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
            Lectus faucibus lorem ac adipiscing.
            Leo odio tincidunt ipsum magna lacus viverra tincidunt.</p>
          <div className='flex items-center justify-center mt-[30px] gap-6 w-[456px] h-[152px] shadow-2xl rounded-2xl p-5'>
            <h1 className='flex flex-col text-[25px] text-teal-600'>Scan the QR code <span className='text-[14px] text-gray-600'>You can also check about the service</span></h1>
            <img src={QR} alt="" className='w-[120px] h-[120px]' />
          </div>
        </div>
      </div>

      <div className='h-[300px] w-[1070px] bg-gray-100 flex flex-col justify-center items-center mt-[20px] ml-[110px] rounded-[24px]'>
        <h1 className='text-[31px] font-bold'>Got any Queries?</h1>
        <p className='text-[16px] text-gray-500 mt-[10px]'>If you have any queries, send us a message. Our Friendly team would love to hear from you</p>
        <NavLink to = "/Contact">
        <button className='h-[60px] w-[220px] rounded-[100px] bg-teal-700 text-white text-[16px] mt-[40px] hover:bg-teal-900'>Get In Touch</button></NavLink>
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
  )
}

export default Service
