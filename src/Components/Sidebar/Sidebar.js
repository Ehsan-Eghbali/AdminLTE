import React, { Component } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import Navbar from '../Navbar/Navbar'
import Register from '../Page/Register'


class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpenDashboard: false,
            isOpenLayout: false,
            isOpenCharts: false,
            isOpenElements: false,
            isOpenForms: false,
            isOpenTables: false,
            isOpenMailbox: false,
            isOpenPages: false,
            isOpenExtras: false,
            isOpenLogin: false,

        };
        this.toggleOpenDashboard = this.toggleOpenDashboard.bind(this);
        this.toggleOpenLayout = this.toggleOpenLayout.bind(this);
        this.toggleOpenCharts = this.toggleOpenCharts.bind(this);
        this.toggleOpenElements = this.toggleOpenElements.bind(this);
        this.toggleOpenForms = this.toggleOpenForms.bind(this);
        this.toggleOpenTables = this.toggleOpenTables.bind(this);
        this.toggleOpenMailbox = this.toggleOpenMailbox.bind(this);
        this.toggleOpenPages = this.toggleOpenPages.bind(this);
        this.toggleOpenExtras = this.toggleOpenExtras.bind(this);
        this.toggleOpenLogin = this.toggleOpenLogin.bind(this);
    }
    toggleOpenDashboard() {
        this.setState({ isOpenDashboard: !this.state.isOpenDashboard });
    }

    toggleOpenLayout() {
        this.setState({ isOpenLayout: !this.state.isOpenLayout });
    }

    toggleOpenCharts() {
        this.setState({ isOpenCharts: !this.state.isOpenCharts });
    }

    toggleOpenElements() {
        this.setState({ isOpenElements: !this.state.isOpenElements });
    }

    toggleOpenForms() {
        this.setState({ isOpenForms: !this.state.isOpenForms });
    }

    toggleOpenTables() {
        this.setState({ isOpenTables: !this.state.isOpenTables });
    }

    toggleOpenMailbox() {
        this.setState({ isOpenMailbox: !this.state.isOpenMailbox });
    }

    toggleOpenPages() {
        this.setState({ isOpenPages: !this.state.isOpenPages });
    }

    toggleOpenExtras() {
        this.setState({ isOpenExtras: !this.state.isOpenExtras });
    }

    toggleOpenLogin() {
        this.setState({ isOpenLogin: !this.state.isOpenLogin });
    }


    render() {


        const { collapsed } = this.props
        const sidebarClass = collapsed ? 'main-sidebar collapsed' : 'main-sidebar'

        const { isOpenDashboard, isOpenLayout, isOpenCharts, isOpenElements, isOpenForms, isOpenTables, isOpenMailbox, isOpenLogin, isOpenPages, isOpenExtras } = this.state

        return (
            <div className={sidebarClass}>
                <aside className=' sidebar-dark-primary elevation-4'>
                    <a href="index3.html" className="brand-link">
                        <img src="./assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>

                    <div className="sidebar">
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image" style={{ marginRight: '10px' }}>
                                <img src="./assets/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>

                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar search-side" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar search-butt">
                                        <i className="fas fa-search fa-fw"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className={`nav-item ${isOpenDashboard ? 'menu-open' : ''}`}>
                                    <Link to="#" className="nav-link" onClick={this.toggleOpenDashboard}>
                                        <i className="fas fa-tachometer-alt nav-icon"></i>
                                        <p>
                                            Dashboard
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </Link>
                                    {isOpenDashboard && (
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item" key="register">
                                                <Link to="/dashboard1" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Dashboard v1</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item" key="login">
                                                <Link to="/dashboard2" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Dashboard v2</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-item">
                                    <Link to="/widget" className="nav-link" >
                                        <i className="nav-icon fas fa-th"></i>
                                        <p>
                                            Widgets
                                            <span className="right badge badge-danger">New</span>
                                        </p>
                                    </Link>
                                </li>
                                <li className={`nav-item ${isOpenCharts ? 'menu-open' : ''}`}>
                                    <Link to="#" className="nav-link" onClick={this.toggleOpenCharts}>
                                        <i className="fas fa-chart-pie nav-icon"></i>
                                        <p>
                                            Charts
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </Link>
                                    {isOpenCharts && (
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item" key="register">
                                                <Link to="/chartjs" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>ChartJS</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`nav-item ${isOpenForms ? 'menu-open' : ''}`}>
                                    <Link to="#" className="nav-link" onClick={this.toggleOpenForms}>
                                        <i className="fas fa-edit nav-icon"></i>
                                        <p>
                                            Forms
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </Link>
                                    {isOpenForms && (
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item" key="register">
                                                <Link to="/general" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>General Elements</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`nav-item ${isOpenTables ? 'menu-open' : ''}`}>
                                    <a href="#" className="nav-link" onClick={this.toggleOpenTables}>
                                        <i className="fas fa-table nav-icon"></i>
                                        <p>
                                            Tables
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </a>
                                    {isOpenTables && (
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item" key="datatable">
                                                <Link to="/userform" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Simple Tables</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item" key="register">
                                                <Link to="/datatable" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Data Tables</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className={`nav-item ${isOpenLogin ? 'menu-open' : ''}`}>
                                    <Link to="#" className="nav-link" onClick={this.toggleOpenLogin}>
                                        <i className="fas fa-user nav-icon"></i>
                                        <p>
                                            Login & Register
                                            <i className="fas fa-angle-left right"></i>
                                        </p>
                                    </Link>
                                    {isOpenLogin && (
                                        <ul className="nav nav-treeview">
                                            <li className="nav-item" key="register">
                                                <Link to="/register" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Register</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item" key="login">
                                                <Link to="/login" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Login</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item" key="forgetpassword">
                                                <Link to="/forgetpassword" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Forget Password</p>
                                                </Link>
                                            </li>
                                            <li className="nav-item" key="recoverpassword">
                                                <Link to="/recoverpassword" className="nav-link">
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>Recover Password</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            </ul>
                        </nav>

                    </div>

                </aside>

            </div>
        )
    }

}

export default Sidebar
