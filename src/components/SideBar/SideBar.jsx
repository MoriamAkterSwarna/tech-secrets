import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import { getBookmark } from '../../utilities/fakedb';

const SideBar = ({blogs,readTime}) => {
    const [times, setTimes] = useState(readTime);

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setTimes(getReadTime);
        
      }, [readTime]);
      
    //   console.log(blogs.title);
    return (
        <div className='sticky top-0'>
            <h4 className='text-fuchsia-700 text-xl font-bold mb-8'>Spent time on read : <span>{times}</span> min</h4>
            
            <p className='font-bold text-xl mb-4'>Bookmark Blogs: {blogs.length}</p>
            {
                    blogs.map(blog => <li>{blog.title}</li>)
            }
        </div>
    );
};

export default SideBar;