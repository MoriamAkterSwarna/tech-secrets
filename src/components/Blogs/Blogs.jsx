import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';


const Blogs = ({blogs,handleReadTime,isBookMark,handleBookmark}) => {

    return (
        <div className='container ml:4 lg:ml-24'>
           <div className='my-10' >
                {
                    blogs.map(blog =><SingleBlog handleReadTime={handleReadTime} handleBookmark= {handleBookmark} isBookMark={isBookMark} key={blog.id} blog={blog}></SingleBlog>)
                }
           </div>
           
        </div>
    );
};

export default Blogs;