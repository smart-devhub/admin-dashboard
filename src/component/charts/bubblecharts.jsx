import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { data } from './chartsData';

const BubbleChart = () => {
    const [chartData, setChartData] = React.useState(data.columndata)
    return (
        <div>
            <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
        </div>
    )
}

export default BubbleChart