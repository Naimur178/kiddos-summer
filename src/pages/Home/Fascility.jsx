import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { BsCashCoin } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const Fascility = () => {
    return (
        <div className='my-8'>
            <h2 className='text-center text-4xl font-semibold my-4 pt-8'>Why we are best?</h2>
            <div>
            <div className='grid lg:grid-cols-3 gap-4'>
                <div className="card mb-2  bg-base-300 shadow-xl">
                    <figure className='text-6xl pt-3'><BiSupport></BiSupport></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Morning and Day Care
                            <div className="badge badge-secondary">best</div>
                        </h2>
                        <p>Online support 24 hours a day</p>
                        
                    </div>
                </div>
                <div className="card  bg-base-300 shadow-xl mb-2">
                    <figure className='text-6xl pt-3'><FaShippingFast></FaShippingFast></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        Fast Response
                            <div className="badge badge-secondary">24 hr</div>
                        </h2>
                        <p>Free shipping on all order</p>
                       
                    </div>
                </div>
                <div className="card bg-base-300 shadow-xl">
                    <figure className='text-6xl pt-3'><BsCashCoin></BsCashCoin></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Money Back
                            <div className="badge badge-secondary">5 days</div>
                        </h2>
                        <p>Back guarantee within 30 days</p>
                        
                    </div>
                </div>


            </div>
            
                

          
           
                
            </div>
            </div>
        
    );
};

export default Fascility;