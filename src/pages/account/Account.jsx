import { CalendarToday, Email, LocationOn, LocationSearchingOutlined, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./account.css"

export default function Account() {
    return (
        <div className="account">
            <div className="accountTitleContainer">
                <h1 className="accountTitle">Edit Account</h1>
                <Link to="/newAccount">
                <button className="accountAddBtn">Create</button>
                </Link>
                
            </div>

            <div className="accountContainer">
                <div className="accountShow">
                    <div className="accountShowTop">
                        <img src="https://images.pexels.com/photos/3770317/pexels-photo-3770317.jpeg?cs=srgb&dl=pexels-becca-correia-3770317.jpg&fm=jpg" alt="" className="accountShowImg" />
                    <div className="accountShowTopTitle">
                        <span className="accountShowName">Aliqua ut id proident.</span>
                        <span className="accountShowTitle"> minim tempor</span>
                    </div>
                    </div>
                    
                    <div className="accountShowBottom">
                        <span className="AccountShowDetail">Account Details</span>
                        <div className="accountShowInfo">
                        <PermIdentity className="accountShowIcon"/>
                        <span className="AccountShowDetailInfo">Aliqua</span>
                        </div>
                        <div className="accountShowInfo">
                        <CalendarToday className="accountShowIcon"/>
                        <span className="AccountShowDetailInfo">31.12.2000</span>
                        </div>
                        <span className="AccountShowDetail">Contact Details</span>
                        <div className="accountShowInfo">
                        <PhoneAndroid className="accountShowIcon"/>
                        <span className="AccountShowDetailInfo">+62 888  9999</span>
                        </div>
                        <div className="accountShowInfo">
                        <MailOutline className="accountShowIcon"/>
                        <span className="AccountShowDetailInfo">aliqua@mail.com</span>
                        </div>
                        <div className="accountShowInfo">
                        <LocationOn className="accountShowIcon"/>
                        <span className="AccountShowDetailInfo">Jakarta | ID</span>
                        </div>
                        
                    </div>
                </div>
                <div className="accountUpdate">
                    <span className="accountUpdateTitle">Edit</span>
                    <form className="accountUpdateForm">
                        <div className="accountUpdateLeft">
                            <div className="accountUpdateItem">
                                <label> Account Name</label>
                                <input type="text" placeholder="Aliqua" className="accountUpdateInput" />
                            </div>
                            <div className="accountUpdateItem">
                                <label> Full Name</label>
                                <input type="text" placeholder="Aliqua ut id proident" className="accountUpdateInput" />
                            </div>
                            <div className="accountUpdateItem">
                                <label> Birthday Date</label>
                                <input type="text" placeholder="31.12.2000" className="accountUpdateInput" />
                            </div>
                            <div className="accountUpdateItem">
                                <label> Phone No</label>
                                <input type="text" placeholder="62 888 9999" className="accountUpdateInput" />
                            </div>
                            <div className="accountUpdateItem">
                                <label> Email</label>
                                <input type="text" placeholder="aliqua@mail.com" className="accountUpdateInput" />
                            </div>
                            <div className="accountUpdateItem">
                                <label> Address </label>
                                <input type="text" placeholder="Jakarta | ID" className="accountUpdateInput" />
                            </div>
                        </div>
                        <div className="accountUpdateRight">
                            <div className="accountUpdateUpload">
                                <img className="accountUpdateImg" src="https://images.pexels.com/photos/3770317/pexels-photo-3770317.jpeg?cs=srgb&dl=pexels-becca-correia-3770317.jpg&fm=jpg" alt=""  />
                            
                                <label htmlFor="fileImg"> <Publish className="accountUpdateIcon"/> </label>
                            <input type="file" id="fileImg" style={{ display: "none" }}/>
                            </div>
                            <button className="accountUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
