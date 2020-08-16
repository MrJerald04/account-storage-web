import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context'
import  api from '../../api/api'

const Register = (props) => {
    
    const {
      registerFormData,
      onRegisterChange
    } = useContext(Context);

    const [passwordError, setPasswordError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const { email, password, password2 } = registerFormData;

    const onSubmit = e =>{
      e.preventDefault();

      if (password !== password2) {
        setPasswordError(true);
        
      }else{
        api.handleRegister(registerFormData, setEmailError, props);
        // clearRegisterField();
      }
    }

    return(
        <section className="container container-5">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead text-light"><i className="fas fa-user"></i> Create Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input 
              type="email"
              value={email}
              onChange={e => onRegisterChange(e)}
              placeholder="Email Address" 
              name="email"
              required
            />
            <small className={emailError ? "form-text text-danger" : "form-text text-danger hide-text"}>
              Email is already registered
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onRegisterChange(e)}
              minLength="6"
              className={passwordError ? "input-error" : null}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              value={password2}
              onChange={e => onRegisterChange(e)}
              minLength="6"
              className={passwordError ? "input-error" : null}
            />
            <small className={passwordError ? "form-text text-danger" : "form-text text-danger hide-text"}>
              Passwords do not match
            </small>
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1 text-light">
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </section>
    )
}
  
export default Register;
