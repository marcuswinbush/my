'use client';

import Link from "next/link";

const Men = () => {

return (
<main className="mt-8">
    <div className="justify-center flex">
    <div className="font-bold">What are you looking for today?</div>
    <h2 className="pl-2 ">New collections here! </h2>

</div>

<div className="flex flex-row relative justify-center  mt-5 gap-5">

    <div className="card-id">
        <img className="w-64" src="/Images/top.jpg"></img>
    <div className="pt-4"><button><p>Tops</p></button></div>
        
    
    </div>

    <div className="card-id">
        <img className="w-64" src='/Images/pants.jpg'></img>
        <div className="pt-4"><button><p>Pants</p></button></div>
    </div>
   
    <div className="card-id">
        <img className="w-64" src='/Images/fall fashion.jpg'></img>
        <div className="pt-4"><button><p>Cardigan & Sweaters</p></button></div>
    </div>
    
    

    
</div>



    

</main>



);

}

export default Men;