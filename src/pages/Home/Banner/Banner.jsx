import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel className='w-full'>
        <div>
            <img className='' src="https://img.freepik.com/free-photo/cute-little-girl-drawing-with-paint-paintbrush-home_155003-15806.jpg?w=1060&t=st=1686131535~exp=1686132135~hmac=a33c1c3520179a1348c79b62c5898e80f78d6217e55bad05287b046a871c3261" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img src="https://img.freepik.com/free-photo/close-up-person-twisting-chenille-stems-wooden-table_23-2147899029.jpg?w=1060&t=st=1686132355~exp=1686132955~hmac=a23754a6248955dc6d244a3fabe763a84431d5b3054c8d847752b371a4605d74" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img src="https://img.freepik.com/free-photo/female-artist-hand-making-cartoon-faces-using-craft-equipment_23-2148188350.jpg?w=1060&t=st=1686132384~exp=1686132984~hmac=3aec5ff6df2d39b16a455aa854850d3779f52dea5727b86541610a9b98fc21c2" />
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>
    );
};

export default Banner;