import "./widgetSmall.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Customers</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/3770317/pexels-photo-3770317.jpeg?cs=srgb&dl=pexels-becca-correia-3770317.jpg&fm=jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallMember">
                        <span className="widgetSmallMemberName">
                            Laboris amet laboris 
                        </span>   
                        <span className="widgetSmallMemberTitle">
                            Lorem Isum                      
                        </span>
                    </div>
                    <botton className="widgetSmallBtn">
                    <Visibility className="widgetSmallIcon"/> 
                        Display 
                    </botton>                    
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/3770317/pexels-photo-3770317.jpeg?cs=srgb&dl=pexels-becca-correia-3770317.jpg&fm=jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallMember">
                        <span className="widgetSmallMemberName">
                            Lorem Isum
                        </span>   
                        <span className="widgetSmallMemberTitle">
                            Laboris amet laboris                         
                        </span>
                    </div>   
                    <botton className="widgetSmallBtn">
                    <Visibility className="widgetSmallIcon"/> 
                        Display
                    </botton>                      
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/3770317/pexels-photo-3770317.jpeg?cs=srgb&dl=pexels-becca-correia-3770317.jpg&fm=jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallMember">
                        <span className="widgetSmallMemberName">
                            Lorem Isum
                        </span>   
                        <span className="widgetSmallMemberTitle">
                            Laboris amet laboris                         
                        </span>
                    </div>       
                    <botton className="widgetSmallBtn">
                    <Visibility className="widgetSmallIcon"/> 
                        Display
                    </botton>                  
                </li>
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/3770317/pexels-photo-3770317.jpeg?cs=srgb&dl=pexels-becca-correia-3770317.jpg&fm=jpg" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallMember">
                        <span className="widgetSmallMemberName">
                            Lorem Isum
                        </span>   
                        <span className="widgetSmallMemberTitle">
                            Laboris amet laboris                         
                        </span>
                    </div>           
                    <botton className="widgetSmallBtn">
                        <Visibility className="widgetSmallIcon"/> 
                        Display
                    </botton>              
                </li>
            </ul>
        </div>
    )
}
