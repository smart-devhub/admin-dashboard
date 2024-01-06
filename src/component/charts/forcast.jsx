import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { data } from './chartsData';
const ForcastChart = () => {
    const [chartData, setChartData] = React.useState(data.forcostdata)
    return (
        <div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
    )
}

export default ForcastChart