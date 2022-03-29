import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Search() {
    const [posts, setPosts] = useState([]);
    const location = useLocation(" ");
    const path = "search/" + location.pathname.split("/")[2];
    

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts/" + path);
            console.log(res);
            setPosts(res.data);
        }
        
        fetchPosts();
    }, [path]);


    return (
        <>
            <Header/>
            <div className="search">
                <Posts posts = {posts}/>
                
            </div>
        
        </>
    )
}
