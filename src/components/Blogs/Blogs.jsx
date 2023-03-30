import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/public/data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs);
    return (
        <div className='grid grid-cols-1'>
           {
            // blogs.map( blog => <SingleBlog></SingleBlog>)
            blogs.map(blog =><SingleBlog blog={blog}></SingleBlog>)
           }
        </div>
    );
};

export default Blogs;