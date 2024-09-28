import React from 'react';
import "../App.css";
import SecImage from "../images/LongHashX White 1.svg";
import SecImage2 from "../images/Axelar Logo Full White 1.svg";
import SecImage3 from "../images/image 39.svg";
import Line from "../images/Line 250.svg";
import Sec5Image from "../images/Blockchain/image 88.svg";
import Sec5Image2 from "../images/Blockchain/image 89.svg";
import Sec5Image3 from "../images/Blockchain/SOM_Website_Logo (1) 1.svg";
import Sec5Image4 from "../images/Blockchain/image 90.svg";
import Sec5Image5 from "../images/Blockchain/image 87.svg";

const Home = () =>{
    return(
        <div>
        <div className='sec3'>
            <div>Backed by</div>
            <div className='sec3-container'>
                <img src={SecImage} alt="img" />
                <img src={SecImage2} alt="img" />
                <img src={SecImage3} alt="img" />
            </div>
        </div>
        <div className='sec-wrap'>
        <div className='sec4'>
            <img src={Line} alt="img" />
            <div className='sec4-cont'>LYNC provides a scalable infrastructure for launching web3 games, without hampering the <span>gaming experience.</span>So that you can deliver the next big hit!</div>
            <img src={Line} alt="img" className='sec4-bot-line'/>
        </div>
        <div className='sec5'>
            <div className='sec5-cont'>Making blockchain gaming <br />accessible to <span>everyone!</span></div>
            <div className='sec5-img-container'>
            <img src={Sec5Image} alt="img" />
            <img src={Sec5Image2} alt="img" />
            <img src={Sec5Image3} alt="img" />
            <img src={Sec5Image4} alt="img" />
            <img src={Sec5Image5} alt="img" />
            </div>
        </div>
        </div>
        <div className='sec6'>
            <div className='sec6-cont'>Power Up Your Web3 Game Development, With <span>LYNC SDKs</span></div>
            <div className='sec6-sub-cont'>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</div>
        </div>
        <div className='footer'>
        <div className='sec6-cont'>Power Up Your Web3 Game Development, With <span>LYNC SDKs</span></div>
        <div className='sec6-sub-cont'>LYNC SDKs can be easily integrated into game engines like Unity 3D and Unreal Engine in a few clicks.</div>
        </div>
        </div>
    )
}
export default Home;