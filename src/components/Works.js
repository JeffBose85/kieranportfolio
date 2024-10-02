import '../styles/Works.css';
import WorkData from '../data/works.json';
import { useEffect, useState } from 'react';
import WorkCard from './WorkCard';

const Works = () => {

    const [workData, setWorkData] = useState(WorkData);
    const [workList, setWorkList] = useState(workData.map((work) => (
        <WorkCard onClick={WorkClicked} key={work.id} data={work} style={"smallworkcard"}/>
    )));
    const [blur, setBlur] = useState(false);
    var newblur = false;

    function WorkClicked() {
        console.log("PARENT BANG");
        newblur = !newblur;
        setBlur(newblur);
    }

    useEffect(() => {

    });

    return ( 
    <div className="workscontainer">
        <div className="works">
            <div className="blur" style={{display: blur ? 'unset' : 'none' }}></div>
            {workList}
        </div>
    </div>
    );
}
 
export default Works;