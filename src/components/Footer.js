import React from 'react'
import '../stylesheets/footer.css'

export default function Footer() {
  return (
    <footer >
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row mt-5">
                        <div className="col-6 ">
                            <h2 className='fservices ms-5 ms-md-4'>Services</h2>
                            <h3 className='fitems ms-5 ms-md-4'>Tour</h3>
                            <h3 className='fitems ms-5 ms-md-4'>Swiming</h3>
                            <h3 className='fitems ms-5 ms-md-4'>Surfing</h3>
                            <h3 className='fitems ms-5 ms-md-4'>Kayak</h3>
                        </div>
                        <div className="col-6">
                        <h2 className='fservices'>Practice</h2>
                            <h3 className='fitems'>Travel</h3>
                            <h3 className='fitems'>Popular places</h3>
                            <h3 className='fitems'>Destination</h3>
                            <h3 className='fitems'>Tour</h3>
                            <h3 className='fitems'>Family vacations</h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center mt-5 ">
                    <i class="fab fa-facebook rounded-5 m-1"></i>
                    <i class="fab fa-instagram m-1 "></i>
                    <i class="fab fa-twitter m-1 "></i>
                    <i class="fab fa-youtube m-1 "></i>
                    <i class="fab fa-pinterest m-1 "></i>

                    </div>
                </div>
                <div className="col-12 cp text-center my-3 mt-5">Copyright ©2023 All rights reserved | Frontic </div>
            </div>
        </div>
    </footer>
  )
}
