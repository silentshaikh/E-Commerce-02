import React from 'react'
import '../Home/Home.css';
import HomeHro from './HomeHro';
import homeImg from '../Images/img-removebg-preview.png';
import HProduct from './HProduct';
function Home() {
  return (
    <>
   <HomeHro head='m-store' para='Discover Stylish Nike Arrivals, Quality Comfort and Annovation for your Active Life.Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance' imags={homeImg}/>
   <HProduct/>
   </>
  )
}

export default Home;
