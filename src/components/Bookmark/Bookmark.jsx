import React from 'react';

const Bookmark = ({blog,isBookMark}) => {
    // console.log(blog)
    const {title}= blog;
    // console.log(title)
    return (
        <div className='p-4'>
            <li className='bg-fuchsia-300 p-4 rounded'>
            {
                isBookMark ? <p>{title}</p> : " "
            }
            
        </li>
        </div>
    );
};

export default Bookmark;