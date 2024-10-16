import '../styles/Showcase.css';
import '../styles/Header.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import WorkData from '../data/works.json';

const Showcase = () => {

    const panelNum = 3;

    const navigate = useNavigate();
    const [workData] = useState(WorkData);
    const [showcaseList] = useState(workData.slice(0,panelNum).map((work) => (
        <button onClick={() => {navigate("workpage", {state:{data: work}});}} key={work.id} className="showcasepanel">
            <img src={work.mainimage} alt={work.title} />
            <div className="showcaseText">{work.title}</div> 
        </button>
    )));

    function getWindowHeight() {
        var height = window.innerHeight;
        const bannerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--mainBannerHeight'));

        const showcaseHeight = height - bannerHeight;

        document.documentElement.style.setProperty('--showcaseHeight', showcaseHeight + "px");

        return showcaseHeight;
    }

    function getWindowWidth() {
        var width = window.innerWidth;

        var panelWidth = (width / panelNum) - 4;
        document.documentElement.style.setProperty('--showcaseWidth', width + 'px');
        document.documentElement.style.setProperty('--showcasePanelWidth', panelWidth + 'px');


        return 0;
    }

    useEffect(() => {

        function WindowResize() { 
            getWindowHeight();
            getWindowWidth();
        }

        window.addEventListener('resize', WindowResize);
        return () => window.removeEventListener('resize', WindowResize);
    })

    useEffect(() => {
        getWindowHeight();
        getWindowWidth();
    }, []);

    return (
        <div className="showcase">
            {showcaseList}
        </div>
     );
}
 
export default Showcase;