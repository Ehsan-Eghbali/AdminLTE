import React from 'react'

const BarChart = () => {
    return (
        <div>
            <div className="card card-success">
                <div className="card-header">
                    <h3 className="card-title">Bar Chart</h3>

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
                    <div className="chart">
                        <canvas id="barChart" style={{ minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%" }}></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarChart
