
import React from 'react';
import './Explore.css';
import { exploreWorlds } from '../../Data/Data';
import { useState } from 'react';
import { TypingText } from '../../Data/CustomTexts';
import { motion } from 'framer-motion';
//import { fadeIn } from '../../Data/Motion';

const Explore = () => {

const [selected,setSelected] = useState(1)

  return (
   <motion.div className="explore" id='explore-1'
   initial="hidden"
   whileInView="show"
   viewport={{ once: false, amount: 0.25 }}>

<div className='text-animation'>
<p className='text'>|</p>
<TypingText  title=" The World "  />
</div>

    <h2 >Choose the world you want to explore</h2>
    <div className='gradient-6'/>

 <div className="explore-body">
{exploreWorlds.map((world,index)=> (
  <div 
 
  className={selected === index ? 'explore-active' :'explore-preview' }
  onClick={()=>setSelected(index)} key={index}>
<img src={world.img} alt="" />

<div className="info">
<div><img src={world.img1} alt="" /></div>
<h4>{world.text}</h4>
<h3>{world.title}</h3>
</div>


  </div>
))}

 </div>
   </motion.div>
  )
}

export default Explore;