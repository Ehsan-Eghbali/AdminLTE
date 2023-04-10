import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const Sales = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const labels = ['JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    const data = {
        labels,
        datasets: [
            {

                backgroundColor: 'rgba(60,141,188,0.9)',
                borderColor: 'rgba(60,141,188,0.8)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: [1000, 2000, 3000, 2500, 2700, 2500, 3000],
                fill: true
            },
            {

                backgroundColor: 'rgba(210, 214, 222, 1)',
                borderColor: 'rgba(210, 214, 222, 1)',
                pointRadius: false,
                pointColor: 'rgba(210, 214, 222, 1)',
                pointStrokeColor: '#c1c7d1',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(220,220,220,1)',
                data: [700, 1700, 2700, 2000, 1800, 1500, 2000],
                fill: true
            },
        ]
    };

    return (
        <div className='col-md-6'>
            <div className="card">
                <div className="card-header border-0">
                    <div className="d-flex justify-content-between">
                        <h3 className="card-title">Sales</h3>
                        <a href="javascript:void(0);">View Report</a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="d-flex">
                        <p className="d-flex flex-column">
                            <span className="text-bold text-lg">$18,230.00</span>
                            <span>Sales Over Time</span>
                        </p>
                        <p className="ml-auto d-flex flex-column text-left">
                            <span className="text-success">
                                <i className="fas fa-arrow-up"></i> 33.1%
                            </span>
                            <span className="text-muted">Since last month</span>
                        </p>
                    </div>

                    <div className="position-relative mb-4">
                        <Bar options={options} data={data} height="200" />
                    </div>

                    <div className="d-flex flex-row justify-content-end">
                        <span className="mr-2">
                            <i className="fas fa-square text-primary"></i> This year
                        </span>

                        <span>
                            <i className="fas fa-square text-gray"></i> Last year
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sales
