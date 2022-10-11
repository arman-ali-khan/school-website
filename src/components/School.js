import React from 'react';
import { useLoaderData } from 'react-router-dom';

const School = () => {
    const schools = useLoaderData();

    return (
        <div className='grid md:grid-cols-3 gap-4'>
          {
            schools.map(school =>  <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={school.picture} className='h-64 w-full' alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{school.name}</h2>
            </div>
          </div>)
          }
        </div>
    );
};

export default School;