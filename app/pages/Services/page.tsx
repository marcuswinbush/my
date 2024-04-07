'use client';
import '/app/globals.css';
import Link from "next/link";
import {CgProfile} from 'react-icons/cg';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';
import {MdOutlineEmail, MdOutlineSend} from 'react-icons/md';
import { SetStateAction, useState } from 'react';


const Services = () => {

const [inputValue, setInputValue] = useState ('');

const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
};

const handleEnterKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
        console.log('Enter key pressed');
        refreshInput();
    }
};
const handleIconClick = () => {
    console.log('Icon clicked');
    refreshInput();
};

const refreshInput = () => {
    setInputValue('');
};


return(
<div className="bg-white  " >
    <div className='justify-center p-5'>
    <main className="w-full  flex justify-center " >
       <div className="flex ">
       <li className="right-item"><CgProfile className="fill-black text-xl mx-2 "/><Link href='/'><p>Home</p></Link></li>
       <li className="right-item"><AiOutlineHeart className='fill-black text-xl mx-2'/><p>Favorites</p></li>
       <li className="right-item"><AiOutlineShoppingCart className='fill-black text-xl mx-2'/><p>Shopping Cart (0)</p></li>
       </div>
    </main>
    <section className=" relative flex-col">
        <ul className="cateogories">
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Men'>Men</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Women'>Women</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Unisex'>Unisex</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Beauty'>Beauty</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sport'>Sport</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sale'>Sale</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Services'>Services</Link></li>
       </ul>

       
    </section>

    <div className='flex flex-col m-14'>
       
       <h2 className='text-xl font-semibold'>Discover How We Can Serve You</h2>
       
       <p className=''>Provided with essential products at an affordable price, we wish to bring our community a sense of variety.</p>
       
    </div>

    <>
        <img src ='/Images/img2.avif'></img>
    </>

<div className='flex justify-center m-10'>
    <h2 className='text-xl font-bold'>Wish To Contact Us?</h2>
</div>
    <div className='flex justify-center'>
      <div className='text-xl p-2'>
        <MdOutlineEmail className='text-2xl'/>
      </div>
    <input 
    className='text-xl border
     placeholder-gray-500' 
     type='text' 
     name='email'
      placeholder='Leave A Comment'
      value={inputValue}
      onChange={handleInputChange}
      onKeyDown={handleEnterKeyPress}>
    </input>
    <div className='p-2 cursor-pointer'>
    <MdOutlineSend className='text-xl' onClick={handleIconClick}/>
    </div>
    </div>
    </div>
    

    <div className="bg-light-gray p-5  ">
        <main className="p-5">
            <div className="footer-section">
                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Shop
                </h2>
                <ul className="footer-ul">
                    <li>
                       <span className="hover:underline cursor-pointer">Women </span>
                    </li>
                    <li>
                    <span className="hover:underline cursor-pointer">Men </span>
                    </li>
                    <li>
                    <span className="hover:underline cursor-pointer">Divided</span>
                    </li>
                    <li>
                    <span className="hover:underline cursor-pointer">Baby </span>
                    </li>

                    <li>
                    <span className="hover:underline cursor-pointer">Kids </span>
                    </li>

                    <li> 
                    <span className="hover:underline cursor-pointer">Sport </span>
                    </li>

                    <li>
                    <span className="hover:underline cursor-pointer">Beauty </span>
                    </li>
                </ul>
                </nav>
                
                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Services
                </h2>
                <ul className="footer-ul">
                    <li>
                      <span className= "hover:underline cursor-pointer">
                      Instagram
                      </span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">
                       LinkedIn
                        </span> 
                    </li>
                    <li>
                        <span className="hover:underline cursor-pointer">
                        Youtube
                        </span>
                    </li>
                    <li>
                      <span className="hover:underline cursor-pointer">
                      Facebook
                        </span>
                    </li>

                    <li>
                        <span className="hover:underline cursor-pointer">
                        X
                        </span>
                    </li>

                </ul>
                </nav>
                

                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Info
                </h2>
                <ul className="footer-ul">
                    <li>
                       <span className="hover:underline cursor-pointer">Careers</span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">About Us</span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">Investor Relations</span>
                    </li>
                    <li>
                        <span className="hover:underline cursor-pointer">Privacy Notice</span>
                    </li>

                    <li>
                       <span className="hover:underline cursor-pointer">Cookie Notice</span> 
                    </li>

                    <li> 
                        <span className="hover:underline cursor-pointer">Subscribe</span>
                    </li>

                    <li>
                        <span className="hover:underline cursor-pointer">Contact Us</span>
                    </li>
                </ul>
                </nav>
                
                <nav className="footer-item">
                <h2 className="text-md font-bold">
                Help
                </h2>
                <ul className="footer-ul">
                    <li>
                      <span className="hover:underline cursor-pointer">Customer Service </span>
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">My Account</span> 
                    </li>
                    <li>
                       <span className="hover:underline cursor-pointer">Find a Store</span> 
                    </li>
                    <li>
                        <span className="hover:underline cursor-pointer">Report a scam</span>
                    </li>

                </ul>
                </nav>
                
            </div>
            
        </main>
    </div>

    

</div>
);

}

export default Services;