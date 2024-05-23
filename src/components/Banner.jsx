import Image from 'next/image';
import img from '../../public/Vector (9).png'
const Banner = () => {
    return (
        <div className='bg-origin-content bg-cover h-screen bg-no-repeat  bg-[url("https://i.ibb.co/Wt2NY9z/photo-construction-workers-surveying-site-3.png")] flex flex-col md:flex-row justify-center md:justify-end items-center gap-14'>
            <div className='text-white md:pr-40 space-y-5'>
                <h1 className='text-7xl font-bold'>বৃক্ষরোপণ </h1>
                <p className='text-3xl font-bold'>কার্যক্রম - 2024</p>
            </div>
            <div className="bg-[#FFFFFFAB] p-11 rounded-2xl text-[#424242] w-[90%] md:w-1/3 space-y-3">
                <p>নোটিশ বোর্ড:</p>
                <ul className='list-disc space-y-3'>
                    <li>জরুরী নোটিশ : ২০২০-২১ সেশনে ভর্তিচ্ছুদের সহযোগিতায় করণীয়</li>
                    <li>ব্যবহার বিধি : সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির ওয়েবসাইটে সকলকে অভিনন্দন ! আমাদের অনেকদিনের কাঙ্খিত আনকোরা</li>
                    <li>ব্যবহার বিধি : সাতক্ষীরা জেলা ছাত্রকল্যাণ সমিতির ওয়েবসাইটে সকলকে অভিনন্দন ! আমাদের অনেকদিনের কাঙ্খিত আনকোরা</li>
                    <li>জরুরী নোটিশ : ২০২০-২১ সেশনে ভর্তিচ্ছুদের সহযোগিতায় করণীয়</li>

                </ul>
            </div>
            <h1 className="uppercase flex justify-center items-center gap-3 rounded-md text-white bg-[#49C70D] py-4 px-8 md:-rotate-90">donate <Image className='-rotate-90' src={img} alt='photo'></Image></h1>
        </div>
    );
};

export default Banner;