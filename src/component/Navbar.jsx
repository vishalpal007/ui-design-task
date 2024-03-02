import React from 'react';
import { CiSearch, CiMenuFries } from 'react-icons/ci';

const Navbar = () => {
    return (
        <header className="bg-black w-full py-5">
            <div className="flex justify-between lg:justify-center gap-10 items-center px-4">
                <div className="relative">
                    <input
                        aria-label="Search"
                        className="bg-white rounded-lg w-64"
                        type="text"
                    />
                    <CiSearch className="absolute bottom-1 left-2" />
                </div>

                <nav className="text-white gap-8 hidden lg:flex">
                    <h1>Categories</h1>
                    <h1>Website Builders</h1>
                    <h1>Today's deals</h1>
                </nav>

                <div className="dropdown dropdown-end flex lg:hidden">
                    <div tabIndex={0} role="button" className="text-white">
                        <CiMenuFries size={25} />
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] mt-8 menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li className="bg-slate-100 my-1 rounded-lg">
                            <h1 className="font-semibold">Categories</h1>
                        </li>
                        <li className="bg-slate-100 my-1 rounded-lg">
                            <h1 className="font-semibold">Website Builders</h1>
                        </li>
                        <li className="bg-slate-100 my-1 rounded-lg">
                            <h1 className="font-semibold">Today's deals</h1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
