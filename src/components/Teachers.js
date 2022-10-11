import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Teachers = () => {
    const teachers = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 gap-3'>
            {
                teachers.map(teacher=>  <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={teacher.picture} alt="Shoes" className='h-64 rounded-full w-64' /></figure>
                <div className="card-body">
                  <h2 className="font-bold text-2xl text-center">{teacher.name}</h2>
                </div>
              </div>)
            }
           
        </div>
    );
};

export default Teachers;