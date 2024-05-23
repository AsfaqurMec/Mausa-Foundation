import Image from "next/image";
import img1 from '../../public/Rectangle 97 (3).png'
import img2 from '../../public/Rectangle 97 (4).png'
import img3 from '../../public/Rectangle 97 (2).png'
import user from '../../public/user.png'
import chat from '../../public/ (1).png'

const RecentWork = () => {
    return (
        <>
        <div className="bg-white">
        <div className='bg-cover mb-10 bg-[url("https://ibb.co/YyC4KGg")]'>
            <h1 className="text-center mt-20 font-bold text-4xl">সম্প্রতিক কার্যক্রম</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 px-20 pb-10">

            <div className="card border-2 rounded-lg bg-base-100">
  <figure className="relative pb-5 "><Image className="mt-4 w-full px-5 " src={img1} alt=""></Image> <h1 className="absolute left-0 -bottom-3  bg-[#49C70D] text-2xl font-medium px-5 py-4 text-center text-white ">15 <br />জুন </h1></figure>
  <div className="card-body p-0">
    <h2 className="card-title text-center justify-center mt-2 h-10 text-white bg-[#49C70D]">বৃক্ষরোপণ প্রকল্প</h2>
    <p className="p-2 text-center">ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions border-t-2 border-[#C7C7C7] justify-between py-4 mt-4 mx-5">
      <h1 className="flex gap-2 items-center"><Image className="w-3 h-4" src={user} alt=""></Image> এডমিন</h1>
      <h1 className="flex items-center gap-2"><Image className="w-5 h-5" src={chat} alt=""></Image> মন্তব্য (5)</h1>
    </div>
  </div>
</div>


<div className="card border-2 rounded-lg bg-base-100 ">
  <figure className="relative pb-5"><Image className="mt-4 w-full px-5 rounded-t-lg" src={img2} alt=""></Image> <h1 className="absolute left-0 -bottom-3  bg-[#49C70D] text-2xl font-medium px-5 py-4 text-center text-white ">15 <br />জুন </h1></figure>
  <div className="card-body p-0">
    <h2 className="card-title text-center justify-center mt-2 h-10 text-white bg-[#49C70D]">সাধারণ দান</h2>
    <p className="p-2 text-center">ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions border-t-2 border-[#C7C7C7] justify-between py-4 mt-4 mx-5">
      <h1 className="flex gap-2 items-center"><Image className="w-3 h-4" src={user} alt=""></Image> এডমিন</h1>
      <h1 className="flex items-center gap-2"><Image className="w-5 h-5" src={chat} alt=""></Image> মন্তব্য (5)</h1>
    </div>
  </div>
</div>


<div className="card border-2 rounded-lg bg-base-100 ">
  <figure className="relative pb-5"><Image className="mt-4 w-full px-5 rounded-t-lg " src={img3} alt=""></Image> <h1 className="absolute left-0 -bottom-3  bg-[#49C70D] text-2xl font-medium px-5 py-4 text-center text-white ">15 <br />জুন </h1></figure>
  
  <div className="card-body p-0">
    <h2 className="card-title text-center justify-center mt-2 h-10 text-white bg-[#49C70D]">হস্তশিল্প</h2>
    <p className="p-2 text-center">ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions border-t-2 border-[#C7C7C7] justify-between py-4 mt-4 mx-5">
      <h1 className="flex gap-2 items-center"><Image className="w-3 h-4" src={user} alt=""></Image> এডমিন</h1>
      <h1 className="flex items-center gap-2"><Image className="w-5 h-5" src={chat} alt=""></Image> মন্তব্য (5)</h1>
    </div>
  </div>
</div>
</div>
<div className="flex justify-center">

</div>

<div className="flex justify-center">
<button className="btn bg-[#49C70D] px-7 py-3 border-none text-white">আরো দেখুন</button>
</div>

            </div>
        </div>
        </>
    );
};

export default RecentWork;