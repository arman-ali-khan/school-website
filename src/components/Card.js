import Lottie from "lottie-react";
import React from 'react';
import home from '../home.json';
import laptop from '../laptop.json';
import zoom from '../zoom.json';

const Card = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="grid md:grid-cols-3 w-full gap-3">
                        <div class="p-4 w-full shadow-lg rounded-lg hover:bg-blue-200 duration-500">
                            <div className="flex justify-center ">
                                <Lottie className="hover:bg-blue-400 duration-500 rounded-full  w-56 h-56" animationData={home} loop={true} />
                            </div>
                                <h4 className="text-center text-3xl">Work From Home</h4>
                        </div>
                        <div class="p-4 w-full shadow-lg rounded-lg hover:bg-green-200 duration-500">
                            <div className="flex justify-center ">
                                <Lottie className="hover:bg-green-400 duration-500 rounded-full  w-56 h-56" animationData={laptop} loop={true} />
                            </div>
                                <h4 className="text-center text-3xl">Free Laptop</h4>
                        </div>
                        <div class="p-4 w-full shadow-lg rounded-lg hover:bg-orange-200 duration-500">
                            <div className="flex justify-center ">
                                <Lottie className="hover:bg-orange-400 duration-500 rounded-full  w-56 h-56" animationData={zoom} loop={true} />
                            </div>
                                <h4 className="text-center text-3xl">Zoom Meeting</h4>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Card;