import { NavLink } from "react-router-dom";
import momologo from "../assets/Home/momologo.png"
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from '../Context/CartProvider/CartProvider';
import {useContext} from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegUserCircle } from "react-icons/fa";

const Navigation = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  const { state } = useContext(CartContext)
  // console.log(state.cartItem);

  const totalCartItem = state.cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0)
  // console.log(totalCartItem);

  return (
    <div>
       <div className='h-[70px] shadow-2xs shadow-gray-300  pl-[110px] flex items-center bg-white'>
     
     <NavLink to="/"><img src={momologo} alt="momologo" className='h-15' /></NavLink>
      
      <div className='pl-15 flex space-x-4'>
      <NavLink to="/About" className='hover:text-yellow-400 text-gray-400'>About Us</NavLink>
      <NavLink to="/Menu" className='hover:text-yellow-400 text-gray-400'> Our Menu</NavLink>
      <NavLink to="/Service" className='hover:text-yellow-400 text-gray-400'>Our Services</NavLink>
      <NavLink to="/AllergyAdviced" className='hover:text-yellow-400 text-gray-400'>Allergy Advice</NavLink>
      <NavLink to='/Cartpage' className=' text-gray-500'> <span className='absolute ml-[25px] top-[18px] z-50 text-white border w-[25px] flex justify-center bg-red-500 rounded-[50px]'>{totalCartItem}</span>
      <BsCart4 className='w-[50px] h-[35px] hover:text-orange-600 ' /></NavLink>
       </div>
      
      
      <div className='flex  ml-[150px] space-x-[20px]'>
          <div className='flex space-x-[20px] mt-[8px]'>
        <NavLink to='https://www.facebook.com/' target="_blank">{""}<FaFacebook className='text-gray-400 h-[30px] w-[30px] hover:text-blue-700'/>{""}</NavLink>
        <NavLink to='https://www.instagram.com/'  target="_blank">{""}<FaInstagram className='text-gray-400 h-[30px] w-[30px] hover:text-pink-400'/>{""}</NavLink>
        <NavLink to='https://www.tiktok.com/' target="_blank">{""}<FaTiktok className='text-gray-400 h-[30px] w-[30px] hover:text-red-950'/>{""}</NavLink>
      </div>
      </div>
     
      <div className='pl-15 flex space-x-4'>
      <NavLink to="/Contact"> <button className='border h-[40px] w-[120px] rounded-[50px] bg-orange-400 hover:bg-orange-600 text-white'>Contact Us</button></NavLink>
      {isAuthenticated ? (
          <NavLink to="/Profile">
            <img className="rounded-full h-10" src={user.picture} alt="" />
          </NavLink>
        ) : (
          <FaRegUserCircle size={30} color="green" className="mt-1.5" />
        )}
       
       {isAuthenticated ? (
          <button
            onClick={() => {
              logout();
            }}
            className=" bg-orange-500 p-2  text-white rounded-2xl "
          >
            Logout
          </button>
        ) : (
          <NavLink to="/Login" className='hover:text-yellow-400 mt-1.5 text-gray-500'>Login</NavLink>
        )}
      </div>
    
    </div>
   </div>
  )
}

export default Navigation
