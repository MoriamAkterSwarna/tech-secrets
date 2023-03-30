import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleBlog = ({blog}) => {
    console.log(blog);
    const {cover,title,img,kind,authorName,published,time} =blog;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-2xl">
                <figure><img src={cover} alt="Programming" /></figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <img src={img} alt="Author Image" className='mr-4'/>
                            <div>
                                <h5 className='text-xl'>{authorName}</h5>
                                <p>{published}</p>
                            </div>
                            
                        </div>
                        <div className='mr-10'>
                                <p>{time} min read <FontAwesomeIcon icon={faBookmark} /></p>
                            </div>
                    </div>
                    <h2 className="card-title text-2xl font-bold">{title}</h2>
                    <p>{kind}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Mark as Read</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default SingleBlog;