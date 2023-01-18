
import React from 'react';
import './Footer.css';
import img1 from '../../Images/bi_headset-vr (1).png';
//import logo from '../../Images/METAVERUS.png';
import twitter from '../../Images/twitter.svg';
import linkedin from '../../Images/linkedin.svg';
import ig from '../../Images/instagram.svg';
import fb from '../../Images/facebook.svg';

const Footer = () => {
  return (
    <div className="footer">

<div>
    <h2>Enter The Metaverse</h2>
    <button data-aos="fade-up" data-aos-offset="600" 
data-aos-easing="ease-in-sine" data-aos-duration="1000" className=' '>
        <img src={img1} alt="" />
        <h4>ENTER METAVERSE</h4>
    </button>
</div>

<hr className='hr' />

<div>

<h2>METAVERSUS</h2>
<h5>Copyright © 2021 - 2022 Metaversus. All rights reserved.</h5>
<ul className='social'>
<li><img src={twitter} alt="" /></li>
<li><img src={linkedin} alt="" /></li>
<li><img src={ig} alt="" /></li>
<li><img src={fb} alt="" /></li>
</ul>

</div>
    
    <div className='blur-footer'/>


    </div>
  )
}

export default Footer;