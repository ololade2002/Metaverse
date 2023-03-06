
import React from 'react';
import './Hero.css';
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


<div className="stamp"  >
  <img src={stamp} alt="" />
</div>



   </div>
  )
}

export default Hero;

