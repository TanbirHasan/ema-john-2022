import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email,setEmail] = useState('');
    const [password,SetPassword] = useState("");
    const [confirmpassword,setConfirmpassword] = useState("");
    const [error,setError] = useState("");
    const [createUserWithEmailAndPassword, user] =
      useCreateUserWithEmailAndPassword(auth);
      const navigate = useNavigate();


    const handleEmail = (e) => {
        setEmail(e.target.value)

    }
    const handlePassword = (e) => {
        SetPassword(e.target.value)

    };
    const handleConfirmPasswrod = (e) => {
        setConfirmpassword(e.target.value)

    };
    
        if (user) {
          navigate("/home");
        }

    const handleformsubmit = (e) => {
        e.preventDefault();

        if(password != confirmpassword){
            setError('Password didnt match');
            return;
        }
        if(password.length < 6){
            setError('password must me 6 character')
        }
        createUserWithEmailAndPassword(email, password);


    }

    return (
      <div className="form-container">
        <div>
          <h2 className="form-title">SignUp</h2>
          <form onSubmit={handleformsubmit}>
            <div className="input-group">
              <label>Email</label>
              <input type="email" required onBlur={handleEmail} />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" onBlur={handlePassword} required />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" onBlur={handleConfirmPasswrod} required />
            </div>
            <button
              type="submit"
              onClick={() => createUserWithEmailAndPassword(email, password)}
              className="form-submit"
            >
              Submit
            </button>
          </form>
          <p>
            Already have an accoutn?{" "}
            <Link to="/login" className="form-link">
              Login
            </Link>
          </p>
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </div>
    );
};

export default SignUp;