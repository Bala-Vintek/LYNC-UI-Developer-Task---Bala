import React from 'react';
import "../App.css";
import "../Components/responsive.css";
import NavIcon from "../images/Group 12.svg";
import Arrow from "../images/Arrow_alt_lright_alt.svg";
import ArrowWhite from "../images/Arrow_alt_lright.svg";

const Home = () =>{
    const toggleMenu = () => {  
        const mobileMenu = document.querySelector('.mobile-menu');  
        mobileMenu.classList.toggle('active');  
    };  
    return(
        <div>
        <div className='sec1'>
            <div className='navbar'>
                <div className="hamburger" onClick={toggleMenu}>  
                    <div className="bar"></div>  
                    <div className="bar"></div>  
                    <div className="bar"></div>  
                </div>
                <div><img src={NavIcon} alt="img" /></div>
                    <div className='nav-center'>
                    <div>Home</div>
                    <div>Documentation</div>
                    <div>Blogs</div>
                    <div>LYNC Portal</div>
                    <div>Request a demo</div>
                    </div>
                <button><div className='get-starts'>Get Started</div> <img src={Arrow} alt="img" /></button>  
            </div>
            <div className="mobile-menu">  
                <div className='nav-item'>Home</div>  
                <div className='nav-item'>Documentation</div>  
                <div className='nav-item'>Blogs</div>  
                <div className='nav-item'>LYNC Portal</div>  
                <div className='nav-item'>Request a demo</div>
                <div className='nav-item' onClick={toggleMenu}>Close</div>  
            </div>  
        </div>
        <div className='sec2'>
            <div className='home-cont'>Launch Your Game</div>
            <div className='home-cont'>on <span>Web 3.0</span> in Minutes</div>
        <div className='home-cont-secon'>
            <span>We help game developers to launch their game on Web 3.0, by keeping </span>
            <span>blockchain complexities aside with WebWorld SDKs!</span>
        </div>
        <div className='btn-wrap'>
            <button className='get-start'>Get started <img src={ArrowWhite} alt="img" /></button>
            <div className='view-docs'>View Docs<img src={ArrowWhite} alt="img" /></div>
        </div>
        </div>
        
        </div>
    )
}
export default Home;