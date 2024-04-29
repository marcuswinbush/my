'use client';
import '/app/globals.css';
import { CgProfile } from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';

import Link from "next/link";

const Women = () => {
return(

    
    
        <div className="bg-white   p-5" >
            <main className="w-full justify-center flex " >
               <div className="flex ">
               <li className="right-item"><CgProfile className="fill-black text-xl mx-2 "/><Link href='/'><p>Home</p></Link></li>
               <li className="right-item"><AiOutlineHeart className='fill-black text-xl mx-2'/><p>Favorites</p></li>
               <li className="right-item"><AiOutlineShoppingCart className='fill-black text-xl mx-2'/><p>Shopping Cart (0)</p></li>
               </div>
            </main>
            <section className=" relative flex-col">
                <ul className="cateogories">
                    <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Men'>Men</Link></li>
                    <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Unisex'>Unisex</Link></li>
                    <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Baby'>Baby</Link></li>
                    <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Beauty'>Beauty</Link></li>
                    <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sport'>Sport</Link></li>
                    <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sale'>Sale</Link></li>
                    <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Services'>Services</Link></li>
               </ul>
        
               
            </section>
        
        
        
            <div className="grid grid-cols-4 relative gap-x-6  mt-5 ">
        
            <div className="card-id">
                <img className="cursor-pointer" src="/Images/featured.webp"></img>
            <div className="py-3">
                <p className='text-sm  cursor-pointer hover:underline inline'>Fitted Dress</p>
                <p className='text-sm'>$ 65.50</p>
            
            </div>
            
                
            
            </div>
        
            <div className="card-id">
                <img className="cursor-pointer" src='/Images/summer2.webp'></img>
               
             <div className="py-3">
                <p className='text-sm  cursor-pointer hover:underline inline'>Jean Jacket</p>
                <p className='text-sm'>$ 45.00</p>
            
            </div>
                
            </div>
           
            <div className="card-id">
                <img className="cursor-pointer" src='/Images/summer3.webp'></img>
            
            <div className="py-3">
                <p className='text-sm  cursor-pointer hover:underline inline'>Joggers</p>
                <p className='text-sm'>$ 19.20</p>
            
            </div>   
            </div>
            
            <div className='card-id'>
                <img className="cursor-pointer" src='/Images/spring.webp'></img>
            
                <div className="py-3">
                    <p className='text-sm  cursor-pointer hover:underline inline'>Belted Boat Neck Romper</p>
                    <p className='text-sm'>$ 29.00</p>
                
                </div>
        
            </div>
            
            <div className='card-id'>
                 <img className="cursor-pointer" src='/Images/spring2.webp'></img>
                
                <div className="py-3">
                    <p className='text-sm  cursor-pointer hover:underline inline'>Striped Pants</p>
                    <p className='text-sm'>$ 25.00</p>
                
                </div>
            
            </div>
            
            <div className='card-id'>
                <img className="-w-auto cursor-pointer" src='/Images/suit.webp'></img>
                
                <div className="py-3">
                    <p className='text-sm  cursor-pointer hover:underline inline'>Suit Jacket</p>
                    <p className='text-sm'>$ 27.00</p>
            
                </div>
            
            </div>
        
            <div className='card-id'>
                <img className="w-auto cursor-pointer" src='/Images/coat.webp'></img>
                
                <div className="py-3">
                    <p className='text-sm  cursor-pointer hover:underline inline'>Trench Coat</p>
                    <p className='text-sm'>$ 45.00</p>
            
                </div>
            
            </div>
        
            <div className='card-id'>
                <img className="cursor-pointer" src='/Images/dress2.webp'></img>
                
                <div className="py-3">
                    <p className='text-sm  cursor-pointer hover:underline inline'>White Dress</p>
                    <p className='text-sm'>$ 35.00</p>
            
                </div>
            
            </div>
            
        </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
            
        
        
        
        
        
 );
        
        
}

export default Women;