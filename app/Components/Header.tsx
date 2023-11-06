import React from "react";
import '/app/globals.css';
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
       <li className="right-item"><CgProfile className="fill-black text-xl mx-2"/><p>Sign in</p></li>
       <li className="right-item"><AiOutlineHeart className='fill-black text-xl mx-2'/><p>Favorites</p></li>
       <li className="right-item"><AiOutlineShoppingCart className='fill-black text-xl mx-2'/><p>Shopping Cart</p></li>
       </div>
    </main>
    <section className=" relative flex-col">
        <ul className="cateogories">
            <li className="cateogory-items">Men</li>
            <li className="cateogory-items">Women</li>
            <li className="cateogory-items">Unisex</li>
            <li className="cateogory-items">Baby</li>
            <li className="cateogory-items">Kids</li>
            <li className="cateogory-items">Beauty</li>
            <li className="cateogory-items">Sport</li>
            <li className="cateogory-items">Sale</li>
            <li className="cateogory-items">Services</li>
       </ul>
       
       <div className="search-container">
                <div className="search"><BsSearch/></div>
            </div>
       
    </section>
</div>
    );
    
};

export default Header;

