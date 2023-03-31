import React, { useEffect, useState } from 'react';

const SideBar = ({readTime}) => {
    const [times, setTimes] = useState(readTime);
    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setTimes(getReadTime);
        
      }, [readTime]);
    return (
        <div>
            <h4 className='text-fuchsia-700 text-xl font-bold'>Spent time on read : <span>{times}</span> min</h4>
        </div>
    );
};

export default SideBar;