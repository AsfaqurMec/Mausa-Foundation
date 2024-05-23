import Image from "next/image";
import img1 from '../../public/Vector (13).png'
import img2 from '../../public/Vector (12).png'
import img3 from '../../public/Vector (11).png'


const Services = () => {
    return (
        <>
        <div className="bg-[#F1F4F1]">
        <div className=' pb-12'>
            <h1 className="text-center pt-20 font-bold text-4xl">আমাদের কার্যক্রম</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-20">

            <div className='card  rounded-sm service  bg-slate-50'>
            <figure className=""><Image className="border mt-8 text-black p-4 w-28  bg-[#49C70D] rounded-full"  src={img1} alt=""></Image></figure>
  <div className="card-body ">
    <h2 className="card-title ">বৃক্ষরোপণ প্রকল্প</h2>
    <p>ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions justify-center">
     
    </div>
  </div>
</div>


<div className="card rounded-sm bg-slate-50 service">
  <figure className=""><Image className="border mt-8 text-black p-5 w-28 z-10 bg-[#49C70D] rounded-full" src={img2} alt=""></Image></figure>
  <div className="card-body">
    <h2 className="card-title">সাধারণ দান</h2>
    <p>ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions justify-center">
     
    </div>
  </div>
</div>


<div className="card  rounded-sm bg-slate-50  service">
  <figure><Image className="border mt-8 text-black p-5 w-28 z-10 bg-[#49C70D] rounded-full" src={img3} alt=""></Image></figure>
  <div className="card-body">
    <h2 className="card-title">বৃক্ষরোপণ প্রকল্প</h2>
    <p>ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions justify-center">
      
    </div>
  </div>
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

export default Services;