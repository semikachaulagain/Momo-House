import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import momologo from "../assets/Home/momologo.png";

const Contact = () => {
  return (
    <div>
       <div className='ml-[110px]'>
        <div className='flex flex-col justify-center items-center mr-[110px] mt-[60px]' >
          <h1 className='text-[56px] text-teal-600 font-parisienne'>Our Contact</h1>
          <h2 className='text-[24px] text-gray-500'>GET IN TOUCH</h2>
          <p className='text-[30px] font-bold'><span className='text-orange-500'>Our Friendly Team</span> would love to hear from you</p>
        </div>
        
        <div className='mt-[60px] h-[300px] flex space-x-3'>
          <div className='h-[233px] w-[360px] shadow-2xl shadow-gray-400 rounded-[20px] space-y-10 pt-[30px] pl-[50px]'>
            <div className='flex text-[20px] gap-x-3'><FaLocationDot className='h-[32px] w-[32px] text-orange-600' />LOCATION</div>
            <h1 className='w-[250px]'>New Baneshwor -41201, Kathmandu, Bagmati, Nepal</h1>
          </div>
          <div className='h-[233px] w-[360px] shadow-2xl shadow-gray-400 rounded-[20px] space-y-10 p-[40px]'>
            <div className='flex text-[20px] gap-x-3'><FaPhoneVolume className='h-[32px] w-[32px] text-orange-600' />PHONE</div>
            <div>
              <h1 className='flex gap-15 justify-between text-teal-600'>Mobile: <span className='text-black'>(+977) 980 5689789 <span className='flex justify-end'>(+977) 9841 275897</span> </span></h1>
              <h1 className='flex gap-15 justify-between text-teal-600 '>Tel: <span className='text-black'>01-4783972 </span></h1>
            </div>
          </div>
          <div className='h-[233px] w-[360px] shadow-2xl shadow-gray-400 rounded-[20px] space-y-10 p-[40px]'>
            <div className='flex text-[20px] gap-x-3'><MdAccessTimeFilled className='h-[32px] w-[32px] text-orange-600' />SERVICE TIME</div>
            <div>
              <h1 className='flex gap-15 justify-between text-teal-600'>MON-FRI: <span className='text-black'>8 am - 8 pm</span></h1>
              <h1 className='flex gap-15 justify-between text-teal-600 '>SAT-SUN <span className='text-black'>Closed</span></h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10">
      <div className="w-1/2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9371762787214!2d85.33296537405229!3d27.688336526332225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19001a6b8975%3A0x4e24a0c6bc2da3e4!2sNew%20Baneshwor%20Chowk!5e0!3m2!1sen!2snp!4v1739809631329!5m2!1sen!2snp" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-[580px]'></iframe>
      </div>

      <div>
        <div className="shadow-md mr-7 rounded-lg w-120 bg-gray">
       <h1  className='font-semibold text-[30px] pl-5 mt-2'>Contact <span className="text-orange-600">Us</span></h1>
       <p className="text-gray-400 pl-5">If you have any queries, send us a message. Our friendly team would love to hear from you</p>

       <div className="flex gap-3 pl-5 mt-2">
        <div>
       <h1>First Name</h1> 
       <input type="text" placeholder="" className="w-full px-4 py-2 border border-gray-400  rounded-md" />
       </div>
       <div>
        <h1>Last Name</h1>
        <input type="text" placeholder="" className="w-full px-4 py-2 border border-gray-400 rounded-md" />
        </div>
       </div>
      
      <div className="pl-5 mt-2 mr-3 ">
        <p>What can we do for you?</p>
        <input type="text" placeholder="" className="w-full px-4 py-2 border border-gray-400 rounded-md"/>
        <h1>Email</h1>
        <input type="email" placeholder="" className="w-full px-4 py-2 border border-gray-400 rounded-md" />
        <h1>Phone No</h1>
        <input type="tel" placeholder="" className="w-full px-4 py-2 border border-gray-400 rounded-md" />
        <h1>Message</h1>
        <input type="string" placeholder="" className="w-full px-4 py-8 border border-gray-400  rounded-md" />
        <button className='flex justify-center items-center border h-[50px] w-[220px] rounded-[50px] bg-teal-600 text-white hover:bg-teal-800 mt-[30px]'>
              Send message
            </button>
      </div>
      </div>

      </div>
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
            <h3>About Us</h3>
            <h3>Our Menu</h3>
            <h3>Our Services</h3>
            <h3>Contact Us</h3>
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

export default Contact
