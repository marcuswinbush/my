'use client';
import '/app/globals.css';
import { CgProfile } from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';



import Link from "next/link";

const Sport = () => {
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
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Baby'>Baby</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Beauty'>Beauty</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sale'>Sale</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Services'>Services</Link></li>
       </ul>

       
    </section>



    <div className="grid grid-cols-4 relative gap-x-6  mt-5 ">

    <div className="card-id">
        <img className="cursor-pointer" src="/Images/sport1.webp"></img>
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Mountain Insulated Jacket</p>
        <p className='text-sm'>$ 89.99</p>
    
    </div>
    
        
    
    </div>

    <div className="card-id">
        <img className="cursor-pointer" src='/Images/sport2.jpeg'></img>
       
     <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Dry-Fit Shirt</p>
        <p className='text-sm'>$ 24.00</p>
    
    </div>
        
    </div>
   
    <div className="card-id">
        <img className="cursor-pointer" src='/Images/sport3.jpeg'></img>
    
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Track Pants</p>
        <p className='text-sm'>$ 27.99</p>
    
    </div>   
    </div>
    
    <div className='card-id'>
        <img className="cursor-pointer" src='/Images/sport4.webp'></img>
    
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Sweat-Resistant Shirt</p>
            <p className='text-sm'>$ 15.00</p>
        
        </div>

    </div>
    
    <div className='card-id'>
         <img className=" w-auto cursor-pointer" src='/Images/sport5.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Sports Water Bottle</p>
            <p className='text-sm'>$ 20.00</p>
        
        </div>
    
    </div>
    
    <div className='card-id'>
        <img className="-w-auto cursor-pointer" src='/Images/sport6.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Sports Bag</p>
            <p className='text-sm'>$ 22.19</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className="w-auto cursor-pointer" src='/Images/sport7.jpeg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Resistance Bands</p>
            <p className='text-sm'>$ 14.92</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className=" w-auto cursor-pointer" src='/Images/sport8.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Gym Shoes</p>
            <p className='text-sm'>$ 20.99</p>
    
        </div>
    
    </div>
    
</div>
</div>
);

}

export default Sport;