import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaYoutube, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillEnvelopeCheckFill, BsTelephoneForward } from 'react-icons/bs'
import paymentLogo from '../../../images/4.jpg'



const Footer = () => {
    return (
        <section className='footer-section overflow-hidden'>
            <div className="bg-[#1F2937] py-12 px-12">
                <div className="container mx-auto ">
                    <div className="grid ssm:grid-cols-1  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xxl:grid-cols-4 gap-5">
                        <div className="footer-item">
                            <Link to='/' className='text-yellow-500 text-[50px]  font-bold'>রাকসা</Link>
                            <p className='text-gray-400 text-[17px] font-medium'>রাকসা একটি স্বনামধন্য প্রতিষ্ঠান, যেখানে দক্ষ টেইনারের মাধ্যমে কোরিয়ান ভাষা শেখানো হয়, এবং ছাত্রছাত্রীদের কোরিয়ান ভাষায় এক্সপার্ট করে  তোলা হয়।</p>
                        </div>
                        <div className="footer-item">
                            <h2 className='text-white text-[20px] font-semibold py-2'>লিংকসমূহ</h2>
                            <ul>
                                <li>
                                    <NavLink to='/about' className='text-gray-400 hover:translate-x-1 py-1 ease-in-out transition block delay-75 hover:text-pink-500 font-medium'>আমাদের সম্পর্কে</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/story' className='text-gray-400 hover:translate-x-1 py-1 ease-in-out transition block delay-75 hover:text-pink-500 font-medium'>সাকসেস স্টোরি</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/admission' className='text-gray-400 hover:translate-x-1 py-1 ease-in-out delay-75 transition block hover:text-pink-500 font-medium'>ভর্তি সম্পর্কিত</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className='text-gray-400 hover:translate-x-1 py-1 ease-in-out transition block delay-75 hover:text-pink-500 font-medium'>যোগাযোগ </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/privacy-policy' className='text-gray-400 hover:translate-x-1 py-1  ease-in-out delay-75 transition block hover:text-pink-500 font-medium'>প্রাইভেসি পলিসি</NavLink>
                                </li>

                            </ul>

                        </div>
                        <div className="footer-item">
                            <h2 className='text-white text-[20px] font-semibold py-2'>ঠিকানা</h2>
                            <p className='text-gray-400 flex items-center py-1 gap-2 font-medium'><span><FaMapMarkerAlt /></span> চার তলার মোড়, মৎস্য অফিসের বিপরীতে,</p>
                            <p className='text-gray-400 flex items-center py-1 gap-2 font-medium'><span><FaMapMarkerAlt /></span>  কলেজ রোড, লালবাগ, রংপুর।</p>
                            <p className='text-gray-400 flex items-center py-1 gap-2 font-medium'><span><BsFillEnvelopeCheckFill /></span>  raksa15@gmail.com</p>
                            <p className='text-gray-400 flex items-center py-1 gap-2 font-medium'><span><BsTelephoneForward /></span>01722-806059, 01943-312159</p>
                        </div>
                        <div className="footer-item">
                            <h2 className='text-white text-[20px] font-semibold py-2'>পেমেন্ট গেটওয়ে</h2>
                            <img src={paymentLogo} className='rounded-lg' alt="payments" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-down-sec text-center py-5 bg-[#1F2948]">
                <div className="footer-social mb-3">
                    <ul className='flex justify-center gap-x-2'>
                        <li>
                            <a href="https://www.facebook.com/ruksarangpur" target="_blank" className='inline'>
                                <FaFacebookF className='text-orange-400 w-9 h-9 rounded-full border-[1px] p-2 inline border-gray-500 mx-auto text-center hover:bg-blue-700 hover:border-white hover:text-white transition delay-75 ease-in-out' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@masudskoreanlanguageclass1511" target="_blank" className='inline '>
                                <FaYoutube className='text-orange-400 w-9 h-9 rounded-full border-[1px] p-2 inline border-gray-400 mx-auto text-center hover:bg-blue-700 hover:border-white hover:text-white transition delay-75 ease-in-out' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ruksarangpur" target="_blank" className='inline'>
                                <FaTwitter className='text-orange-400 w-9 h-9 rounded-full border-[1px] p-2 inline border-gray-400 mx-auto text-center hover:bg-blue-700 hover:border-white hover:text-white transition delay-75 ease-in-out' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                    <h2 className='text-white'>কপিরাইট © {new Date().getFullYear()} <Link to='/' className='text-green-500 font-semibold px-1'>রাকসা</Link>। সর্বস্বত্ব সংরক্ষিত। </h2>
                </div>
            </div>
        </section>
    );
};

export default Footer;