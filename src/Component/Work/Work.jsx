
import React from 'react';
import './Work.css';
import img1 from '../../Images/get-started.png';
import { getStarted } from '../../Data/Data';
import { TypingText } from '../../Data/CustomTexts';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <motion.div className="work" 
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}>

    <div className='work-l'>
   <img src={img1} alt="" />
    </div>


    <div className='work-r '>
        
    <div className='text-animation'>
<p className='text'>|</p>
<TypingText  title=" How Metaversus Works "  />
</div> 
        <h2>
          Get started with just a few clicks</h2>
{getStarted.map((work,index)=> (
    <div className="preview" key={index} >
    <div >
        <h2>{work.number}</h2>
    </div>
    <div>
        <p>{work.text}</p>
    </div>
    </div>
))}

    </div>
    <div className='gradient-n'/>
    <div className='gradient-b'/>

    </motion.div>
  )
}

export default Work