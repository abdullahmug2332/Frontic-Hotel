import React from 'react'
import './stylesheets/booking.css'
import Navbar from './components/Navbar'
import { NavLink } from 'react-router-dom'

export default function Booking() {
    return (
        <div>
            <div className='bookingmain'>
                <Navbar />
                <div className="homeposter ">
                    <div className="homesub container text-center ">
                        <h1 className='frontic'>Book Now</h1>
                        <h2 className='once'> Hurry up to book a room to enjoy best experience.</h2>
                        <NavLink to="/about" className='btn btn-primary btn-lg mt-2 py-3 px-5 rounded-5 '>Book Now</NavLink>
                    </div>
                </div>
            </div>
            <div className="booking2 py-5">
                <div className="container  bookingcon my-5">
                    <div className="row text-center py-5">
                        <div className="col-md-4">
                            <h4 className='bn'>Date Arrival</h4>
                            <input type="date" className='w-75 mb-4 mb-md-0 text-center p-1 bnn shadow-lg'/>
                        </div>
                        <div className="col-md-4">
                            <h4 className='bn'>Date Departure</h4>
                            <input type="date" className='w-75 mb-4 mb-md-0 text-center p-1 bnn shadow-lg' />
                        </div>
                        <div className="col-md-4">
                            <h4 className='bn'>Select Persons</h4>
                            <select name="" className='w-75 text-center p-1 bnn shadow-lg'>
                                <option value="">1 person</option>
                                <option value="">2 persons</option>
                                <option value="">3 persons</option>
                                <option value="">4 persons</option>
                                <option value="">5 persons</option>
                                <option value="">6+ persons</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
