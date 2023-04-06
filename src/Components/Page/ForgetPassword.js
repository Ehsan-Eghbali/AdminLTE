import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const ForgetPassword = () => {

    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(handleEmailChange)
    }

    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to="/" className="h1"><b>Admin</b>LTE</Link>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <Link
                                    to={{
                                        pathname: '/recoverpassword',
                                        state: { email: email }
                                    }}
                                    className="btn btn-primary btn-block">
                                    Request new password
                                </Link>
                            </div>
                        </div>

                        <p className="mt-3 mb-1">
                            <Link to="/login">Login</Link>
                        </p>
                        <p className="mb-0">
                            <Link to="/register" className="text-center">Register a new membership</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ForgetPassword
