import React from 'react';
import pc from '../Images/pc.svg';
import { IoMdStar, IoMdStarHalf } from 'react-icons/io';
import { CiTrophy } from "react-icons/ci";
import { IoDiamondOutline } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { IoMdStarOutline } from "react-icons/io";





const Card = () => {



    return (
        <div className="px-4 lg:px-24 py-6">



            <div className='flex flex-col gap-6'>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex flex-col lg:flex-row p-4 lg:p-8 items-center'>
                            <div className="mb-4 lg:mb-0 lg:mr-10">
                                <h1 className='absolute -top-3 -left-2  rounded-ee-lg rounded-tr-lg  bg-orange-500 text-white text-center py-2 px-6'>
                                    <div className='flex items-center gap-3'>
                                        <CiTrophy size={20} />
                                        Best Choices
                                    </div>
                                </h1>
                                <div className="w-full lg:w-32">
                                    <img src={pc} alt="Product" className="mx-auto" />
                                    <h1 className="text-center mt-4 text-lg font-semibold">Builder 1</h1>
                                </div>
                            </div>
                            <div className="mb-4 lg:mb-0 px-16">
                                <div className="text-wrap">
                                    <h1 className='text-gray-600 font-semibold mb-3'>
                                        <span className='font-bold'>WixPro 72-Inch Responsive Website Builder -</span> Comprehensive Digital Platform Creation Tool,
                                        Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                                    </h1>
                                    <h1 className='font-bold mb-3'>Main highlights</h1>
                                    <p className='text-gray-600 font-semibold'>
                                        [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                                    </p>
                                    <h1 className='text-blue-500 flex items-center gap-1 font-semibold mt-8'>Show more <RxCaretDown className='mt-1' /></h1>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between  w-full lg:w-auto items-center lg:flex-col lg:items-stretch mt-5 '>
                                <div className="bg-sky-100 sm:w-36 w-32 lg:w-32 text-center rounded mb-4 lg:mb-0 lg:mr-4 lg:relative lg:left-12 lg:bottom-16 py-5">
                                    <h1 className="text-2xl mb-2 font-semibold">9.8</h1>
                                    <p className="text-sm my-2">Exceptional</p>
                                    <div className="text-orange-400 flex justify-center">
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                    </div>
                                </div>
                                <div className='relative lg:top-10 '>
                                    <button className="btn bg-blue-500 hover:bg-blue-500 text-white px-24  ">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex flex-col lg:flex-row p-4 lg:p-8 items-center'>
                            <div className="mb-4 lg:mb-0 lg:mr-10">
                                <h1 className='absolute -top-3 -left-2  rounded-ee-lg rounded-tr-lg  bg-orange-500 text-white text-center py-2 px-6'>
                                    <div className='flex items-center gap-3'>
                                        <IoDiamondOutline size={20} />
                                        Best Value
                                    </div>
                                </h1>
                                <div className="w-full lg:w-32">
                                    <img src={pc} alt="Product" className="mx-auto" />
                                    <h1 className="text-center mt-4 text-lg font-semibold">Builder</h1>
                                </div>
                            </div>
                            <div className="mb-4 lg:mb-0 px-16">
                                <div className="text-wrap">
                                    <h1 className='text-gray-600 font-semibold mb-3'>
                                        <span className='font-bold'>SiteCraft 68-Inch Ultimate Web Design Studio-</span>  Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                                    </h1>
                                    <h1 className='font-bold mb-3'>Main highlights</h1>
                                    <p className='text-gray-600 font-semibold'>
                                        [What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.
                                    </p>
                                    <h1 className='text-blue-500 flex items-center gap-1 font-semibold mt-8'>Show more <RxCaretDown className='mt-1' />
                                    </h1>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between  w-full lg:w-auto items-center lg:flex-col lg:items-stretch mt-5 '>
                                <div className="bg-sky-100 sm:w-36 w-32 lg:w-32 text-center rounded mb-4 lg:mb-0 lg:mr-4 lg:relative lg:left-12 lg:bottom-16 py-5">
                                    <h1 className="text-2xl mb-2 font-semibold">9.5</h1>
                                    <p className="text-sm my-2">Excellent</p>
                                    <div className="text-orange-400 flex justify-center">
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStarHalf size={15} /></span>
                                    </div>
                                </div>
                                <div className='relative lg:top-10 '>
                                    <button className="btn bg-blue-500 hover:bg-blue-500 text-white px-24  ">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex flex-col lg:flex-row p-4 lg:p-8 items-center'>
                            <div className="mb-4 lg:mb-0 lg:mr-10">
                                <div className="w-full lg:w-32">
                                    <img src={pc} alt="Product" className="mx-auto" />
                                    <h1 className="text-center mt-4 text-lg font-semibold">Builder 1</h1>
                                </div>
                            </div>
                            <div className="mb-4 lg:mb-0 px-16">
                                <div className="text-wrap">
                                    <h1 className='text-gray-600 font-semibold mb-3'>
                                        <span className='font-bold'>WixPro 72-Inch Responsive Website Builder -</span> Comprehensive Digital Platform Creation Tool,
                                        Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                                    </h1>
                                    <h1 className='font-bold mb-3'>Main highlights</h1>
                                    <p className='text-gray-600 font-semibold'>
                                        [What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                                    </p>
                                    <h1 className='text-blue-500 font-semibold mt-8'>Show more
                                    </h1>
                                </div>
                            </div>
                            <div className='flex flex-col justify-between  w-full lg:w-auto items-center lg:flex-col lg:items-stretch mt-5 '>
                                <div className="bg-sky-100 sm:w-36 w-32 lg:w-32 text-center rounded mb-4 lg:mb-0 lg:mr-4 lg:relative lg:left-12 lg:bottom-16 py-5">
                                    <h1 className="text-2xl mb-2 font-semibold">9.3</h1>
                                    <p className="text-sm my-2">Exceptional</p>
                                    <div className="text-orange-400 flex justify-center">
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                    </div>
                                </div>
                                <div className='relative lg:top-10 '>
                                    <button className="btn bg-blue-500 hover:bg-blue-500 text-white px-24  ">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card card-compact bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex flex-col lg:flex-row p-4 lg:p-4 items-center'>
                            <div className="mb-4 lg:mb-0 lg:mr-10">
                                <div className="w-full lg:w-32">
                                    <img src={pc} alt="Product" className="mx-auto" />
                                    <h1 className="text-center mt-4 text-lg font-semibold">CDK</h1>
                                </div>
                            </div>
                            <div className="mb-4 lg:mb-0 px-16">
                                <div className="text-wrap">
                                    <h1 className='text-gray-600 font-semibold mb-3'>
                                        <span className='font-bold'>CDK Resposive Builder:</span> An extensive library of widgets and apps, and detailed step-by-step guides
                                    </h1>
                                    <span className='badge bg-stone-100 text-blue-950 font-semibold'>26% off</span>
                                    <h1 className='font-bold mb-3 mt-1'>Main highlights</h1>
                                    <div className='bg-orange-50 font-semibold p-4 rounded-lg'>
                                        <h1 className='flex my-2 gap-3 items-stretch text-gray-600'>
                                            <span className='bg-base-100 py-1 px-2 rounded-lg text-blue-500'>9.9</span>
                                            Building Responsive
                                        </h1>
                                        <h1 className='flex my-2 gap-3 items-center text-gray-600'>
                                            <span className='bg-base-100 py-1 px-2 rounded-lg text-blue-500'>8.9</span>
                                            Cool
                                        </h1>
                                        <h1 className='flex my-2 gap-3 items-center text-gray-600'>
                                            <span className='bg-base-100 py-1 px-2 rounded-lg text-blue-500'>8.9</span>
                                            Docs
                                        </h1>
                                    </div>

                                    <div className='pt-3'>
                                        <h1>Why we love it</h1>
                                        <div className='py-2'>
                                            <h1 className='flex items-center gap-2 my-3 '>
                                                <h1 className='bg-sky-200 p-1 rounded-full text-blue-950'><FaCheck size={15} /></h1>
                                                Documentation
                                            </h1>
                                            <h1 className='flex items-center gap-2 my-3 '>
                                                <h1 className='bg-sky-200 p-1 rounded-full text-blue-950'><FaCheck size={15} /></h1>
                                                Easy Use
                                            </h1>
                                            <h1 className='flex items-center gap-2 my-3 '>
                                                <h1 className='bg-sky-200 p-1 rounded-full text-blue-950'><FaCheck size={15} /></h1>
                                                Out of box
                                            </h1>
                                            <h1 className='text-blue-500 font-semibold mt-8'>Show more
                                            </h1>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='flex flex-col justify-between  lg:h-96  w-full lg:w-auto items-center lg:flex-col lg:items-stretch mt-5 '>
                                <div className="bg-sky-100 sm:w-36 w-32 lg:w-32 text-center rounded mb-4 lg:mb-0 lg:mr-4 lg:relative lg:left-12 lg:bottom-16 py-5">
                                    <h1 className="text-2xl mb-2 font-semibold">9.1</h1>
                                    <p className="text-sm my-2">Very Good</p>
                                    <div className="text-orange-400 flex justify-center">
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStar size={15} /></span>
                                        <span><IoMdStarOutline className='outline-orange-400' size={15} /></span>
                                    </div>
                                </div>
                                <div className='relative lg:top-10 '>
                                    <button className="btn bg-blue-500 hover:bg-blue-500 text-white px-24  ">View</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Card;
