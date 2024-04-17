import React from 'react'
import './stylesheets/services.css'
import Navbar from './components/Navbar'
import ser1 from './images/hoteldisco.jpeg'
import ser2 from './images/hotelfood.jpeg'
import ser3 from './images/hotelgym.jpeg'
import ser4 from './images/hotelroom.jpeg'
import ser5 from './images/hotelsaman.jpeg'
import ser6 from './images/hotelswimmingpool.jpeg'
import { NavLink } from 'react-router-dom'
export default function Services() {
    return (
        <div>
            <div className='servicesmain'>
                <Navbar />
                <div className="homeposter ">
                    <div className="homesub container text-center ">
                        <h1 className='frontic'>Our Services</h1>
                        <h2 className='once'> Our duty is make you feel comfortable.</h2>
                        <NavLink to="/about" className='btn btn-primary btn-md btn-md-lg mt-2 py-2 py-md-3 px-4 px-md-5 rounded-5  '>Book Now</NavLink>
                    </div>
                </div>
            </div>
            <div className="services2">
                <div className="container">
                    <div className="col12 text-center"><h1 className='os'>Our Services</h1></div>
                    <div className="row d-flex  justify-content-center flex-row align-items-center">
                    <div className="col-md-4   d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg">
                                <img src={ser4} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className='rm'>Luxury Hotel</p>
                                    <p className="card-text cardtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg" >
                                <img src={ser2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className='rm'>Healthy Food</p>
                                    <p className="card-text cardtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg">
                                <img src={ser1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className='rm'>Disco</p>
                                    <p className="card-text cardtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg" >
                                <img src={ser3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className='rm'>Gym</p>
                                    <p className="card-text cardtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg" >
                                <img src={ser5} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className='rm'>Lugage Safety </p>
                                    <p className="card-text cardtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4  d-flex justify-content-center mb-5">
                            <div className="card border-0 shadow-lg" >
                                <img src={ser6} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className='rm'>Swimming Pool</p>
                                    <p className="card-text cardtext">Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
