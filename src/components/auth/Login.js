import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context'
import  api from '../../api/api'

const Login = (props) => {

    const {
        loginFormData,
        onLoginChange,
        hasError,
        setHasError
    } = useContext(Context);

    const { email, password } = loginFormData;

    const onSubmit = e =>{
        e.preventDefault();
        api.handleLogin(loginFormData, props, setHasError);
        // console.log(loginFormData)
    }

    return(
        <section className="container container-5">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead text-light"><i className="fas fa-user"></i> Sign into Your Account</p>
        <form className="form" onSubmit={e => onSubmit(e)}>
            {/* <div className="alert alert-danger">
            Invalid credentials
            </div> */}
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={email}
                    onChange={e => onLoginChange(e)}
                    className={hasError ? "input-error" : null}
                    required
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={e => onLoginChange(e)}
                    className={hasError ? "input-error" : null}
                    minLength="6"
                />
                <small className={hasError ? "form-text text-danger" : "form-text text-danger hide-text"}>
                    Email or Password is incorect!.
                </small>
            </div>
            
            <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1 text-light">
            Don't have an account? <Link to="/register" className="text-primary">Sign Up</Link>
        </p>
        </section>
    )
}
  
export default Login;
