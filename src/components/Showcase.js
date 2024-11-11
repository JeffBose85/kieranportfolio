import '../styles/Showcase.css';
import '../styles/Header.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import WorkData from '../data/works.json';

const Showcase = () => {

    const panelNum = 3;
    let width = 1920;
    let height = 1080;

    const navigate = useNavigate();
    const [workData] = useState(WorkData);
    const [showcaseList] = useState(workData.slice(0,panelNum).map((work) => (
        <button onClick={() => {navigate("workpage", {state:{data: work}});}} key={work.id} className="showcasepanel">
            <img src={work.mainimage} alt={work.title} />
            <div className="showcaseText">{work.title}</div> 
        </button>
    )));

    function getWindowHeight() {
        height = window.innerHeight;

        let showcaseHeight = 85;
        console.log(showcaseHeight);

        document.documentElement.style.setProperty('--showcaseHeight', showcaseHeight + "vh");

    }

    function getWindowWidth() {
        width = window.innerWidth;

        var panelWidth = (width / panelNum) - 4;
        document.documentElement.style.setProperty('--showcaseWidth', width + 'px');
        document.documentElement.style.setProperty('--showcasePanelWidth', panelWidth + 'px');

    }

    useEffect(() => {

        function WindowResize() { 
            getWindowWidth();
            getWindowHeight();
        }

        window.addEventListener('resize', WindowResize);
        return () => window.removeEventListener('resize', WindowResize);
    })

    useEffect(() => {
        getWindowWidth();
        getWindowHeight();
    }, []);

    return (
        <div className="showcase">
            {showcaseList}
        </div>
     );
}
 
export default Showcase;