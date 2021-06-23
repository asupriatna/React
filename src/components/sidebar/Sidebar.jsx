import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp,Group, Storefront, Receipt, BarChartRounded, Work, ShowChart, ListAlt } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyle className="sidebarIcon" /> Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/> Sales
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/accounts" className="link">                   
                        <li className="sidebarListItem">
                            <Group className="sidebarIcon" /> Account
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <Storefront className="sidebarIcon"/> Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Receipt className="sidebarIcon"/> Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartRounded className="sidebarIcon"/> Reports
                        </li>
                    </ul>

                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Work className="sidebarIcon" /> Manage
                        </li>
                        <li className="sidebarListItem">
                            <ShowChart className="sidebarIcon"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ListAlt className="sidebarIcon"/> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
