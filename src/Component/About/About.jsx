
import React from 'react';
import './About.css';
import arrow from '../../Images/arrow-down.svg';
import { useRef } from 'react';
import { TypingText } from '../../Data/CustomTexts';
import { motion } from 'framer-motion';


const About = () => {

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
   <motion.div className="about " 
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0.25 }}>
 
<div className='text-animation'>
<p className='text'>|</p>
<TypingText  title=" About Metaversus ?" className='text2' />
</div>

   <div className='gradient-05' />
   <div className="about-body" >
    <h2 data-aos="fade-up" data-aos-offset="200" 
  data-aos-easing="ease-in-sine" data-aos-duration="1200">
    <span>Metaverse</span> is a new thing in the future, where you can enjoy
     the virtual world by feeling like it's really real, you can 
     feel what you feel in this metaverse world, because this is
      really the <span>madness of the metaverse</span> of today, 
      using only <span> VR </span>
      devices you can easily explore the metaverse world you want,
       turn your dreams into reality. Let's <span> explore</span> the madness of
        the metaverse by scrolling down .
    </h2>
    <img src={arrow} onClick={handleClick} alt="" />
   
    <div ref={ref} />
   </div>
   </motion.div>
  )
}

export default About;