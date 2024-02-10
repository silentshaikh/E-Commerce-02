import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { VscListFlat } from "react-icons/vsc";
import { FiShoppingBag } from "react-icons/fi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { useCartContext } from '../Context/cartContext';
function Navbar() {
    const [showNav,upShowNav] = useState(false);
    const {totalItem} = useCartContext();
    const homNavig = useNavigate();
    const navRout = [
        {
            lnk: '/',
            name: 'Home',
        },
        {
            lnk: '/product',
            name: 'Product',
        },
        {
            lnk: '/about',
            name: 'About',
        },
        {
            lnk: '/contact',
            name: 'Contact',
        },
    ];
  return (
    <nav className='navbar'>
    <div className="logo" onClick={() => homNavig('/')}>
        <h1>M-STORE</h1>
    </div>
    {showNav ?  <div className="navIcon2" onClick={() => upShowNav(false)}>
      <IoCloseCircleSharp className='close' />
      </div> : <div className="navIcon" onClick={() => upShowNav(true)}>
    <VscListFlat className='open' />
      </div>}
    
      <div className="nav-list">
      <ul className={showNav ? "li-list listActive" : 'li-list'}>
      {navRout.map((element,index) => {
        return(
            <li key={index} onClick={() => upShowNav(false)}><NavLink className='lnk' to={element.lnk}>{element.name}</NavLink></li>
        );
      })}
     
     
      </ul>
      </div>
      <NavLink to='/cart'>
      <div className="cartNav">
        <FiShoppingBag className='shop'/>
        <p>{totalItem}</p>
      </div>
      </NavLink>
    </nav>
  )
}

export default Navbar
