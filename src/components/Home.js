import Lottie from "lottie-react";
import React from 'react';

import school from "../school.json";
import Card from "./Card";
const Home = () => {
    return (
        <div>
            
            <Lottie className="relative" animationData={school} loop={true} >
            </Lottie>
            <div className=" absolute top-[10%] md:top-1/4 left-12"><p className=" uppercase font-bold text-blue-500 text-lg sm:text-2xl md:text-5xl  my-9">Our Programming School</p><p>Work From Home</p> 
            <button className="btn btn-warning my-9">CONTACT US</button>
            </div>
            <Card/>
        </div>
    );
};

export default Home;