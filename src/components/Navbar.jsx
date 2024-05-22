
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/Vector (8).png'

const Navbar = () => {
   
    const navLinks = <>
    <li className=" mr-5 nav-link relative"><Link href="/">হোম</Link></li>
    <li  className="mr-5 nav-link relative"><Link href="/about">আমাদের সম্পর্কে</Link></li>
    <li className=" mr-5 nav-link relative"><Link href="/service">আমাদের কার্যক্রম</Link></li>
    <li  className="mr-5 nav-link relative"><Link href="/gallery">গ্যালারী</Link></li>
    <li className=" mr-5 nav-link relative"><Link href="/academy">একাডেমি</Link></li>
    <li  className="mr-5 nav-link relative"><Link href="/shop">শপ</Link></li>
    <li className=" mr-5 nav-link relative"><Link href="/contact"><button className="btn border-none text-white bg-[#49C70D] hover:bg-[#3078ca]">যোগাযোগ করুন</button></Link></li>
    
</>

return (
   <>
   <div className="navbar fixed z-10 top-0 p-0 h-[120px] text-white bg-[#ffffff43]">
           <div className="navbar-start h-full">
               <div className="dropdown">
                   <label tabIndex={0} className="btn btn-ghost p-1 lg:hidden">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                   </label>
                   <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 p-2 shadow bg-gray-800 z-50 rounded-box w-52 ">
                   {navLinks}
                   </ul>
               </div>
               <Link href="/" className="bg-[#49C70D] h-full p-0 font-semibold normal-case text-base flex justify-center items-center gap-4 px-6" ><div className="flex justify-center items-center gap-4">
   <h1 className="text-2xl font-semibold px-2 py-1 rounded-md text-[#49C70D] bg-white">M</h1>
<p className="font-semibold text-xl uppercase">mausa<br />
foundation</p>
</div></Link>
           </div>
           <div data-aos="fade-down h-full" data-aos-duration="1000" data-aos-delay="300" className="navbar-center hidden lg:flex items-center">
               <ul className="menu-horizontal items-center px-1">
               {navLinks}
               </ul>
           </div>



           <div className="navbar-end h-full">
           
           <div className="flex gap-4 h-full bg-[#49C70D] justify-center items-center px-6">
     <Image src={img} alt=''></Image>
<p className="font-semibold text-base uppercase">+61300746746<br />
<span className="text-sm">Call 24HR / 7Days</span></p>
</div>
           </div>
       </div>
       
   </>
);
};

export default Navbar;