"use client"
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, Doughnut } from 'react-chartjs-2';
import { data } from 'autoprefixer';


ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
)
const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data : [1233, 2562, 3750, 1000, 2000],
                backgroundColor: [
                    'rgba(23, 32, 211, 1)',
                    'rgb(54, 162, 235)',
                    'rgba(19, 139, 167, 1)',
                    'rgba(20, 0, 92, 1)',
                    'rgba(131, 117, 157, 1)',
                ],
                labels: ['ILA BANK', 'AL SALAM BANK', 'HSBC', 'BISB', 'NBB']
            }
        ]
    };
  return <Doughnut 

    data={data}    
    options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: false
            }
        },
        responsive: true
    }}
    />
}

export default DoughnutChart