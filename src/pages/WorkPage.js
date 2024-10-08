import { useLocation } from "react-router-dom";

const WorkPage = () => {

    const loc = useLocation();
    const workData = loc.state.data;

    console.log(workData);

    return (
        <div>
            <br/>
            <br/>
            <br/>
            {workData.id}<br/>
            {workData.title}<br/>
            {workData.shortdescription}<br/>
            {workData.longdescription}<br/>
            {workData.mainimage}<br/>
            {workData.images.map((image) => {
                return (image) + " ";
            })}<br/>
            
        </div>
     );
}
 
export default WorkPage;