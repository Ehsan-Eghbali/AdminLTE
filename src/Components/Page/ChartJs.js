import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import AreaChart from '../Plugin/ChartJS/AreaChart'
import LineChart from '../Plugin/ChartJS/LineChart'
import BarChart from '../Plugin/ChartJS/BarChart'
import BarChartV2 from '../Plugin/ChartJS/BarChartV2'

const ChartJs = () => {

    return (
        <div class="hold-transition sidebar-mini">
            <Navbar />
            <Sidebar />
            <div class="wrapper">
                <div class="content-wrapper" style={{ marginLeft: 0 }}>
                    <section class="content-header">
                        <div class="container-fluid">
                            <div class="row mb-2">
                                <div class="col-sm-6">
                                    <h1>ChartJS</h1>
                                </div>
                                <div class="col-sm-6">
                                    <ol class="breadcrumb float-sm-left">
                                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                                        <li class="breadcrumb-item active">ChartJS</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6">
                                    <AreaChart />
                                    <LineChart />
                                </div>
                                <div class="col-md-6">
                                    <BarChart />
                                    <BarChartV2 />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    )
}

export default ChartJs
