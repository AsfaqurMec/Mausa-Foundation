import Image from "next/image";
import img1 from '../../public/Component 1.png'
const Gallery = () => {
    return (
        <>
        <div className="bg-transparent">
        <div className='bg-cover mb-10 gallery py-10'>
            <h1 className="text-center mt-20 font-bold text-4xl">গ্যালারি</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 px-20 pb-10">

            <div className="card rounded-none  bg-base-100">
        <figure className="  "><Image className=" w-full  " src={img1} alt=""></Image> </figure>
           </div>
            
           <div className="card rounded-none  bg-base-100">
        <figure className="  "><Image className=" w-full rounded-none " src={img1} alt=""></Image> </figure>
           </div>

           <div className="card rounded-none  bg-base-100">
        <figure className="  "><Image className=" w-full  " src={img1} alt=""></Image> </figure>
           </div>

           <div className="card  rounded-none bg-base-100">
        <figure className="  "><Image className=" w-full  " src={img1} alt=""></Image> </figure>
           </div>

           <div className="card rounded-none  bg-base-100">
        <figure className="  "><Image className=" w-full  " src={img1} alt=""></Image> </figure>
           </div>

           <div className="card  rounded-none bg-base-100">
        <figure className="  "><Image className=" w-full  " src={img1} alt=""></Image> </figure>
           </div>

</div>


<div className="flex justify-center">
<button className="btn bg-[#49C70D] px-7 py-3 border-none text-white">আরো দেখুন</button>
</div>

            </div>
        </div>
        </>
    );
};

export default Gallery;