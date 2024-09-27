import React from 'react';
import "../App.css";
import NavIcon from "../images/Group 12.svg";
import Arrow from "../images/Arrow_alt_lright_alt.svg";
const Home = () =>{
    return(
        <div>
        <div className='sec1'>
            <div className='navbar'>
                    <div><img src={NavIcon} alt="img" /></div>
                    <div className='nav-center'>
                    <div>Home</div>
                    <div>Documentation</div>
                    <div>Blogs</div>
                    <div>LYNC Portal</div>
                    <div>Request a demo</div>
                    </div>
                    <button>Get Started <img src={Arrow} alt="img" /></button>
            </div>
        </div>
        <div className='sec2'>
            <div className='home-cont'>Launch Your Game</div>
            <div className='home-cont'>on <span>Web 3.0</span> in Minutes</div>
        <div className='home-cont-secon'><span>We help game developers to launch their game on Web 3.0, by keeping </span><span>
            blockchain complexities aside with WebWorld SDKs!</span>
        </div>
        <div className='btn-wrap'>
            <button className='get-start'>Get started <img src={Arrow} alt="img" /></button>
            <div>View Docs<img src={Arrow} alt="img" /></div>
        </div>
        </div>
        
        </div>
    )
}
export default Home;