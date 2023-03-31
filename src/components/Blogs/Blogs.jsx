import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';


const Blogs = ({blogs,handleReadTime,handleBookmark}) => {
    
    
    return (
        <div className='container ml-24'>
           <div className='my-10' >
                {
                    blogs.map(blog =><SingleBlog handleReadTime={handleReadTime} handleBookmark={handleBookmark} key={blog.id} blog={blog}></SingleBlog>)
                }
           </div>
           
        </div>
    );
};

export default Blogs;