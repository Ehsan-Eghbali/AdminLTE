import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';

const Graph = () => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

        const options = {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        stacked: false,
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };

    const labels = ['2011 Q1', '2011 Q2', '2011 Q3', '2012 Q1', '2012 Q2', '2012 Q3', '2012 Q4', '2013 Q1', '2013 Q2'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Digital Goods',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 255, 132)',
                pointRadius: false,
                pointColor: '#3b8bba',
                pointStrokeColor: 'rgba(60,141,188,1)',
                pointHighlightFill: '#fff',
                pointHighlightStroke: 'rgba(60,141,188,1)',
                data: [2666, 2778, 4912, 3767, 6810, 5670, 4820, 15073, 10687, 8432]
            },
        ]
    };

    return (
        <div className='col-md-5'>
            <div className="card bg-gradient-info">
                <div className="card-header border-0">
                    <h3 className="card-title">
                        Sales Graph
                        <i className="fas fa-th mr-1"></i>
                    </h3>

                    <div className="card-tools">
                        <button type="button" className="btn bg-info btn-sm" data-card-widget="collapse">
                            <i className="fas fa-minus"></i>
                        </button>
                        <button type="button" className="btn bg-info btn-sm" data-card-widget="remove">
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div className="card-body">
                <Line options={options} data={data} style={{ minHeight: '256px', height: '256px', maxHeight: '256px', maxWidth: '100%' }} />
                </div>
            </div>
        </div>
    )
}

export default Graph
