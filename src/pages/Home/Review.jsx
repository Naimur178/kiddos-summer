import React from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar, FaStarAndCrescent } from 'react-icons/fa';

const Review = () => {
  return (
    <div className="">
      <h2 className="text-5xl font-semibold text-center mt-5">Customer Review</h2>
      <div className="grid lg:grid-cols-2 gap-6 my-8">
        <div className="bg-base-300">
          <div>
            <div className="flex  flex-row items-center justify-between"> 
              <img
                src="https://img.freepik.com/free-photo/portrait-beautiful-face-young-woman-with-long-brown-hair_186202-4331.jpg?w=740&t=st=1684667979~exp=1684668579~hmac=278cf15294715d4d91619e75e10585b701c86e6f915670e773300a3ca6081da8"
                className="w-1/3 rounded-2xl mask mask-circle pt-3"
              ></img>

              <div className="ms-5">
              <h2 className="text-xl font-semibold">Julia Adams</h2>
              <p><span className="font-semibold">Rating: </span> <Rating
                              emptySymbol={<FaRegStar></FaRegStar>}
                              fullSymbol={<FaStar color="orange"></FaStar>}
                              initialRating={4.1}
                              readonly
                            ></Rating></p>
              <p className="mt-5 italic">
            The customer service at this toy shop is exceptional. They went
            above and beyond to help me find the perfect toy.
          </p>
              </div>
            </div>
          </div>
          
        </div>
        <div className="bg-base-300 p-5 rounded-xl">
          <div>
          <div className="flex  flex-row items-center"> 
              <img 
                src="https://img.freepik.com/free-photo/handsome-man-with-his-arms-crossed-white-background_1368-4287.jpg?w=740&t=st=1684667291~exp=1684667891~hmac=78fb47991e0cfbd8e51477be01d391cd6036d443c958dd864229f23abeac9fb9"
                className="w-1/3 rounded-2xl mask mask-circle "
              ></img>

              <div className="ms-5">
              <h2 className="text-xl font-semibold">John Copperfield</h2>
              <p><span className="font-semibold">Rating:</span><Rating
                              emptySymbol={<FaRegStar></FaRegStar>}
                              fullSymbol={<FaStar color="orange"></FaStar>}
                              initialRating={4.8}
                              readonly
                            ></Rating></p>
              <p className="mt-4 italic">
            The customer service at this toy shop is exceptional. They went
            above and beyond to help me find the perfect toy.
          </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Review;
