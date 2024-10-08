import { useLocation } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';

const WorkPage = () => {

    const loc = useLocation();
    const workData = loc.state.data;
    
    // var descparse = JSON.parse(JSON.stringify(workData.longdescription));
    // console.log(descparse);

    return (
        <div>
            <br/>
            <br/>
            <br/>
            {workData.id}<br/>
            {workData.title}<br/>
            {workData.shortdescription}<br/>
            {ReactHtmlParser(workData.longdescription)}<br/>
            {workData.mainimage}<br/>
            {workData.images.map((image) => {
                return (image) + " ";
            })}<br/>
            
        </div>
     );
}
 
export default WorkPage;