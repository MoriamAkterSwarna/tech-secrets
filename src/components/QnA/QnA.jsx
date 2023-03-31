import React from 'react';

const QnA = () => {
    return (
        <div className='text-center my-10'>
            <h2 className='text-fuchsia-600 text-5xl font-bold mb-10'>Learn More About React</h2>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div className="collapse-content"> 
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
                </div>
        </div>
    );
};

export default QnA;