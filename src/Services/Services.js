import React from 'react';
import { Link } from 'react-router-dom'
import image from '../Image/woman.jpg'
import service1 from '../Image/service1.PNG'
import service2 from '../Image/service2.PNG'
import service3 from '../Image/service3.PNG'
import service4 from '../Image/service4.PNG'
import './Services.css'

const Services = () => {
    return (
        <div>
            <div>
                <div>


                    <div className="text-center mt-5">
                        <span style={{ color: '#207ef7', fontSize: '18px', fontWeight: '500', margin: '0px 20px' }}>Our Services</span>
                        <h3 style={{ color: '#0F1339', fontSize: '32px', margin: '10px 20px', fontWeight: 'bold' }}>Our Healthcare Services</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4"></div>
                                <div className="col-xl-4">
                                    <p style={{ lineHeight: '2rem', }} className='about text-center'>
                                        We can send your prescription directly to your local pharmacy for easy pick-up.</p>
                                </div>
                                <div className="col-xl-4"></div>
                            </div>
                        </div>

                    </div>
                </div>



                {/* services section**** */}


                <div className="container-fluid mt-5 main-service">
                    <div className="row">


                        {/* image section */}
                        <div className="col-xl-6 image">
                            <img width={680} src={image} alt="" />
                        </div>
                        {/* image section end */}

                        {/* services start */}
                        <div className="col-xl-6 all-services">

                            <div className="row">

                                {/* service 1 */}
                                <div className=" services services-1 col-xl-6 text-center">
                                    <img src={service1} alt="" />
                                    <h3>Dermatology</h3>
                                    <p>Dermatology is the branch of medicine dealing with the skin. It is a speciality with both medical and surgical aspects. A dermatologist is a specialist medical doctor who manages diseases related to skin, hair, nails, and some cosmetic problems.</p>
                                    <button className='btn-1'><Link className='text-decoration-none' to='/services'> <span className='text-light'>Price: 600$</span> </Link></button>
                                </div>
                                
                                {/* service 1 end */}



                                {/* service 2 */}
                                <div className=" services-2 services col-xl-6 text-center">
                                    <img src={service2} alt="" />
                                    <h3>Mental Health</h3>
                                    <p>The diagnosis of mental illness can be controversial. There have been many debates in the medical community about what is and isn’t a mental illness. The definition can be influenced by our society and culture, but most mental illnesses occur across all countries and cultures.</p>
                                    <button className='btn-1'><Link className='text-decoration-none' to='/services'> <span className='text-light'>Price: 100$</span> </Link></button>
                                </div>
                                
                                {/* service 2 end */}



                                {/* service 3 */}
                                <div className="services-3 services col-xl-6 text-center mt-5">
                                    <img src={service3} alt="" />
                                    <h3>Orthopedics</h3>
                                    <p>Orthopedics is a branch of medicine that focuses on the care of the musculoskeletal system. This system is made up of muscles and bones, as well as joints, ligaments, and tendons. A person who specializes in orthopedics is known as an orthopedist.</p>
                                    <button className='btn-1'><Link className='text-decoration-none' to='/services'> <span className='text-light'>Price: 500$</span> </Link></button>
                                </div>
                                {/* service 3 end */}



                                {/* service 4 */}
                                <div className="col-xl-6 text-center mt-5 services services-4">
                                    <img src={service4} alt="" />
                                    <h3>Gynecological</h3>
                                    <p>Gynaecology or gynecology (see spelling differences) is the area of medicine that involves the treatment of women's diseases, especially those of the reproductive organs. It is often paired with the field of obstetrics, forming the combined area of obstetrics and gynecology (OB-GYN).</p>
                                    <button className='btn-1'><Link className='text-decoration-none' to='/services'> <span className='text-light'>Price: 400$</span> </Link></button>
                                </div>

                                {/* service 4 end */}
                            </div>


                        </div>
                        {/* services end */}




                    </div>
                </div>




            </div>
        </div>
    );
};

export default Services;