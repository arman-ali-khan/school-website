import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div className='text-center flex justify-center'> 
          <div>
          <img src="404.gif" className='h-96 w-96' alt="" />
            <h1 className='text-5xl'> {error.status} <i>{error.statusText || error.message}</i></h1>
          </div>
        </div>
    );
};

export default Error;