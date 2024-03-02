import React from 'react';
import pc from '../Images/pc.svg';


const deals = [
    {
        id: 1,
        image: pc,
        name: "Webbuilder 1",
        description: "Computer: Modern classic with XYZ support",
        originalPrice: "$49.96",
        discountPrice: "$39.96",
        discountPercentage: "20%",
        timeLimit: "Limited time",
    },

    {
        id: 2,
        image: pc,
        name: "Webbuilder 1",
        description: "Computer: Modern classic with XYZ support",
        originalPrice: "$49.96",
        discountPrice: "$39.96",
        discountPercentage: "20%",
        timeLimit: "Limited time",
    },

    {
        id: 3,
        image: pc,
        name: "Webbuilder 1",
        description: "Computer: Modern classic with XYZ support",
        originalPrice: "$49.96",
        discountPrice: "$39.96",
        discountPercentage: "20%",
        timeLimit: "Limited time",
    },
];

const DealCard = ({ deal }) => (
    <div className="  bg-base-100 shadow-lg p-6 rounded-lg">
        <div className='flex justify-center'>
            <img src={deal.image} alt="" />
        </div>
        <div className="flex  items-center gap-4 mb-2 mt-4">
            <span className="bg-stone-100 text-blue-800 text-xs px-2 py-1 rounded">{deal.discountPercentage} OFF</span>
            <span className="bg-stone-100 text-blue-800 text-xs px-2 py-1 rounded">{deal.timeLimit}</span>
        </div>
        <h3 className="text-sm font-semibold text-gray-500 text-center">{deal.name}</h3>
        <p className="text-gray-500 mb-2">{deal.description}</p>
        <div className='flex gap-4 items-center mb-4'>
            <p className="font-bold">{deal.discountPrice}</p>
            <p className="text-xs  text-gray-400">{deal.originalPrice}</p>
            <p className="text-xs text-red-500">({deal.discountPercentage}) Off</p>
        </div>
        <button className="btn btn-primary w-full">View Deal</button>
    </div>
);

const Deals = () => (
    <div className="px-4 lg:px-24 py-8">
        <h2 className="text-2xl font-bold mb-6">Related deals you might like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {deals.map(deal => (
                <DealCard key={deal.id} deal={deal} />
            ))}
        </div>
        <div className="mt-12 lg:flex flex-col  lg:flex-row lg:justify-between">
            <h3 className="text-4xl text-wrap w-full lg:w-1/2  mb-3">Sign up and get exclusive special deals</h3>
            <div className='flex justify-end mt-10 lg:mt-0 '>
                <input type="text" placeholder="Type here" className="input input-bordered  focus:outline-none" />
                <button className="btn rounded-s-none rounded-ee-lg rounded-tr-lg bg-primary text-white -mx-1 ">Sign Up</button>
                {/* <input type="text" name="" id="" /> */}

            </div>
        </div>
    </div>
);

export default Deals;
