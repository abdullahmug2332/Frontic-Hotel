import React from 'react'
import Navbar from './components/Navbar'
import './stylesheets/home.css'
import blog1 from './images/blog1.webp'
import blog2 from './images/blog2.webp'
import blog3 from './images/blog3.jpeg'
import { NavLink } from 'react-router-dom'
import Booking from './Booking'

export default function Home() {
    return (
        <div>
            <div className='main'>
                <Navbar />
                <div className="homeposter ">
                    <div className="homesub container text-center ">
                        <h1 className='frontic'>Frontic</h1>
                        <h2 className='once'> Once a year go someplace you've never been before.</h2>
                        <NavLink to="/about" className='btn btn-primary btn-lg mt-2 py-3 px-5 rounded-5 '>Book Now</NavLink>
                    </div>
                </div>
            </div>
            <div className="home2">
                <div className="container ">
                    <h1 className='blogposts'>Blog Posts</h1>
                    <div className="row d-flex ms-1 ms-lg-0 justify-content-center flex-row align-items-center">
                        <div className="col-md-4  d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg">
                                <img src={blog1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex corrupti aspernatur eligendi molestias excepturi ipsa possimus amet quam, rem similique.</p>
                                    <p className='rmm'>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg" >
                                <img src={blog2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex corrupti aspernatur eligendi molestias excepturi ipsa possimus amet quam, rem similique.</p>
                                    <p className='rmm'>Read More</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg" >
                                <img src={blog3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex corrupti aspernatur eligendi molestias excepturi ipsa possimus amet quam, rem similique.</p>
                                    <p className='rmm'>Read More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
