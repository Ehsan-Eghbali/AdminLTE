import React, { Component } from 'react'

class Addon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            value1: '',
            value2: '',
            email: '',
            checkboxValue: '',
            radioValue: '',
            inputValue: '',
            buttonValue: '',
        }

        this.handleInputChange = (event) => {
            this.setState({ [event.target.name]: event.target.value });
        }
    
        this.handleCheckboxChange = (event) => {
            this.setState({ checkboxValue: event.target.checked });
        }
    
        this.handleRadioChange = (event) => {
            this.setState({ radioValue: event.target.value });
        }
    }



    render() {
        return (
            <div className='col-md-6'>
                <div className="card card-info">
                    <div className="card-header">
                        <h3 className="card-title">Input Addon</h3>
                    </div>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">@</span>
                            </div>
                            <input type="text" value={this.state.username} onChange={this.handleInputChange} className="form-control" placeholder="Username" />
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" value={this.state.value1} onChange={this.handleInputChange} />
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">$</span>
                            </div>
                            <input type="text" className="form-control" value={this.state.value2} onChange={this.handleInputChange}/>
                            <div className="input-group-append">
                                <span className="input-group-text">.00</span>
                            </div>
                        </div>

                        <h4>With icons</h4>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                            </div>
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
                        </div>

                        <div className="input-group mb-3">
                            <input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleInputChange}/>
                            <div className="input-group-append">
                                <span className="input-group-text"><i className="fas fa-check"></i></span>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-dollar-sign"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleInputChange}/>
                            <div className="input-group-append">
                                <div className="input-group-text"><i className="fas fa-ambulance"></i></div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-2">With checkbox and radio inputs</h5>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <input type="checkbox" value={this.state.checkboxValue} onChange={this.handleCheckboxChange}/>
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><input type="radio" value={this.state.radioValue} onChange={this.handleRadioChange} /></span>
                                    </div>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <h5 className="mt-4 mb-2">With buttons</h5>

                        <div className="input-group input-group-lg mb-3">
                            <div className="input-group-prepend">
                                <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                                    Action
                                </button>
                                <ul className="dropdown-menu">
                                    <li className="dropdown-item"><a href="#">Action</a></li>
                                    <li className="dropdown-item"><a href="#">Another action</a></li>
                                    <li className="dropdown-item"><a href="#">Something else here</a></li>
                                    <li className="dropdown-divider"></li>
                                    <li className="dropdown-item"><a href="#">Separated link</a></li>
                                </ul>
                            </div>
                            <input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleInputChange}/>
                        </div>

                        <p>Normal</p>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button type="button" className="btn btn-danger">Action</button>
                            </div>
                            <input type="text" className="form-control" value={this.state.inputValue} onChange={this.handleInputChange}/>
                        </div>

                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" />
                            <span className="input-group-append">
                                <button type="button" className="btn btn-info btn-flat">Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Addon
