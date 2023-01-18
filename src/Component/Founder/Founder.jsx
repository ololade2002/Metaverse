
import React from 'react';
import './Founder.css';
import { founderData } from '../../Data/Data';

const Founder = () => {
  return (
  <div className="founder">
 <div className='blur-f'/>
{founderData.map((founder,index)=> (
    <div className="founder-preview" key={index}>

<div>
    <h2>{founder.name}</h2>
    <p>{founder.title}</p>
    <h4>{founder.text}</h4>
</div>

<div 
data-aos="zoom-in" data-aos-offset="800" 
data-aos-easing="ease-in-sine" data-aos-duration="1200"
>
    <img src={founder.img1} alt="" />
</div>

<div>
    <img src={founder.img} alt="" />
</div>

    </div>
))}

  </div>
  )
}

export default Founder;