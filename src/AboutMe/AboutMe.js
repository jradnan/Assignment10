import React from 'react';
import { Link } from 'react-router-dom'
import './AboutMe.css'
import image from '../Image/yyy(1).png'
import image2 from '../Image/image.jpg'

const AboutMe = () => {
    return (
        <div>
            <div>
                <div className="container-fluid banner-section ">
                    <div className="row about-me ">
                        {/* about section */}
                        <div className="col-xl-6 col-sm-12 first-section px-5 ">
                            <h1>HI, I’M A FREELANCER</h1>
                            <p>WEB DEVELOPER</p>
                            <h1>AND WORDPRESS SPECIALIST</h1>
                            <button className='btn-1 mt-3 bg-dark'><Link className='text-decoration-none' to='/about'> <span className='text-light'>View My Works</span> </Link></button>
                        </div>
                        {/* section end */}

                        {/* image section */}
                        <div className="col-xl-6 col-sm-12 about-me">
                            <img width={550} src={image} alt="" />
                        </div>

                        {/* image section end */}
                    </div>
                </div>

                {/* about me section */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4"></div>



                        <div className="col-xl-4 text-center mt-5 about-to ">
                            <p>About me</p>
                            <br />
                            <span >Know Me More</span>
                        </div>



                        <div className="col-xl-4"></div>
                    </div>
                </div>
                {/* about me end */}


                <div className="container mt-5">
                    <div className="row">
                        <div className="col-xl-8 know-me">
                            <h2>Hi, I'm <span>Md Adnan</span></h2>
                            <p>I’m a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</p>
                            {/* About section */}
                            <div className="row mt-5">
                                <div className="col-xl-4">
                                <span className='name'>Name:</span>
                                <p className='my-name'>Md Adnan</p>
                                </div>
                                <div className="col-xl-4">
                                <span className='name'>Email:</span>
                                <p className='my-name'>Mdadnan085208
                                    @gmail.com</p>
                                </div>
                                <div className="col-xl-4">
                                <span className='name'>Date of birth:</span>
                                <p className='my-name'>22 July,  1996</p>
                                </div>
                            </div>
                            <div className=''>
                                
                                
                                
                            </div>
                            {/* About end */}
                            

                        </div>
                        {/* image section */}
                        <div className="col-xl-4 ">
                            <img width={400} src={image2} alt="" />
                        </div>
                        {/* image section end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;