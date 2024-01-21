'use client';

const Kids = () => {
return(

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
);

}

export default Kids;