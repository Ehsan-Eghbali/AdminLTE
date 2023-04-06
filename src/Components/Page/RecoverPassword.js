import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const RecoverPassword = () => {

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMassage, setErrorMassage] = useState('');

    const navigate = useNavigate();

    const handleNewPassword = (event) => {
        setNewPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmitPassword = (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            setErrorMassage("Passwords do not match");
            return;
        }

        navigate('/login')

        // setNewPassword("");
        // setConfirmPassword("");
        // setErrorMassage("");
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to="/" className="h1"><b>Admin</b>LTE</Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">You are only one step a way from your new password, recover your password now.</p>
                        {errorMassage && <p>{errorMassage}</p>}
                        <form onSubmit={handleSubmitPassword}>
                        <div className="input-group mb-3">
                            <input className="form-control"
                                type="password"
                                placeholder="Password"
                                value={newPassword}
                                onChange={handleNewPassword}
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
                                placeholder="ConfirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPassword}
                            />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type='submit' className='btn btn-primary btn-block'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                        </form>

                        <p className="mt-3 mb-1">
                            <Link to="/login">Login</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RecoverPassword
