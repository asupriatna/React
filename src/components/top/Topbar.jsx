import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons/';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">WebAdmin</span>
                </div>
                <div className="topRight">
                    
                <div className="topbarIconsContainer">
                        <Language/>
                    </div>

                    <div className="topbarIconsContainer">
                        <Settings/>
                    </div>
                    
                    <div className="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">1</span>
                    </div>

                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
