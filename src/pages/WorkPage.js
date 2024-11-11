import '../styles/WorkPage.css'
import { useLocation } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import WorkPageImages from '../components/WorkPageImages';

const WorkPage = () => {

    const loc = useLocation();
    const workData = loc.state.data;
    const backgroundImage = process.env.PUBLIC_URL + "/images/background.png";

    return (
        <div className="workpagecontainer">
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