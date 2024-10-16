import '../styles/WorkPage.css'
import { useLocation } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import WorkPageImages from '../components/WorkPageImages';

const WorkPage = () => {

    const loc = useLocation();
    const workData = loc.state.data;

    return (
        <div className="workpagecontainer">
            {/* <br/>
            <br/>
            <br/>
            {workData.id}<br/>
            {workData.title}<br/>
            {workData.shortdescription}<br/>
            {ReactHtmlParser(workData.longdescription)}<br/>
            {workData.mainimage}<br/>
            {workData.images.map((image) => {
                return (image) + " ";
            })}<br/> */}

            <div className="workpage">
                <h1>{workData.title}</h1>
                <WorkPageImages mainimage={workData.mainimage} images={workData.images} videos={workData.videos}></WorkPageImages>
                <hr></hr>
                <div className="workpagedescription">{ReactHtmlParser(workData.longdescription)}</div>
            </div>
        </div>
     );
}
 
export default WorkPage;