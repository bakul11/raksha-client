import React from 'react';
import Slide from 'react-reveal/Slide'
import logoFaq from '../../../../images/faq.svg'

const FAQ = () => {
    return (
        <section className='faq-section overflow-hidden'>
            <div className="container mx-auto px-10 mt-14 mb-24">
                <div className="faq-item">
                    <div className="grid ssm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-y-5 gap-x-10 items-center">

                        <Slide left>
                            <div className="faq-thub">
                                <img src={logoFaq} alt="logo" className='h-[200px]' />
                                <h1 className='text-[#1F2937] text-[30px] font-bold dark:text-white'>আপনাদের সচরাচর  <span className='text-rose-500'>জানতে চাওয়া </span> <br />প্রশ্নের উত্তর</h1>
                                <h2 className='text-[#1F2937] dark:text-gray-400 text-[18px] font-medium'>আপনাদের  কমন কিছু প্রশ্নের উত্তর আমরা এখানে লিস্ট করে দিয়েছি। আমাদের কে প্রশ্ন করার পূর্বে এই লিস্টটি একবার পড়ে নেয়ার অনুরোধ থাকলো। তাহলে আমাদের উত্তরের জন্য আপনাকে অপেক্ষা করতে হবেনা এবং আপনার মূল্যবান সময় বেঁচে যাবে।</h2>
                            </div>
                        </Slide>

                        <Slide right>
                            <div className="faq-question">
                                <div class="max-w-screen-xl mx-auto px-5  min-h-sceen">
                                    <div class="grid divide-y divide-white dark:divide-gray-600 max-w-xl mx-auto mt-8">
                                        <div class="py-5">
                                            <details class="group">
                                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                    <span className='text-[18px] text-slate-950 dark:text-white'>1. কোর্সটি করার জন্য আগে থেকে কি কি জানতে হবে?</span>
                                                    <span class="transition group-open:rotate-180">
                                                        <svg fill="none" height="24" className='text-slate-950 dark:text-white' shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <p class="text-slate-950 mt-3 dark:text-gray-400 group-open:animate-fadeIn text-[17px]">
                                                    আপনাকে কিছুই জানতে হবে না। আমাদের প্রতিষ্ঠানে ভর্তি হবার পর ভাষা শেখানোর দায়িত্ব সম্পন্ন আমরা নিয়ে নেই ।এবং বাকিটা আপনার পরিশ্রম ।
                                                    তবে আগে থেকে প্রাথমিক ধারনা থাকলে আপনার জন্য ভালো হবে।
                                                </p>
                                            </details>
                                        </div>
                                        <div class="py-5">
                                            <details class="group">
                                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                    <span className='text-[18px] text-slate-950 dark:text-white'>2. কেন কোরিয়ান কোর্সটি করবেন?</span>
                                                    <span class="transition group-open:rotate-180">
                                                        <svg fill="none" height="24" className='text-slate-950 dark:text-white' shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <p class="text-slate-950 mt-3 dark:text-gray-400 group-open:animate-fadeIn text-[17px]">
                                                    যারা নিজেকে কোরিয়ান ভাষার উপর দক্ষ করে গড়ে তুলতে চান। কোরিয়াতে উচ্চশিক্ষা বা চাকরির জন্য যেতে চান তারা |
                                                </p>
                                            </details>
                                        </div>
                                        <div class="py-5">
                                            <details class="group">
                                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                    <span className='text-[18px] text-slate-950 dark:text-white'>3. কোর্সটি করতে শিক্ষাগত যোগ্যতা কি  থাকা লাগবে?</span>
                                                    <span class="transition group-open:rotate-180">
                                                        <svg fill="none" height="24" className='text-slate-950 dark:text-white' shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <p class="text-slate-950 mt-3 dark:text-gray-400 group-open:animate-fadeIn text-[17px]">
                                                    সর্বনিম্ন এসএসসি(SSC) পাস হতে হবে । শিক্ষার্থীকে যে কোন বিভাগ থেকে এসএসসি উত্তীর্ণ  হতে হবে । তবে কোর্সটি করতে পারবেন অনায়াসে
                                                </p>
                                            </details>
                                        </div>
                                        <div class="py-5">
                                            <details class="group">
                                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                    <span className='text-[18px] text-slate-950 dark:text-white'>4. কোর্সটি করতে কতদিন সময় লাগবে?</span>
                                                    <span class="transition group-open:rotate-180">
                                                        <svg fill="none" height="24" className='text-slate-950 dark:text-white' shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <p class="text-slate-950 mt-3 dark:text-gray-400 group-open:animate-fadeIn text-[17px]">
                                                    কোর্সটি ৩ মাস (৯০ দিন) চলবে।  কোন রকম বড় ধরণের দূর্যোগ বা অনিবার্য পরিস্থিতি তৈরী হলে কোর্স ডিউরেশন কিছুদিন বাড়তে পারে।
                                                </p>
                                            </details>
                                        </div>
                                        <div class="py-5">
                                            <details class="group">
                                                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                                                    <span className='text-[18px] text-slate-950 dark:text-white'>5. ক্লাস কি প্রতিদিন হয় এবং কয় ঘণ্টা করে হয় ? </span>
                                                    <span class="transition group-open:rotate-180">
                                                        <svg fill="none" height="24" className='text-slate-950 dark:text-white' shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                                        </svg>
                                                    </span>
                                                </summary>
                                                <p class="text-slate-950 mt-3 dark:text-gray-400 group-open:animate-fadeIn text-[17px]">
                                                    হ্যাঁ,আমাদের ক্লাস প্রতিদিন হয় ।  ক্লাস  সপ্তাহে ছয়(৬)দিন, এবং  প্রতিদিন  দুই (২)ঘন্টা  করে হয় । শুধুমাত্র শুক্রবার বন্ধ থাকে ।
                                                </p>
                                            </details>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default FAQ;