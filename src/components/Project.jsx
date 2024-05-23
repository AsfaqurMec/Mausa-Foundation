import Image from "next/image";
import img1 from '../../public/Rectangle 97 (1).png'
import img2 from '../../public/Rectangle 98.png'
import img3 from '../../public/Rectangle 99.png'
import arrow from '../../public/.png'


const Project = () => {
    return (
        <>
        <div className="project">
        <div className='pb-10'>
            <h1 className="text-center pt-20 font-bold text-4xl">চলমান প্রোজেক্ট</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 px-20 pb-10">

            <div className="card rounded-sm bg-base-100 ">
  <figure><Image src={img1} alt=""></Image></figure>
  <div className="card-body">
    <h2 className="card-title">বৃক্ষরোপণ প্রকল্প</h2>
    <p>ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions justify-center">
      <button className="btn border-2 border-gray-400 rounded-xl"><Image src={arrow} alt=""></Image></button>
    </div>
  </div>
</div>


<div className="card rounded-sm bg-base-100 ">
  <figure><Image src={img2} alt=""></Image></figure>
  <div className="card-body">
    <h2 className="card-title">সাধারণ দান</h2>
    <p>ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions justify-center">
      <button className="btn border-2 border-gray-400 rounded-2xl"><Image src={arrow} alt=""></Image></button>
    </div>
  </div>
</div>


<div className="card  rounded-sm bg-base-100 ">
  <figure><Image src={img3} alt=""></Image></figure>
  <div className="card-body">
    <h2 className="card-title">বৃক্ষরোপণ প্রকল্প</h2>
    <p>ত্রাণ বিতরণ স্বল্পমূল্যে বা বিনামূল্যে স্বাস্থ্যসেবা প্রদান, পরিচ্ছন্ন মানসিকতা গঠনে নিরন্তর নানা কর্মসূচি পালন, সর্বোপরি মৌখিক, লৈখিক ও আধুনিক সকল প্রচারমাধ্যম ব্যবহার করে মানুষকে মহান আল্লাহর আনুগত্য ও তাঁর রাসূলের অনুকরণে সত্য ও শান্তির পথে ডেকে এনে একটি আদর্শ কল্যাণসমাজ বিনির্মাণে যথাশক্তি প্রচেষ্টা চালিয়ে যাচ্ছে।</p>
    <div className="card-actions justify-center">
      <button className="btn border-2 border-gray-400 rounded-xl"><Image src={arrow} alt=""></Image></button>
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

export default Project;