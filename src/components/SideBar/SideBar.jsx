import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import Bookmark from '../Bookmark/Bookmark';

const SideBar = ({blogs,readTime,count}) => {
    const [times, setTimes] = useState(readTime);

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setTimes(getReadTime);
        
      }, [readTime]);

    return (
        <div className='sticky top-0'>
            <h4 className='text-fuchsia-700 text-xl font-bold mb-8'>Spent time on read : <span>{times}</span> min</h4>
            
            <p className='font-bold text-xl mb-4'>Bookmark Blogs: {count}</p>
            {
                    blogs?.map(blog => <Bookmark blog={blog} key={blog.id}></Bookmark>)
            }
        </div>
    );
};

export default SideBar;