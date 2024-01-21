
import '/app/globals.css';
import React from 'react';





const Main = () => {
return(
<div className="bg-white  justify-center p-5">
<main className='main-container'>
<div className='image-div'>
<img className="bg-cover" src='/Images/fall.png' alt='Fall Collection'></img>
<div className='button-container'>
    <button className=' bg-white hover:bg-white/90 rounded-sm p-1'>Shop Now</button>
    </div>
</div>
<div className='popular-list'>
<h1 className='font-semibold'>What are you shopping for today?</h1>
<div className='flex mt-3'>

<div className='item'>
    <a>
        <div className=' flex justify-center flex-col m-2'>
            <h2 className=' flex justify-center text-sm'> Men </h2>
            <p className='text-sm'>Cardigan & Sweaters</p>
        </div>
    </a>
</div>

<div className='item'>
<a>
        <div className='flex justify-center flex-col m-2'>
            <h2 className=' flex justify-center text-sm'>Men </h2>
            <p className='text-sm'> Tops</p>
        </div>
    </a>

</div>
<div className='item'>
<a>
        <div className='flex justify-center flex-col m-2'>
            <h2 className='flex justify-center text-sm'>Men</h2>
            <p className='text-sm'> Pants</p>
        </div>
    </a>

</div>
<div className='item'>
<a>
        <div className='flex justify-center flex-col m-2'>
            <h2 className='flex justify-center text-sm'>Women</h2>
            <p className='text-sm'> Dresses</p>
        </div>
    </a>

</div>
<div className='item'>
<a>
        <div className='flex justify-center flex-col m-2'>
            <h2 className='flex justify-center text-sm'>Women</h2>
            <p className='text-sm'> Jackets & Coats</p>
        </div>
    </a>

</div> 

<div className='item'>
<a>
        <div className='flex justify-center flex-col m-2'>
            <h2 className='flex justify-center text-sm'>Women</h2>
            <p className='text-sm'> Accessories</p>
        </div>
    </a>

</div> 

<div className='item'>
<a>
        <div className='flex justify-center flex-col m-2'>
            <h2 className='flex justify-center text-sm'>Kids</h2>
            <p className='text-sm'>Clothes</p>
        </div>
    </a>

</div> 

</div>

</div>

<div className='featured-products'>
<div className='image-div'>
<img className="bg-cover" src='/Images/discount-ad.png' alt='Fall Collection'></img>
<div className='button-container'>
    <button className=' bg-white hover:bg-white/90 rounded-sm p-1'>Shop Now</button>
    </div>
</div>

</div>

<div className='image-div'>
<img className="bg-cover" src='/Images/img3.png' alt='Fall Collection'></img>
<div className='button-container'>
    <button className=' bg-white hover:bg-white/90 rounded-sm p-1'>Shop Now</button>
    </div>
</div>

</main>


</div>
);

}


export default Main;