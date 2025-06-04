import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>Forever is your go-to destination for stylish, affordable clothing that blends comfort with contemporary fashion. We believe everyone deserves to look and feel their best without breaking the bank, offering high-quality apparel for every occasion.</p>
        <p>From casual everyday wear to statement pieces, Forever curates trendy collections that cater to your unique style. Our mission is to make fashion accessible, sustainable, and enjoyable, ensuring you stay confident in every outfit you wear.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Forever, we strive to make fashion accessible, sustainable, and empowering by offering high-quality, affordable clothing that celebrates individuality. We believe in ethical practices, inclusive style, and helping you express yourself confidently—without compromising the planet or your wallet.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
                <b>Quality Assurance:</b>
                <p className='text-gray-600'>At Forever, every garment undergoes rigorous testing for durability, comfort, and craftsmanship to ensure premium quality. We partner with trusted suppliers and uphold strict standards so you receive stylish, long-lasting fashion every time.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
                <b>Convenience:</b>
                <p className='text-gray-600'>Shop effortlessly with Forever's seamless browsing, fast checkout, and hassle-free returns—all designed for your busy lifestyle. Enjoy doorstep delivery, easy exchanges, and 24/7 customer support to make your fashion journey smooth and stress-free.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5">
                <b>Exceptional Customer Servie:</b>
                <p className='text-gray-600'>At Forever, your satisfaction is our priority—our dedicated support team is always ready to assist with personalized care and quick solutions. We go above and beyond to ensure every interaction leaves you feeling valued, heard, and delighted with your experience.</p>
          </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
