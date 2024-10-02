import { useState } from "react";

const WorkCard = (work) => {

    const workData = work.data;
    const [cardStyle, setCardStyle] = useState(work.style);
    const [description, setDescription] = useState(workData.shortdescription);

    function WorkClicked() {
        console.log("BANG");
        if(cardStyle === "smallworkcard") { 
            setCardStyle("largeworkcard selected");
            setDescription(workData.longdescription);
            work.onClick(workData.id);
        } else {
            setCardStyle("smallworkcard");
            setDescription(workData.shortdescription);
            work.onClick();
        }
    }

    return ( 
        <button disabled={work.disableButton} onClick={WorkClicked} className={cardStyle}>
            <div className="workimagecontainer">
                <img src={process.env.PUBLIC_URL + workData.mainimage} alt="nope" />
            </div>
            <div className="workinfocontainer">
                <h1>{workData.title}</h1>
                <p>{description}</p>
            </div>
        </button>
     );
}
 
export default WorkCard;