
import React from 'react';
import './Hero.css';
import img1 from '../../Images/Vector (3).png';
import img2 from '../../Images/Vector (4).png';
import img3 from '../../Images/Vector (5).png';
import img4 from '../../Images/Vector (6).png';
import cover from '../../Images/cover.png';
import stamp from '../../Images/stamp.png';


const Hero = () => {
  return (
   <div className="hero "  >
   
 <div className="heading"  >
 <h1>METAVERSE</h1>
 <h1>MADNESS</h1>
  </div>

  <div className="cover"  >
  <img src={cover} alt="" />
</div>


<div className="stamp" data-aos="zoom-in" data-aos-offset="200" 
  data-aos-easing="ease-in-sine" data-aos-duration="1500" >
  <img src={stamp} alt="" />
</div>

<div className="social-icons"  >
  <ul data-aos="fade-left" data-aos-offset="200" 
  data-aos-easing="ease-in-sine" data-aos-duration="1500">
    <li><img src={img4} alt="" /></li>
    <li><img src={img3} alt="" /></li>
    <li><img src={img2} alt="" /></li>
    <li><img src={img1} alt="" /></li>
  </ul>
</div>

   </div>
  )
}

export default Hero;

