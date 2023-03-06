
import React from 'react';
import search from '../../Images/search.svg';
import menu from '../../Images/menu.svg'
import './Navbar.css';
import img1 from '../../Images/Vector (3).png';
import img2 from '../../Images/Vector (4).png';
import img3 from '../../Images/Vector (5).png';
import img4 from '../../Images/Vector (6).png';
import { useState } from 'react';
import {BsXLg} from 'react-icons/bs';
//import {RiMenu4Fill} from 'react-icons/ri';

const Navbar = () => {
const [mobile,setMobile] = useState(false);


  return (
   <div  className="navbar relative " >
   <div className='blur '/>
   <div className="nav">

   <div>
        <img className='' src={search} alt="" />
    </div>

    <div>
    <h2>METAVERSUS</h2>
    </div>

    <div className="menu" onClick={()=>setMobile(!mobile)}>
      {mobile ? <BsXLg/> :   <img src={menu} alt="" /> }
    </div>
   </div>
 
   <div className={mobile ? 'social-icons' : 'icons'}  >
  <ul>
    <li><img src={img4} alt="" /></li>
    <li><img src={img3} alt="" /></li>
    <li><img src={img2} alt="" /></li>
    <li><img src={img1} alt="" /></li>
  </ul>
</div>



   </div>
  )
}

export default Navbar;