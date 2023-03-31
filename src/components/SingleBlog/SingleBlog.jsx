import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = ({blog, handleReadTime,handleBookmark}) => {
    const {cover,title,img,kind,authorName,published,time} =blog;
    return (
        <div className='mb-14'>
            <div className="card card-compact bg-base-100 shadow-2xl">
                <figure><img style={{height:"400px"}} className='w-96 lg:w-full' src={cover} alt="Programming" /></figure>
                <div className="card-body ml-4 lg:ml-10">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img src={img} alt="Author Image" className='mr-4 w-12 rounded-full'/>
                            <div>
                                <h5 className='text-xl'>{authorName}</h5>
                                <p>{published}</p>
                            </div>
                            
                        </div>
                        <div className='mr-12'>
                                 <p><span>{time}</span> min read  
                                <span className='pl-2'><FontAwesomeIcon onClick={() => handleBookmark(blog.title)} icon={faBookmark} /></span> 
                                </p> 
                                {/* <button onClick={() =>handleBookmark(blog.title)}>Bookmark</button> */}
                            </div>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p>{kind}</p>
                    <div className="card-actions">
                    <button onClick={()=> handleReadTime(time)} className="btn bg-fuchsia-500">Mark as Read</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SingleBlog;