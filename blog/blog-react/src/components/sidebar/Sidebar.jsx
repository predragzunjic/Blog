import "./sidebar.css"
import axios from "axios"
import { useState, useEffect, useContext} from "react"
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function Sidebar() {
    const [cats, setCats] = useState([]);


    useEffect(() => {
        const getCats = async () =>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }

        getCats();
    }, [])
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className=" sidebarTitle">MY PROFILE PIC</span>
                <span className="logo">BLOG</span>
                <span className="logo">VEL</span>
                
                
            </div>

           

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a href="https://www.facebook.com"><i className="topIcon fab fa-facebook-square"></i></a>
                    <a href="https://www.twitter.com"><i className="topIcon fab fa-twitter-square"></i></a>
                    <a href="https://www.pinterest.com"><i className="topIcon fab fa-pinterest-square"></i></a>
                    <a href="https://www.instagram.com"><i className="topIcon fab fa-instagram-square"></i></a>
                </div>
            </div>
        </div>
    )
}
