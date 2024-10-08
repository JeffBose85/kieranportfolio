import '../styles/Works.css';
import WorkData from '../data/works.json';
import { useEffect, useState } from 'react';
import WorkCard from './WorkCard';

const Works = () => {

    const [workData, setWorkData] = useState(WorkData);
    const [workList, setWorkList] = useState(workData.map((work) => (
        <WorkCard onClick={WorkClicked} key={work.id} data={work} style={"smallworkcard"}/>
    )));

    function WorkClicked() {

    }

    return ( 
    <div className="workscontainer">
        <div className="works">
            {workList}
        </div>
    </div>
    );
}
 
export default Works;