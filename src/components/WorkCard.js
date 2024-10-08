import { useState } from "react";
import { useNavigate } from "react-router-dom";

const WorkCard = (work) => {

    const workData = work.data;
    const [cardStyle, setCardStyle] = useState(work.style);
    const [description, setDescription] = useState(workData.shortdescription);

    const navigate = useNavigate();

    function WorkClicked() {
        var id = workData.id;

        navigate("workpage", {state:{data: workData}});
    }

    return ( 
        <button onClick={WorkClicked} className={cardStyle}>
            <div className="imageblur"></div>
            <div className="workimagecontainer">
                <img src={process.env.PUBLIC_URL + workData.mainimage} alt="" />
            </div>
            <div className="workinfocontainer">
                <h1>{workData.title}</h1>
                <hr></hr>
                <p>{description}</p>
            </div>
        </button>
     );
}
 
export default WorkCard;