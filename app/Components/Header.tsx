'use client';
import React from "react";
import '/app/globals.css';
import Link from "next/link";
import {FaBars} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart, AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react";






const Header = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleNav = () => {
    setIsOpen(!isOpen);
};

    return ( 
<div className="bg-white w-full shadow-md" >
   
    <main className="w-full flex justify-between max-md:hidden ">
    
        <div className="left-icons">
        <p className="left-item"> Customer Service</p> 
        <p className="left-item">Students get 15% off</p>
        <p className="left-item"> Find a store nearby</p>
        </div>
       <div className="right-icons">
       <li className="right-item"><CgProfile className="fill-black text-xl mx-2"/><Link href='pages/Login'><p>Sign Up</p></Link></li>
       <li className="right-item"><AiOutlineHeart className='fill-black text-xl mx-2'/><p>Favorites</p></li>
       <li className="right-item"><AiOutlineShoppingCart className='fill-black text-xl mx-2'/><p>Shopping Cart (0)</p></li>
       </div>

    
    </main>
    
   
    <section className=" relative  flex flex-col max-md:hidden">
       <ul className="cateogories">
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Men'>Men</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Women'>Women</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Unisex'>Unisex</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Baby'>Baby</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Beauty'>Beauty</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Sport'>Sport</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Sale'>Sale</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Services'>About Us</Link></li>
       </ul>

      
    </section>

    <section className="md:hidden fixed z-1  shadow-[0_2px_4px_rgba(2,15,29,0.984)] w-full bg-white">

         {/* Mobile Menu */}
         <div className="w-full m-auto m-0 flex-col justify-center p-3 ">
         <button onClick={toggleNav} className="w-full">
           {isOpen ? <AiOutlineClose className="icon"/> : <GiHamburgerMenu className="icon" />}
        </button>
         <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
         
       
       <ul className='w-full  '>  
      <li className="right-item"><CgProfile className="fill-black text-xl mx-2"/><Link href='pages/Login'><p>Sign Up</p></Link></li>
      <li className="right-item"><AiOutlineHeart className='fill-black text-xl mx-2'/><p>Favorites</p></li>
      <li className="right-item"><AiOutlineShoppingCart className='fill-black text-xl mx-2'/><p>Shopping Cart (0)</p></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Men'>Men</Link></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Women'>Women</Link></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Unisex'>Unisex</Link></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Baby'>Baby</Link></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Beauty'>Beauty</Link></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Sport'>Sport</Link></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Sale'>Sale</Link></li>
      <li className=" cursor-pointer hover:underline ml-4"><Link href='pages/Services'>About Us</Link></li>
      
 </ul>

       </div>
       
      
         </div>
         
      

        
       
         
    </section>
</div>
    );
    
};

export default Header;

