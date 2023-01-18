
import React from 'react';
import world from '../../Images/map.png';
import './World.css';
import img1 from '../../Images/people-01.png';
import img2 from '../../Images/people-02.png';
import img3 from '../../Images/people-03.png';
import img4 from '../../Images/upside-down.png';
import img5 from '../../Images/hawkins.png';
import { TypingText } from '../../Data/CustomTexts';
import { motion } from 'framer-motion';

const World = () => {
  return (
  <motion.div className="world  "
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}>
    <div className='blur-w' />

<div className='text-animation'>
<p className='text'>|</p>
<TypingText  title=" People In The World "  />
</div>

<h2>Track friends around you and invite them 
    to play together in the same world</h2>
    <img className='world-img ' src={world} alt="" />
    <div className="map">
       <div><img src={img2} alt="" /></div>
       <div><img src={img3} alt="" /></div>
       <div><img src={img1} alt="" /></div>
       <div><img src={img4} alt="" /></div>
       <div><img src={img5} alt="" /></div>
       <div className='blur-upside' />
       <div className='blur-hawkins' />
       </div>


  
  </motion.div>
  )
}

export default World;