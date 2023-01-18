
import React from 'react';
import './Insight.css';
import { insightData } from '../../Data/Data';
import { TypingText } from '../../Data/CustomTexts';
import { motion } from 'framer-motion';

const Insight = () => {
  return (
    <motion.div className="insight"  initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}>

<div className='text-animation'>
<p className='text'>|</p>
<TypingText  title=" Insight "  />
</div>

<h2>Insight about metaverse </h2>
{insightData.map((insight,index)=> (
    <div className="insight-preview" key={index}>

<div  
data-aos="fade-up-right" data-aos-offset="500" 
data-aos-easing="ease-in-sine" data-aos-duration="1000"
>
    <img src={insight.img} alt="" />
</div>

<div>
<h3>{insight.text}</h3>
<p>{insight.subText}</p>
</div>

<div
data-aos="fade-up-right" data-aos-offset="500" 
data-aos-easing="ease-in-sine" data-aos-duration="1000"
>
    <img src={insight.arrow} alt="" />
</div>

    </div>
))}
<div className='gradient-i'/>
    </motion.div>
  )
}

export default Insight;