import "./topbar.css"
import { Link } from "react-router-dom"
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import { Logout } from "../../context/Actions";


export default function Topbar() {
    const {user, dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/";
    const [idS, setIds] = useState("");

    const handleLogout = () => {
        dispatch(Logout());  
    }


    return (
        <div className = "top">
            <div className = "topLeft">
                <a href="https://www.facebook.com"><i className="topIcon fab fa-facebook-square"></i></a>
                <a href="https://www.twitter.com"><i className="topIcon fab fa-twitter-square"></i></a>
                <a href="https://www.pinterest.com"><i className="topIcon fab fa-pinterest-square"></i></a>
                <a href="https://www.instagram.com"><i className="topIcon fab fa-instagram-square"></i></a>
                
            </div>
            <div className = "topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">{
                        user ?(<Link className="link" to="/settings">PROFILE</Link>):(<Link className="link" to="/login">PROFILE</Link>)
                    }
                        
                    </li>
             
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>  
            </div>
            <div className = "topRight">
                {
                    user ? (
                            <img className="topImg" 
                                src={PF + user.profilePic} 
                                alt="profile pic" />
                    
                    ):(
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                
                
                    <input type="text" placeholder="Search.." name="search" onChange={(e) => {setIds(e.target.value)}}/>
                    <Link to={`/search/${idS}`}><i class="topSearchIcon fa fa-search"></i></Link>
                    
                
            </div>
        </div>
    )
}
