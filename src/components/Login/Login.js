import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import './Login.css';
import auth from '../../firebase.init';

const Login = () => {


    const [email,setEmail]  = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate('');
    const [signInWithEmailAndPassword, user, loading, error] =
      useSignInWithEmailAndPassword(auth);


    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlepassword = (e) => {
        setPassword(e.target.value)
    }
    if(user){
        navigate('/home')
    }


    const handleformsubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email,password)

    }
    return (
      <div className="form-container">
        <div>
          <h2 className="form-title">Login</h2>
          <form onSubmit={handleformsubmit}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Your Email" onBlur={handleEmail} required/>
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="Your Password" onBlur={handlepassword} required/>
            </div>
            <button type='submit' className="form-submit">Submit</button>
          </form>
          <p>New to Ema John? <Link to='/signup' className='form-link'>Create an account</Link></p>
        </div>
       
      </div>
    );
};

export default Login;