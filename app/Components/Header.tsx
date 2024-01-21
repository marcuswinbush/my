import React from "react";
import '/app/globals.css';
import Link from "next/link";
import {FaBars} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';






const Header = () => {


    return ( 
<div className="bg-white  justify-center p-5 shadow-md" >
    <main className="w-full flex justify-between">
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
    <section className=" relative flex-col">
        <ul className="cateogories">
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Men'>Men</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Women'>Women</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Unisex'>Unisex</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Baby'>Baby</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Kids'>Kids</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Beauty'>Beauty</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Sport'>Sport</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Sale'>Sale</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='pages/Services'>Services</Link></li>
       </ul>

       
    </section>
</div>
    );
    
};

export default Header;

