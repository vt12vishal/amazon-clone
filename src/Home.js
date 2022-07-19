import React from 'react';
import './Home.css';
import Product from './Product';


function Home() {
  return (
    <div className='home'>
      <img className="home__image" src="https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TheTerminalListS1_Launch/cb625522-5dc1-4890-b72b-15caba38dd66._UR3000,600_SX1500_FMwebp_.jpeg"
       alt=""
       />
       

    <div className='home__row'>
     <Product id={12321311} 
     title="The lean Startup: How constant innovation creates Radicially Successfu Business"
     price={11}
     rating={4}
     image="https://m.media-amazon.com/images/I/81vvgZqCskL._AC_UY327_FMwebp_QL65_.jpg"
     
     />
     <Product id={12321312} 
     title="25 Ltrs Obsidian/Obsidian/White Casual Backpack (BA5876-451), M"
     price={100}
     rating={4}
     image="https://m.media-amazon.com/images/I/91lD8i7DXCL._AC_UL480_FMwebp_QL65_.jpg"
     
     />

    </div>

    <div className="home__row">
    <Product id={12321321} 
     title="Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display,IP68 Waterproof,Heart Rate Monitor,Sleep & Step Tracker,Call & Message Alerts & Long Battery Life (Jet Black)"
     price={150}
     rating={4}
     image="https://m.media-amazon.com/images/I/61xzuXWWozS._AC_UL480_FMwebp_QL65_.jpg"
     
     />
     <Product id={12321322} 
     title="Men's Wildhorse 7 Running Shoe"
     price={99.50}
     rating={4}
     image="https://m.media-amazon.com/images/I/61U+M98vLiL._AC_UL480_FMwebp_QL65_.jpg"
     
     />
     <Product id={12321323} 
     title="Acer Predator Helios 500 Gaming Laptop (11Th Gen Intel Core I9/17.3 Inches 4K Uhd Display/64Gb Ddr4 Ram/2Tb Ssd/1Tb HDD/RTX 3080 Graphics/Windows 10 Home/Per Key RGB Backlit Keyboard) Ph517-52"
     price={1150}
     rating={4}
     image="https://m.media-amazon.com/images/I/81oz+NZ4QLL._AC_UY327_FMwebp_QL65_.jpg"
     
     />
    </div>

    <div className='home__row'>
    <Product id={12321331} 
     title="Kobo WTB-08 Leather Power Lifting Lever Belt"
     price={11}
     rating={4}
     image="https://m.media-amazon.com/images/I/91wC1uYpl3L._AC_UL480_FMwebp_QL65_.jpg"
     
     />

    </div>

    </div>
  )
}

export default Home
