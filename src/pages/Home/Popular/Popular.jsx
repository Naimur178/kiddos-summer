
import "swiper/css";
import "swiper/css/pagination";
import SectionTItle from '../../../components/SectionTitle/SectionTItle';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


const Popular = () => {
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
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/cute-little-girl-drawing-with-paint-paintbrush-home_155003-15806.jpg?w=1060&t=st=1686131535~exp=1686132135~hmac=a33c1c3520179a1348c79b62c5898e80f78d6217e55bad05287b046a871c3261" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/cute-little-girl-drawing-with-paint-paintbrush-home_155003-15806.jpg?w=1060&t=st=1686131535~exp=1686132135~hmac=a33c1c3520179a1348c79b62c5898e80f78d6217e55bad05287b046a871c3261" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/cute-little-girl-drawing-with-paint-paintbrush-home_155003-15806.jpg?w=1060&t=st=1686131535~exp=1686132135~hmac=a33c1c3520179a1348c79b62c5898e80f78d6217e55bad05287b046a871c3261" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/cute-little-girl-drawing-with-paint-paintbrush-home_155003-15806.jpg?w=1060&t=st=1686131535~exp=1686132135~hmac=a33c1c3520179a1348c79b62c5898e80f78d6217e55bad05287b046a871c3261" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/cute-little-girl-drawing-with-paint-paintbrush-home_155003-15806.jpg?w=1060&t=st=1686131535~exp=1686132135~hmac=a33c1c3520179a1348c79b62c5898e80f78d6217e55bad05287b046a871c3261" alt="" />
                    <h3 className="text-4xl uppercase text-center -mt-16 text-white">Salads</h3>
                </SwiperSlide>
            </Swiper>
            
        </div>
    );
};

export default Popular;