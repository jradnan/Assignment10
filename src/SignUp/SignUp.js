import React from 'react';
import './SignUp.css'
import {Link, useNavigate} from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { useState } from 'react';
import auth from '../../src/Firebase/Firebase.init';
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate()



    const handleEmailBlur = event =>{
        setEmail (event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword (event.target.value)
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword (event.target.value)
    }
    if(user){
        navigate ('/');
    }
    const handleCreateUser = event =>{
        event.preventDefault()
        if( password !==confirmpassword){
            setError('Password did not match') 
            return;
        }
        if(password.length < 6){
            setError('password must be 6 Charecters or longer')
            return;
        }
        createUserWithEmailAndPassword (email,password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input placeholder='Name'  type="text" name="name" id=""  required/>
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="email">Email</label> */}
                        <input placeholder='Email' onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input placeholder='Password' onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        {/* <label htmlFor="confirm-Password">Confirm Password</label> */}
                        <input placeholder='Confirm Password' onBlur={handleConfirmPasswordBlur} type="password" name="confirm-Password" id="" required/>
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p style={{ textAlign: 'center' }}>
                    Already have an account? <Link className='form-link' to='/login'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;