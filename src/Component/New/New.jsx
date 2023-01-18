
import React from 'react';
import './New.css';
import img1 from '../../Images/ic_baseline-vrpano.png'
import img2 from '../../Images/bi_headset-vr (1).png';
import news from '../../Images/whats-new.png';
import { TypingText } from '../../Data/CustomTexts';
import { motion } from 'framer-motion';


const New = () => {
  return (
   <motion.div className="new "  initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0.25 }}>

<div className="new-l ">

<div className='text-animation'>
<p className='text'>|</p>
<TypingText  title=" What's New ? "  />
</div>

<h2 >What's new about Metaversus?</h2>

<div className="new-body">

<div >
   <div data-aos="zoom-in" 
    data-aos-anchor-placement="center-bottom" data-aos-offset="200" 
    data-aos-easing="ease-in-sine" data-aos-duration="1200"> <img src={img1} alt="" /></div>
    <h3>A new world</h3>
    <p>We have the latest update with new world for
         you to try never mind</p>
</div>

<div >
   <div data-aos="zoom-in" 
    data-aos-anchor-placement="center-bottom" data-aos-offset="300" 
    data-aos-easing="ease-in-sine"  data-aos-duration="1200"> <img src={img2} alt="" /></div>
    <h3>More realistic</h3>
    <p>In the latest update, your eyes are narrow, making
         the world more realistic than ever</p>
</div>

</div>
</div>

<div className="new-r" 
data-aos="zoom-in" 
data-aos-anchor-placement="center-bottom" data-aos-offset="300" 
data-aos-easing="ease-in-sine" data-aos-duration="1200">
    <img src={news} alt="" />
</div>

   </motion.div>
  )
}

export default New;