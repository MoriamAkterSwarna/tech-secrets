import React, { useEffect, useState } from 'react';
import SideBar from '../SideBar/SideBar';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blogs.css'

const Blogs = ({handleReadTime}) => {
    
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    return (
        <div className='container ml-24'>
           <div className='my-10' >
                {
                    blogs.map(blog =><SingleBlog handleReadTime={handleReadTime} key={blog.id} blog={blog}></SingleBlog>)
                }
           </div>
           
        </div>
    );
};

export default Blogs;