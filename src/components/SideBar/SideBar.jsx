import { library } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';


const SideBar = ({readTime,count,isBookMark}) => {

    const [times, setTimes] = useState(readTime);

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setTimes(getReadTime);
        
      }, [readTime]);

    return (
        <div className='sticky top-0 text-center'>
            <h4 className='text-fuchsia-700 text-xl font-bold mb-8'>Spent time on read : <span>{times}</span> min</h4>
            
            <p className='font-bold text-xl mb-4'>Bookmark Blogs: {count}</p>

                    <div>
                    {
                        isBookMark.map(blg=><li className='bg-fuchsia-400 p-4 rounded m-4'>{blg}</li>)
                    }
                    
                    </div>
                    
                   
        </div>
    );
};

export default SideBar;