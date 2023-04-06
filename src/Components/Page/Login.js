import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
      }
    
      handlePassword(event) {
        this.setState({password: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }

      
        render() {
            return (
                <div className="hold-transition register-page">
                    <div className="register-box">
                        <div className="card card-outline card-primary">
                            <div className='card-header text-center'>
                            <Link to="/" className="h1"><b>Admin</b>LTE</Link>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p className="login-box-msg">Sign in to start your session</p>

                                <form onSubmit={this.handleSubmit} action="/" method="pos   t">
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmail} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-8">
                                            <div className="icheck-primary">
                                                <input type="checkbox" id="remember"/>
                                                <label htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                        </div>
                                    </div>
                                </form>

                                <div className="social-auth-links text-center mb-3">
                                    <p>- OR -</p>
                                    <a href="#" className="btn btn-block btn-primary">
                                        <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                                    </a>
                                    <a href="#" className="btn btn-block btn-danger">
                                        <i className="fab fa-google-plus mr-2"></i> +Sign in using Google
                                    </a>
                                </div>

                                <p className="mb-1">
                                    <Link to="/forgetpassword">I forgot my password</Link>
                                </p>
                                <p className="mb-0">
                                    <Link to="/register" className="text-center">Register a new membership</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
    }

export default Login
