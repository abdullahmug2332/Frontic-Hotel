import React from 'react'
import './stylesheets/about.css'
import Navbar from './components/Navbar'
import mainpic from './images/aboutss.png'
import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <div>
            <div className='aboutmain'>
                <Navbar />
                <div className="homeposter ">
                    <div className="homesub container text-center ">
                        <h1 className='frontic'>About Frontic</h1>
                        <h2 className='once'> Once a year go someplace you've never been before.</h2> 
                        <NavLink to='/booking' className='btn btn-primary btn-lg mt-2 py-3 px-5 rounded-5 '>Book Now</NavLink>
                    </div>
                </div>
            </div>
            <div className="about2">
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-md-6">
                            <img className='aboutimg mb-5' src={mainpic} alt=""/>
                        </div>
                        <div className="col-md-6 afc">
                            <h1 className='af '>About Frontic</h1>
                            <p className='afdata '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
