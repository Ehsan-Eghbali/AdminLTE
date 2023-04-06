import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Addon from '../Plugin/GeneralForm/Addon'
import Quick from '../Plugin/GeneralForm/Quick'
import Sidebar from '../Sidebar/Sidebar'


const General = () => {
  return (
    <div className="hold-transition sidebar-mini">
      <Navbar />
      <Sidebar />
      <div className="content-wrapper" style={{ marginLeft: 0 }}>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>General Form</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-left">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item active">General Form</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <Quick />
              <Addon />
            </div>
          </div>
        </section>
      </div>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.2.0
        </div>
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
      </footer>

      <aside className="control-sidebar control-sidebar-dark">
      </aside>
    </div>

  )
}

export default General
