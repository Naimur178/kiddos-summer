import React, { useEffect } from 'react';
import './Galary.css'
import Aos from 'aos';
const Galary = () => {
    useEffect(() => {
        Aos.init({
            delay: 100,
        });
      }, []);
      
    return (
        <div className='grid lg:grid-cols-4 gap-4 bg-pink-300 px-3 my-4'>
            <div data-aos="fade-left">
            <img src="https://img.freepik.com/free-vector/super-kiddo-logo-text-design_1308-73565.jpg?w=1060&t=st=1684671068~exp=1684671668~hmac=d8e56aa5e257ef923b0c702496c67685b2aa9615273c7028fb79625123e52d9e" alt="" className='py-4' />
        </div>
        <div data-aos="fade-left">
            <img src="https://img.freepik.com/free-vector/kids-zone-colorful-banner-design_1017-33748.jpg?w=1060&t=st=1684673017~exp=1684673617~hmac=09d73fff91d60656c399f00dc57f1469ae1bb95ce3b19d9d5e167130199ac324" alt="" className='py-4' />
        </div>
        <div data-aos="fade-right">
            <img src="https://img.freepik.com/free-vector/kids-zone-fun-play-banner-design_1017-33753.jpg?w=1060&t=st=1684673165~exp=1684673765~hmac=416debdf28f1b9fa95e4fb69d3de91d26535a821465331be9eaa79484a0578ca" alt="" className='py-4' />
        </div>
        <div data-aos="fade-right">
            <img src="https://img.freepik.com/free-psd/kiddies-3d-text-effect_17005-1988.jpg?w=1060&t=st=1684673216~exp=1684673816~hmac=08991ce9994f7e7093f0c285f0dd3fcf687716898e15d222fc73aba92def0786" alt=""  className='py-4'/>
        </div>
        
        </div>

    );
};

export default Galary;