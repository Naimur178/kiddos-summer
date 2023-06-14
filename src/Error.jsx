import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <Link to='/' className='btn btn-outline ms-96'>Go BAck</Link>
            <img className='w-full' src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=1060&t=st=1686760259~exp=1686760859~hmac=1456971716c593ecdc2b8d8c069fdad1d11f61cec1d3df1efe18ce8e0791bd36" alt="" />
            
        </div>
    );
};

export default Error;