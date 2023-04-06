import React, { Component } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
      registered: false,
    }
    this.handleFullName = this.handleFullName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRegister = () => {
    this.setState({
      fullName: "John Doe",
      email: "johndoe@example.com",
      password: "********",
      registered: true
    });
  }

  handleFullName(event){
    this.setState({fullName : event.target.value});
  }
  handleEmail(event){
    this.setState({email : event.target.value});
  }
  handlePassword(event){
    this.setState({password : event.target.value});
  }
  handleConfirmPassword(event){
    this.setState({confirmPassword : event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    
    this.setState ({ registered: true })
  }
  

  render() {

    

    return (
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <Link to="/" className="h1"><b>Admin</b>LTE</Link>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>

              <form onSubmit={this.handleSubmit} required>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    value={this.state.fullName}
                    onChange={this.handleFullName}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleEmail}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handlePassword}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={this.state.confirmPassword}
                    onChange={this.handleConfirmPassword}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="agreeTerms" name="terms" value="agree" />
                      <label htmlFor="agreeTerms">
                        I agree to the <Link to="#">terms</Link>
                      </label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                  </div>

                </div>
              </form>

              <div className="social-auth-links text-center">
                <Link to="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i>
                  Sign up using Facebook
                </Link>
                <Link to="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i>
                  +Sign up using Google
                </Link>
              </div>

              <Link to="/login" className="text-center">I already have a membership</Link>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default Register
