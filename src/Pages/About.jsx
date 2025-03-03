import React from 'react'
import lady from '../assets/About/lady.png'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaPlayCircle } from "react-icons/fa";
import rectangle from '../assets/About/rectangle.png'
import background from '../assets/About/background.png'
import plate from '../assets/About/plate.png'
import rectangle1 from '../assets/About/rectangle1.png'
import plate1 from '../assets/About/plate1.png'
import plate2 from '../assets/About/plate2.png'
import rectangle2 from '../assets/About/rectangle2.png'
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";
import background1 from "../assets/About/background1.png";
import lady1 from "../assets/About/lady1.png";
import momologo from "../assets/Home/momologo.png";
import image9 from "../assets/About/image9.png";
import image10 from "../assets/About/image10.png";
import image11 from "../assets/About/image11.png";
import {FaFacebook} from "react-icons/fa";
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillTikTok } from 'react-icons/ai';
import { FaSquareTwitter } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";


const chefData = [
  { id: 1, name: "Head Chef", image: image9 },
  { id: 2, name: "Assistant Chef", image: image10 },
  { id: 3, name: "Assistant Chef", image: image11 }
]
const About = () => {
  return (
    <div>
      
      <div className='flex h-150 mt-10 '>
        <div className='mt-15 ml-30'>
         <h1 className='text-[50px] text-gray-400'>About Us</h1> 
         <h2 className='mt-15 text-gray-500'>WE PRIDE OURSELF ON</h2>
         <p className='flex flex-col text-orange-600 font-bold text-[30px] mt-[10px]'>Our authenthic momo recipes<span className='text-black'>passed down through <span className=' flex flex-col'>generations</span></span></p>
        </div>
        <div className='flex'>
        <img src={lady} alt='lady' className='h-120 ml-80'/>
        </div>
       </div>
      
        <div className='h-150'>
          <img src={background} alt="background-image" className='h-130 w-screen absolute -z-1 '/>
        <div  className='ml-20 pt-55 text-white'>
        <h1 className='text-[40px] font-bold'>Process behind the making</h1>
        <p>See how we make momos that you like from only the best ingredients</p>
        <NavLink to='https://www.youtube.com/watch?v=uy2csLtW0nk' target='_blank'><button className='flex justify-center items-center gap-4 w-[220px] h-[60px] bg-teal-600 rounded-[100px] text-[16px] mt-[50px] hover:bg-teal-800'><FaPlayCircle className='h-[32px] w-[32px]' />Watch the Video</button></NavLink>
        </div>
        </div>

        <div className='ml-[110px] flex gap-[120px] h-[500px]'>
          <div className='w-[456px] h-[270px]'>
          <h1 className='text-[39px] font-bold'>Our momos are <span className='text-orange-500'> made with love</span></h1>
          <p className=' mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
              Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
              Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
          </div>

          <div className='flex'>
            <img src={plate} alt="" className='w-[264px] h-[191px] absolute right-[420px] mt-[250px] z-10 ' />
            <img src={rectangle} alt="" className='w-[450px] h-[350px] absolute right-[100px]' />
          </div>
        </div>

<div className='ml-[110px] gap-[120px] h-[500px] flex mt-[60px]'>
<div className='flex'>
  <img src={plate1} alt="" className='w-[264px] h-[191px] mt-[250px] absolute left-[400px] z-10 ' />
  <img src={rectangle1} alt="" className='w-[450px] h-[350px] mt-[10px]' />
</div>
<div className='w-[456px] h-[270px] flex flex-col '>
  <h1 className='text-[39px] font-bold'>Taste the difference with  <span className='text-orange-500'> our handcrafted momos</span></h1>
  <p className='mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
    Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
    Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
</div>
</div>

<div className='ml-[110px] flex gap-[120px] h-[500px] mt-[50px]'>
          <div className='w-[456px] h-[270px]'>
            <h1 className='text-[39px] font-bold'>Our momos are the perfect <span className='text-orange-500'>  blend of tradition and innovation</span></h1>
            <p className=' mt-[20px] text-gray-500'>Lorem ipsum dolor sit amet consectetur.
              Lectus faucibus lorem ac adipiscing. Leo odio tincidunt ipsum magna lacus viverra tincidunt. Viverra aliquet sollicitudin eget dapibus.
              Vestibulum velit viverra gravida consectetur sed facilisis ut morbi.</p>
          </div>
          <div className='flex'>
            <img src={plate2} alt="" className='w-[264px] h-[191px] absolute right-[420px] mt-[250px] z-10 ' />
            <img src={rectangle2} alt="" className='w-[450px] h-[350px] absolute right-[100px]' />
          </div>
 </div>
      
 <div className='h-[600px]'>
        <img src={background1} alt="" className='h-[500px] w-full absolute -z-50 blur-[3px] brightness-35' />
        <div className='absolute text-white w-[550px] ml-[110px] mt-[150px] space-y-8'>
          {/* <img src={image8} alt="" className='h-[40px]' /> */}
          <p>Momo is not just about sustenance,
            it's about bringing people together and creating memories. At our restaurant,
            we strive to create a warm and inviting atmosphere where our guests can enjoy delicious momo,
            great company, and unforgettable experiences</p>
          <h1 className='flex flex-col font-bold text-[20px]'>Marcus Schleifer <span>CEO</span></h1>
          <div className='text-[40px] space-x-4 flex justify-end '>
            <button><FiArrowLeftCircle className='text-gray-500' /></button>
            <button><FiArrowRightCircle className='text-gray-500' /></button>
          </div>
        </div>
        <img src={lady1} alt="" className='h-[500px] absolute right-0' />
      </div>

      <div>
        <div className='flex flex-col items-center'>
          <h1 className='text-[49px] font-bold'>Meet The <span className='text-orange-600'>Team</span></h1>
          <p className='text-[25px] text-teal-600'>Our talented team members who delivers only the best results</p>
        </div>

        <div className='mt-[20px] flex gap-[200px] ml-[180px]'>
          {
            chefData.map((data) => {
              return (
                <div key={data.id}>
                  <img src={data.image} alt="" className='h-[450px] w-[300px] rounded-[4px] absolute -z-50 brightness-50' />
                  <h1 className='pt-[400px] ml-[20px] text-[20px] font-bold text-white'>{data.name}</h1>
                </div>
              )
            })
          }
        </div>
        <div className='text-[40px] space-x-4 flex justify-end mr-[160px] mt-[30px]'>
        <button><FiArrowLeftCircle className='' /></button>
        <button><FiArrowRightCircle className='' /></button>
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

export default About
