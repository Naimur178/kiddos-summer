
import "swiper/css";
import "swiper/css/pagination";
import SectionTItle from '../../../components/SectionTitle/SectionTItle';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from "react";



const Popular = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    return (
        <div>
            <SectionTItle 
            subHeading={"From 9:00am to 10.00pm"}
            heading={"Popular Categories"}
            ></SectionTItle>
            <Swiper 
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper lg:mb-24"
            >
                <SwiperSlide className="">
                    <img src="https://img.freepik.com/free-photo/cute-little-girl-drawing-with-paint-paintbrush-home_155003-15806.jpg?w=1060&t=st=1686131535~exp=1686132135~hmac=a33c1c3520179a1348c79b62c5898e80f78d6217e55bad05287b046a871c3261" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Painting</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/close-up-person-twisting-chenille-stems-wooden-table_23-2147899029.jpg?w=1060&t=st=1686132355~exp=1686132955~hmac=a23754a6248955dc6d244a3fabe763a84431d5b3054c8d847752b371a4605d74" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Fiber Craft</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/female-artist-hand-making-cartoon-faces-using-craft-equipment_23-2148188350.jpg?w=1060&t=st=1686132384~exp=1686132984~hmac=3aec5ff6df2d39b16a455aa854850d3779f52dea5727b86541610a9b98fc21c2" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Sculpting</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/xmas-papercraft_1098-14039.jpg?w=1060&t=st=1686760640~exp=1686761240~hmac=f391fbf9aff5d014a64b8eebe65ff3baeb2d0b01fd67fdfb6d356c82f11f3e73" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Paper Art</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/high-angle-kid-playing-table_23-2149513120.jpg?w=1060&t=st=1686760658~exp=1686761258~hmac=bdaa86cee1938508c5bf9fab94029b99a036e2bbf013fecb73920cfdf5626b08" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Clay Crafting</h3>
                </SwiperSlide>
            </Swiper>
           
            
        </div>
    );
};

export default Popular;