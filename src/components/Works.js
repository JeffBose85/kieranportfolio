import '../styles/Works.css';
import WorkData from '../data/works.json';
import { useState } from 'react';
import WorkCard from './WorkCard';

const Works = () => {

    const style = ["smallworkcard"];
    const [workData] = useState(WorkData);
    const [workList] = useState(workData.map((work) => (
        <WorkCard onClick={WorkClicked} key={work.id} data={work} style={style}/>
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