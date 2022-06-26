import React from 'react';
import { Link } from 'react-router-dom'
import './Banner.css'
import Banner1 from '../Image/banner-bg5.jpg'
import Banner2 from '../Image/banner-bg4.jpg'
import Carousel from 'react-bootstrap/Carousel'
const Banner = () => {
    return (
        <div>

            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Banner1}
                            alt="First slide"
                        />
                        <div className='Caption1'>
                        <Carousel.Caption>
                            <h1 style={{fontSize:'50px', width:'750px', textAlign:'left'}} >TeleHealth Services Rapid Response To Coronavirus Pandemic</h1>
                            <p style={{fontSize:'15px', width:'600px', textAlign:'left'}}  >We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>
                        </Carousel.Caption>
                       <div className='px-3'>
                       <button className='btn-1'><Link className='text-decoration-none' to='/about'> <span className='text-light'>Learn more</span> </Link></button></div> 
                        </div>
                      
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 "
                            src={Banner2}
                            alt="Second slide"
                        />
                            <div className='Caption1'>
                            <Carousel.Caption>
                        <h1 style={{fontSize:'50px', width:'750px', textAlign:'left'}} >TeleHealth Services Rapid Response To Coronavirus Pandemic</h1>
                            <p style={{fontSize:'15px', width:'600px', textAlign:'left'}}  >We're happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>
                        </Carousel.Caption>
                        <div className='px-3'>
                       <button className='btn-1'><Link className='text-decoration-none' to='/about'> <span className='text-light'>Learn more</span> </Link></button></div> 
                            </div>
                       
                    </Carousel.Item>

                </Carousel>
            </div>
        </div>
    );
};

export default Banner;