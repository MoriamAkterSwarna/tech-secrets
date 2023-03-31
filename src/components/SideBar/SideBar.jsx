import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';


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

                    <div>
                    {
                        blogs.map(blg=><li>{blg.title}</li>)
                    }
                    
                    </div>
                    
                   
        </div>
    );
};

export default SideBar;