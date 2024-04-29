'use client';
import '/app/globals.css';
import { CgProfile } from 'react-icons/cg';
import {FaBars} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai';



import Link from "next/link";


const Beauty = () => {
return(
<div className="bg-white   p-5" >
    <main className="w-full flex justify-center " >
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
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sport'>Sport</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sale'>Sale</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Services'>Services</Link></li>
       </ul>

       
    </section>



    <div className="grid grid-cols-4 relative gap-x-6  mt-5 ">

    <div className="card-id">
        <img className="cursor-pointer" src="/Images/beauty1.jpg"></img>
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Lipstick</p>
        <p className='text-sm'>$ 25.00</p>
    
    </div>
    
        
    
    </div>

    <div className="card-id">
        <img className="cursor-pointer" src='/Images/beauty2.webp'></img>
       
     <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Hand Cream</p>
        <p className='text-sm'>$ 10.00</p>
    
    </div>
        
    </div>
   
    <div className="card-id">
        <img className="cursor-pointer" src='/Images/beauty3.webp'></img>
    
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Facial Cream</p>
        <p className='text-sm'>$ 18.55</p>
    
    </div>   
    </div>
    
    <div className='card-id'>
        <img className="cursor-pointer" src='/Images/beauty4.webp'></img>
    
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Aloe Face Mask</p>
            <p className='text-sm'>$ 15.75</p>
        
        </div>

    </div>
    
    <div className='card-id'>
         <img className="cursor-pointer" src='/Images/beauty5.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Hydrating Moisturizer</p>
            <p className='text-sm'>$ 11.40</p>
        
        </div>
    
    </div>
    
    <div className='card-id'>
        <img className="-w-auto cursor-pointer" src='/Images/beauty6.jpeg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Facial Tonic</p>
            <p className='text-sm'>$ 16.00</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className="w-auto cursor-pointer" src='/Images/beauty7.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Under Eye Patch</p>
            <p className='text-sm'>$ 14.99</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className="w-auto cursor-pointer" src='/Images/beauty8.webp'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Lip Balm</p>
            <p className='text-sm'>$ 12.89</p>
    
        </div>
    
    </div>
    
</div>
</div>
);

}

export default Beauty;