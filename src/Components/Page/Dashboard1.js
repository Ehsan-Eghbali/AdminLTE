import React from 'react'
import Navbar from '../Navbar/Navbar'
import Dash1 from '../Plugin/Dashboard/Dash1'
import Graph from '../Plugin/Dashboard/Graph'
import Sidebar from '../Sidebar/Sidebar'

const Dashboard1 = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <div className="content-wrapper" style={{ marginLeft: 0 }}>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-left">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <Dash1 />
                <Graph />
            </div>
        </div>
    )
}

export default Dashboard1
