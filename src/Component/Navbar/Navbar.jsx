
import React from 'react';
import search from '../../Images/search.svg';
import menu from '../../Images/menu.svg'
import { motion } from 'framer-motion';
import './Navbar.css';
//import { navVariant } from '../../Data/Motion';

const Navbar = () => {
  return (
   <motion.div  className="navbar relative " 
   initial='hidden'  whileInView='show' >
   <div className='blur '/>
   <div className="nav">
   <div>
        <img className='' src={search} alt="" />
    </div>
    <div>
    <h2>METAVERSUS</h2>
    </div>
    <div>
        <img src={menu} alt="" />
    </div>
   </div>
 
   </motion.div>
  )
}

export default Navbar;