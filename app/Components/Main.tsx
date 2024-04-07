
import '/app/globals.css';
import React from 'react';





const Main = () => {
return(
<div className="bg-white  justify-center p-5">
<main className='main-container'>
<div className='image-div'>
<img className="bg-cover" src='/Images/fall.png' alt='Fall Collection'></img>
</div>
<div className='popular-list'>
<h1 className='font-semibold text-lg'>What are you shopping for today?</h1>
<p className='px-5 text-lg'>Check out our collections!</p>

</div>

<div className='featured-products'>
< div className='image-div'>

<img className="bg-cover" src='/Images/discount-ad.png' alt='Fall Collection'></img>
    

</div>

</div>

<div className='image-div'>
<img className="bg-cover" src='/Images/img3.png' alt='Fall Collection'></img>
</div>

</main>


</div>
);

}


export default Main;