import React from 'react';
import './About.css';
import iamge from '../Image/about-4.jpg'
import Cases from '../Cases/Cases';
const About = () => {
    return (
        <div >
            <div className="container mt-5 ">
                <div className="row">
                    <div className="col-xl-6 left-image">
                        <img width={600} src={iamge} alt="" />
                    </div>

                    <div className="col-xl-6 right-eliment">
                        <span style={{ color: '#207ef7', fontSize: '18px', fontWeight: '500', margin: '0px 20px' }}>About </span>
                        <h3 style={{ color: '#0F1339', fontSize: '32px', margin: '10px 20px', fontWeight: 'bold' }}>About Coronavirus Disease</h3>
                        <p className='about'>
                            The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
                            You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes, nose or mouth. The virus spreads more easily indoors and in crowded settings.
                            stay home & safe for you and others, and maintain all the safety measures by medical professionals to defeat it!

                            know the symptoms of the coronavirus(covid-19) and inform others, follow the safety steps instructed by world health organization (WHO).</p>
                    </div>
                </div>
            </div>

                <div>
                    <Cases></Cases>
                </div>

        </div>
    );
};

export default About;