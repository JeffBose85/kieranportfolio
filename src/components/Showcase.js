import { useEffect } from 'react';
import '../styles/Showcase.css';
import '../styles/Header.css';
import { useState } from 'react';

import TestImage from '../images/WorkImages/showcaseTestImg.jpg';

const Showcase = () => {


    //Add support for dynamic panel numbers?
    const panelNum = 3;

    const [windowHeight, setWindowHeight] = useState(getWindowHeight());
    const [windowWidth, setWindowWidth] = useState (getWindowWidth());

    function getWindowHeight() {
        var height = window.innerHeight;
        const bannerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mainBannerHeight'));

        const showcaseHeight = height - bannerHeight;

        document.documentElement.style.setProperty('--showcaseHeight', showcaseHeight + "px");

        return showcaseHeight;
    }

    function getWindowWidth() {
        var width = window.innerWidth;

        var panelWidth = width / panelNum;
        document.documentElement.style.setProperty('--showcaseWidth', width + 'px');
        document.documentElement.style.setProperty('--showcasePanelWidth', panelWidth + 'px');


        return 0;
    }

    useEffect(() => {

        function WindowResize() { 
            setWindowHeight(getWindowHeight());
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', WindowResize);
        return () => window.removeEventListener('resize', WindowResize);
    })

    return (
        <div className="container">
        <div className="showcase">
            <div className="showcasepanel"><img src={TestImage} alt="" /></div>
            <div className="showcasepanel"><img src={TestImage} alt="" /></div>
            <div className="showcasepanel"><img src={TestImage} alt="" /></div>
            
        </div>
            <div className="test">{windowHeight}</div>
        </div>
     );
}
 
export default Showcase;