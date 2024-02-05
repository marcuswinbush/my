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
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Baby'>Baby</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Kids'>Kids</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Beauty'>Beauty</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sport'>Sport</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Sale'>Sale</Link></li>
            <li className="pr-3 cursor-pointer hover:underline"><Link href='/pages/Services'>Services</Link></li>
       </ul>

       
    </section>



    <div className="grid grid-cols-4 relative gap-x-6  mt-5 ">

    <div className="card-id">
        <img className="cursor-pointer" src="/Images/top.jpg"></img>
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Loose fit shirt</p>
        <p className='text-sm'>$ 15.00</p>
    
    </div>
    
        
    
    </div>

    <div className="card-id">
        <img className="cursor-pointer" src='/Images/pants.jpg'></img>
       
     <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Fitted Dress Shirt</p>
        <p className='text-sm'>$ 35.00</p>
    
    </div>
        
    </div>
   
    <div className="card-id">
        <img className="cursor-pointer" src='/Images/summer.jpg'></img>
    
    <div className="py-3">
        <p className='text-sm  cursor-pointer hover:underline inline'>Casual Shirt</p>
        <p className='text-sm'>$ 24.00</p>
    
    </div>   
    </div>
    
    <div className='card-id'>
        <img className="cursor-pointer" src='/Images/shirt.jpg'></img>
    
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Long Sleeve Button-Down</p>
            <p className='text-sm'>$ 39.00</p>
        
        </div>

    </div>
    
    <div className='card-id'>
         <img className="cursor-pointer" src='/Images/pants-2.jpg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Slim Jeans</p>
            <p className='text-sm'>$ 25.00</p>
        
        </div>
    
    </div>
    
    <div className='card-id'>
        <img className="-w-auto cursor-pointer" src='/Images/shirt2.jpg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Long Sleeve</p>
            <p className='text-sm'>$ 27.00</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className="w-auto" src='/Images/jeanjacket.jpeg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Jean Jacket</p>
            <p className='text-sm'>$ 45.00</p>
    
        </div>
    
    </div>

    <div className='card-id'>
        <img className="" src='/Images/jacket.jpeg'></img>
        
        <div className="py-3">
            <p className='text-sm  cursor-pointer hover:underline inline'>Tacoma Jacket</p>
            <p className='text-sm'>$ 35.00</p>
    
        </div>
    
    </div>
    
</div>
</div>
);

}

export default Sport;