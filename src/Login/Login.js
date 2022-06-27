import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../src/Firebase/Firebase.init';




const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation ();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate(from , {replace :true});
    }
    const handleUserSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        {/* <label htmlFor="email">Email</label> */}
                        
                        <input placeholder='Email' onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    
                    <div className="input-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input placeholder='Password' onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading....</p>
                    }
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p style={{ textAlign: 'center' }}>
                    New to Tinzer? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;