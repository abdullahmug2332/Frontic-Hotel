import React from 'react'
import navlogo from '../images/favicon.png'
import '../stylesheets/navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav className=' pt-md-2'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-2  text-center">
                            <a href="/" className='navbar-brand'>
                                <img src={navlogo} alt="" height={55} />
                            </a>
                        </div>
                        <div className="col-md-7  text-center">
                            <div className="navlinks d-flex justify-content-center my-3">
                                <a href="/" className='navlink mx-2 text-light link-underline-none text-decoration-none  '>Home</a>
                                <a href="/about" className='navlink mx-2 text-light link-underline-none text-decoration-none '>About</a>
                                <a href="/services" className='navlink mx-2 text-light link-underline-none text-decoration-none '>Services</a>
                                <a href="/booking" className='navlink mx-2 text-light link-underline-none text-decoration-none '>Booking</a>
                            </div></div>
                        <div className="col-md-3  d-none d-md-block text-center ">
                            <div className="phone d-none d-md-flex align-item-center ">
                                <i className="fas fa-phone fs-4"></i>
                                <p className='number mx-2 mt-2 text-light '>123-489-9381</p>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            {/* <nav className='navbar navbar-expand-lg bg-primary d-flex  align-item-center align-content-center'>
                <div className="container d-flex justify-content-between">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <a href="#" className='navbar-brand'>
                                <img src={navlogo} alt="" height={55} />
                            </a>
                        </div>
                        <div className="col-sm-5 text-center">
                            <div className="navlinks">
                                <a href="#" className='mx-2 text-light link-underline-none text-decoration-none  '>Home</a>
                                <a href="#" className='mx-2 text-light link-underline-none text-decoration-none '>About</a>
                                <a href="#" className='mx-2 text-light link-underline-none text-decoration-none '>Services</a>
                                <a href="#" className='mx-2 text-light link-underline-none text-decoration-none '>Booking</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="phone d-none d-md-flex align-item-center ">
                                <i className="fas fa-phone fs-4"></i>
                                <p className='mx-2 mt-2 text-light '>123-489-9381</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}
