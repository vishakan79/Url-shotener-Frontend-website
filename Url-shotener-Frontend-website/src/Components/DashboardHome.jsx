import React from 'react'
import BarGraph from './BarGraph';

const DashboardHome = ({ dashboardData = {} }) => { 

    const urlsCreatedPerDay = dashboardData.urlsPerDay || [];
    const urlsCreatedPerMonth = dashboardData.urlsPerMonth || [];
    const monthData = dashboardData.monthsData || [];

    const shortLinksData = [
        { month: 'January', count: monthData[0] ? monthData[0].length : 0 },
        { month: 'February', count: monthData[1] ? monthData[1].length : 0 },
        { month: 'March', count: monthData[2] ? monthData[2].length : 0 },
        { month: 'April', count: monthData[3] ? monthData[3].length : 0 },
        { month: 'May', count: monthData[4] ? monthData[4].length : 0 },
        { month: 'June', count: monthData[5] ? monthData[5].length : 0 },
        { month: 'July', count: monthData[6] ? monthData[6].length : 0 },
        { month: 'August', count: monthData[7] ? monthData[7].length : 0 },
        { month: 'September', count: monthData[8] ? monthData[8].length : 0 },
        { month: 'October', count: monthData[9] ? monthData[9].length : 0 },
        { month: 'November', count: monthData[10] ? monthData[10].length : 0 },
        { month: 'December', count: monthData[11] ? monthData[11].length : 0 },
    ];

    return (
        <div className="dashboard-home">
            <div className="graph">
                <BarGraph data={shortLinksData}/>
            </div>
            <div className="datas">
                <h1>No of short links created</h1>
                <p>Today: {urlsCreatedPerDay.length}</p>
                <p>This month: {urlsCreatedPerMonth.length}</p>
            </div>
        </div>
    )
}

export default DashboardHome
