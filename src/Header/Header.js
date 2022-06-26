import React from 'react';
import { Link } from 'react-router-dom'
import image from '../Image/clock.png'
import image2 from '../Image/phone.png'
import image3 from '../Image/teligram.png'
import image4 from '../Image/facebook.png'
import image5 from '../Image/whatsapp.png'
import image6 from '../Image/twitter.png'
import Logo from '../Image/logo.png'
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='px-5 py-2 background d-flex justify-content-between'>
                <div className='d-flex px-2 mt-3'>
                    <p><img style={{ color: 'white' }} width={20} src={image} alt="" /><span className='px-2' style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>Mon-Fri 09-18.00</span></p>
                    <p className='px-3'><img width={20} src={image2} alt="" /><span className='px-2' style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>Call Us: +821-456-241</span></p>
                    <p><img width={20} src={image3} alt="" /><span className='px-2' style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}> hello@info.com</span></p>

                </div>
                <div className='mt-3'>
                    <Link className='text-decoration-none d-flex' to='/login'>
                        <span className='px-3'><img width={20} src={image4} alt="" /></span>
                        <span ><img width={20} src={image5} alt="" /></span>
                        <span className='px-3 '><img width={20} src={image6} alt="" /></span>
                        <h1 className='text-light d-flex ' style={{ fontSize: '17px' }}>Login</h1></Link></div>

            </div>

            <div className='py-3 sticky d-flex justify-content-between px-5'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='menu'>
                <Link  to='/'>Home</Link>
                <Link  to='/about'>About</Link>
                <Link  to='/services'>Services</Link>
                </div>
                <div>

                </div>
            </div>

   
        </div>
    );
};

export default Header;