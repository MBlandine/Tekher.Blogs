import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
const DashboardLayout = () => {
    return (
        <div>


            <div className='alldashboard'>
                <Sidebar />
                <div><Dashboard />
                <Outlet />
                </div>
            </div>
           
        </div>
    )
}

export default DashboardLayout