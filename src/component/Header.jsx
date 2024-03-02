import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { PiWarningCircle } from "react-icons/pi";
import { FaGreaterThan } from "react-icons/fa6";



const Header = () => {
    return <>
        <div className='px-8 lg:px-24 py-6'>
            <div>
                <h1 className='text-2xl md:text-3xl lg:text-4xl'>Best Website builders in the US</h1>
                <hr className='border-gray-300 my-4' />

                <div className='flex items-center justify-between lg:justify-start gap-8 text-gray-400 text-sm'>
                    <div className='flex items-center gap-2'>
                        <span><CiCircleCheck /></span>
                        <h1>Last Updated - February 22, 2020</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span><PiWarningCircle /></span>
                        <h1>Advertising Disclosure</h1>

                    </div>
                </div>

                <hr className='border-gray-300 my-4' />


                <div className='flex flex-wrap gap-4 py-2'>
                    <h1 className='bg-base-100 badge py-4 px-8'>Tools</h1>
                    <h1 className='bg-base-100 badge py-4 px-8'>AWS Builder</h1>
                    <h1 className='bg-base-100 badge py-4 px-8'>Start Build</h1>
                    <h1 className='bg-base-100 badge py-4 px-8'>Build Supplies</h1>
                    <h1 className='bg-base-100 badge py-4 px-8'>Tooling</h1>
                    <h1 className='bg-base-100 badge py-4 px-8'>BlueHosting</h1>
                </div>


                <div className='flex flex-wrap items-center gap-4 text-gray-500 my-5'>
                    <h1 className='text-sm font-semibold'>Home</h1>
                    <FaGreaterThan size={10} />
                    <h1 className='text-sm font-semibold'>Hosting for all</h1>
                    <FaGreaterThan size={10} />
                    <h1 className='text-sm font-semibold'>Hosting</h1>
                    <FaGreaterThan size={10} />
                    <h1 className='text-sm font-semibold'>Hosting6</h1>
                    <FaGreaterThan size={10} />
                    <h1 className='text-sm font-semibold'>Hosting5</h1>
                </div>


            </div>
        </div>
    </>
}

export default Header