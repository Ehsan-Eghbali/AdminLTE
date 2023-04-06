import React, { Component } from 'react'
import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSearchBox: false,
      searchTerm: '',
      isToggleOpen: false,
    };

    this.handleToggleSearch = () => {
      this.setState((prevState) => ({
        showSearchBox: !prevState.showSearchBox,
      }))
    }

    this.handleChange = (event) => {
      this.setState({
        searchTerm: event.target.value,
      })
    }
    
    this.handleSubmit = (event) => {
      event.preventDefault();
    }

    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    this.setState(prevState => ({
      isToggleOpen: !prevState.isToggleOpen 
    }));
    const bodyElements = document.getElementsByTagName('body');
    const body = bodyElements[0];
    if (this.state.isToggleOpen) {
      body.classList.remove('sidebar-collapse');
    } else {
      body.classList.add('sidebar-collapse');
    }
    
  }

  render() {

    const { showSearchBox, searchTerm} = this.state;

    return (
      <div className='navbar'>        
        <nav className="main-header navbar navbar-expand navbar-white navbar-light mr-nav" >
          <ul className="navbar-nav pr-nav">
            <li className="nav-item">
              <a className={`nav-link ${this.isToggleOpen ? 'sidebar-collapse' : ''}`} data-widget="pushmenu" href="#" role="button" onClick={this.toggleSidebar}>
                <i className="fas fa-bars"></i>
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <Link to="/register" className="nav-link">Sign In/Log In</Link>
            </li>
          </ul>

          <ul className="navbar-nav mr-auto-navbav">

            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search"></i>
              </a>
              <div className="navbar-search-block">
                {showSearchBox ? (
                <form className="form-inline" onSubmit={this.handleSubmit}>
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar inputc" type="search" placeholder="Search" value={searchTerm} onChange={this.handleChange} aria-label="Search" />
                    <div className="input-group-append" onClick={this.handleToggleSearch}>
                      <button className="btn btn-navbar search" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                      <button className="btn btn-navbar times" type="button" data-widget="navbar-search">
                        <i className="fas fa-times "></i>
                      </button>
                    </div>
                  </div>
                </form>
                ) : null}
              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments"></i>
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">

                  <div className="media">
                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>

                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">

                  <div className="media">
                    <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <div className="media">
                    <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell"></i>
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                  <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                <i className="fas fa-th-large"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }

}

export default Navbar
