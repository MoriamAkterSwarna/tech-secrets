import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = ({blog}) => {
    console.log(blog);
    const {cover,title,img,kind,authorName,published,time} =blog;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl">
                <figure className='mt-4'><img style={{height:"400px"}} src={cover} alt="Programming" /></figure>
                <div className="card-body ml-10">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img src={img} alt="Author Image" className='mr-4 w-12 rounded-full'/>
                            <div>
                                <h5 className='text-xl'>{authorName}</h5>
                                <p>{published}</p>
                            </div>
                            
                        </div>
                        <div className='mr-12'>
                                <p>{time} min read <FontAwesomeIcon icon={faBookmark} /></p>
                            </div>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p>{kind}</p>
                    <div className="card-actions">
                    <button className="btn bg-fuchsia-500">Mark as Read</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SingleBlog;