import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import Card from '../component/Card'
import Deals from '../component/Deals'
import Footer from '../component/Footer'

const Home = () => {
    return <>
        <div className='bg-customColor h-screen'>
            <Navbar />
            <Header />
            <Card />
            <Deals />
            <Footer />
        </div>
    </>
}

export default Home