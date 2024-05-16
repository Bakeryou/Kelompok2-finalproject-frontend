import React from 'react'
import Footer from '../components/Footer'
import NavbarPage from '../components/Navbar'



const HomePage = () => {
    return (
        <>
            <NavbarPage />
            <div className="h-screen mt-20">Home</div>
            <Footer />
        </>
    )
}

export default HomePage