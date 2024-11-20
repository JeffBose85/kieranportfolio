import '../styles/WorkPage.css'
import { useLocation } from "react-router-dom";
import ReactHtmlParser from 'html-react-parser';
import WorkPageImages from '../components/WorkPageImages';
import WorkPageInfobox from '../components/WorkPageInfobox';

const WorkPage = () => {

    const loc = useLocation();
    const workData = loc.state.data;
    // const backgroundImage = process.env.PUBLIC_URL + "/images/background.png";
    let colors = ["dark", "med", "light"];
    let colorindex = 1;

    return (
        <div className="workpagecontainer">
            <div className="workpagesection dark">
                <div className="workpagecontent imagesection">
                    <div className='worksectionimages'>
                        <h1>{workData.title}</h1>
                        <WorkPageImages mainimage={workData.mainimage} images={workData.images} videos={workData.videos}></WorkPageImages>
                    </div>
                    <WorkPageInfobox infotitles={workData.infotitles} infodata={workData.infodata} downloadlink={workData.downloadlink}/>


                </div>
            </div>

            {workData.longdescription.map((ele) => {

                let element = ReactHtmlParser(ele);
                console.log(element);

                // if(element.type === 'p') {
                //     colorindex = (colorindex + 1) % colors.length;
                // }
                // if(element.type === 'iframe') {
                //     // console.log("video!");
                // }
                // if(element.type === 'img') {
                //     // console.log("video!");
                // }

                if(element.props.className === 'break') {
                    colorindex = (colorindex + 1) % colors.length;
                }


                // console.log(colorindex);

                let style = "workpagesection " + colors[colorindex];
                return (
                    <div className={style}>
                        <div className="workpagecontent">
                            {ReactHtmlParser(ele)}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default WorkPage;