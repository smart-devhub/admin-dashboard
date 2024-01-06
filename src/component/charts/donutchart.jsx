import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { data } from './chartsData';

const DonutChart = () => {
    const [chartData, setChartData] = React.useState(data.donutdata)
    return (
        <div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="pie" height={350} />
        </div>
    )
}

export default DonutChart