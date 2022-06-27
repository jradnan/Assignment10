import React from 'react';
import {signOut} from 'firebase/auth';
import { Link } from 'react-router-dom'
import image from '../Image/clock.png'
import image2 from '../Image/phone.png'
import image3 from '../Image/teligram.png'
import image4 from '../Image/facebook.png'
import image5 from '../Image/whatsapp.png'
import image6 from '../Image/twitter.png'
import Logo from '../Image/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../src/Firebase/Firebase.init';
import './Header.css'



const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <div>
            
            <div className='px-5  py-2 background d-flex justify-content-between'>
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
                        </Link></div>

            </div>

            <div className='py-3 d-flex justify-content-between px-5'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='menu'>
                <Link  to='/'>Home</Link>
                <Link  to='/aboutme'>About</Link>
                <Link  to='/services'>Services</Link>
                <Link  to='/blog'>Blog</Link>
                <Link  to='/checkout'>Checkout</Link>
                {
                    user?
                    <button id='signout' className='btn btn-primary' onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to='/Login'><button className='btn btn-primary'>Login</button> </Link>
                }
                </div>
                <div>

                </div>
            </div>

               
        
        
        </div>
    );
};

export default Header;