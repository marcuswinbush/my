'use client';

import '/app/globals.css';
import { CgProfile } from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';



import Link from "next/link";


const Baby = () => {
return(
<div className="bg-white  justify-center p-5" >
    <main className="w-full flex " >
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



    <div className="grid grid-cols-4 relative gap-x-6  mt-5 ">

    <div className="card-id">
        <img className="cursor-pointer" src="/Images/baby1.jpeg"></img>
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Sunglasses</p>
        <p className='text-sm'>$ 25.00</p>
    
    </div>
    
        
    
    </div>

    <div className="card-id">
        <img className="cursor-pointer" src='/Images/baby2.jpeg'></img>
       
     <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'> Short Overalls</p>
        <p className='text-sm'>$ 29.99</p>
    
    </div>
        
    </div>
   
    <div className="card-id">
        <img className="cursor-pointer" src='/Images/baby3.jpeg'></img>
    
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Striped Shirt</p>
        <p className='text-sm'>$ 15.00</p>
    
    </div>   
    </div>
    
    <div className='card-id'>
        <img className="cursor-pointer" src='/Images/baby4.webp'></img>
    
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Pink Stylish Hat</p>
            <p className='text-sm'>$ 20.00</p>
        
        </div>

    </div>
    
    <div className='card-id'>
         <img className="cursor-pointer" src='/Images/baby5.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Sweater</p>
            <p className='text-sm'>$ 25.00</p>
        
        </div>
    
    </div>
    
    <div className='card-id'>
        <img className="-w-auto cursor-pointer" src='/Images/baby6.jpeg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Baby Coat</p>
            <p className='text-sm'>$ 22.00</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className="w-auto cursor-pointer" src='/Images/baby7.jpeg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Jean Jacket</p>
            <p className='text-sm'>$ 45.00</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className="cursor-pointer" src='/Images/baby8.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Tacoma Jacket</p>
            <p className='text-sm'>$ 35.00</p>
    
        </div>
    
    </div>
    
</div>
</div>











    






);

}

export default Baby;