import React from 'react'
import Navbar from '../Navbar/Navbar'
import Dash2 from '../Plugin/Dashboard/Dash2'
import Graph from '../Plugin/Dashboard/Graph'
import Sales from '../Plugin/Dashboard/Sales'
import Sidebar from '../Sidebar/Sidebar'
import SideDash from '../Plugin/Dashboard/SideDash'

const Dashboard2 = () => {
    return (
        <div className="hold-transition sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
            <Navbar />
            <Sidebar />
            <div className="content-wrapper" style={{ marginLeft: 0 }}>

                <section className="content">
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard v2</h1>
                                </div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-left">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Dashboard v2</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Dash2 />
                    <div className='row'>

                    <Sales />
                    <SideDash />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard2
