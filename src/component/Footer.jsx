import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 p-20">
            <div className="flex flex-col lg:flex-row gap-12 justify-around">
                <div>
                    <h5 className=" text-lg mb-2">CATEGORIES</h5>
                    <ul className='text-gray-400 space-y-2'>
                        <li>Web Builder</li>
                        <li>Hosting</li>
                        <li>Data Center</li>
                        <li>Robotic-Automation</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-lg mb-2">CONTACT</h5>
                    <ul className='text-gray-400 space-y-2'>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Service</li>
                        <li>Categories</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <select className="select select-bordered w-full  bg-gray-900 max-w-xs">
                        <option selected>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;