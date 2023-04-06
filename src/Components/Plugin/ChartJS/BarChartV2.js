import React from 'react'

const BarChartV2 = () => {
    return (
        <div>
            <div className="card card-primary ">
                <div className="card-header">
                    <h3 className="card-title">
                        Bar Chart
                    </h3>

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
                    <div id="bar-chart" style={{ height: "255px" }}></div>
                </div>
            </div>
        </div>
    )
}

export default BarChartV2
