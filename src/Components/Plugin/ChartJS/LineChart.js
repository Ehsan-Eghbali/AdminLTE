import React from 'react'

const LineChart = () => {

    
    return (
        <div>
            <div className="card card-danger">
                <div className="card-header">
                    <h3 className="card-title">Donut Chart</h3>

                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse">
                            <i className="fas fa-minus"></i>
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <canvas id="lineChart" style={{ minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%" }}></canvas>
                </div>
            </div>
            <script src='./LineChartScript.js' ></script>
        </div>
    )
}

export default LineChart
