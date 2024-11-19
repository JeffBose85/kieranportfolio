import '../styles/WorkPage.css'
import { useState } from "react";

const WorkPageImages = (props) => {

    let [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [gallery] = useState([props.mainimage,...props.videos, ...props.images]);
    let [selectedImage, setSelectedImage] = useState(gallery[selectedImageIndex]);

    const [imageCount] = useState(3);
    let [imageStart, setImageStart] = useState(0);
    let [imageEnd, setImageEnd] = useState(imageStart + imageCount);

    function handleClickLeft() {
        if(imageStart > 0) {
            setImageStart(imageStart -= 1);
            setImageEnd(imageEnd -= 1);
        }
        if(selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex -= 1);
            setSelectedImage(gallery[selectedImageIndex]);
        }
    }

    function handleClickRight() {
        if(imageEnd < gallery.length) {
            setImageEnd(imageEnd += 1);
            setImageStart(imageStart += 1);
        }
        if(selectedImageIndex < gallery.length - 1) {
            setSelectedImageIndex(selectedImageIndex += 1);
            setSelectedImage(gallery[selectedImageIndex]);
        } 
    }

    function imageClick(index) {
        setSelectedImageIndex(index);
        setSelectedImage(gallery[index]);
    }

    function getMainImage() {
        if(props.videos.includes(selectedImage)) {
            return (
                <iframe key={"video_" + selectedImage} src={selectedImage} allowFullScreen className="mainimage"/>
            );
        }
        if(props.images.includes(selectedImage) || props.mainimage.includes(selectedImage)) {
            return (
                <img key={"image_" + selectedImage} src={selectedImage} alt="" className="mainimage" />
            );
        }
    }


    return ( 
        <div className="imagegallery">
            <div className="mainimagecontainer">
                {getMainImage()}
            </div>
            <div className="imagescroller">
                <button onClick={handleClickLeft} className="gallerybtn imageleft">
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                {gallery.slice(imageStart, imageEnd).map((image, index) => {

                    if(props.videos.includes(image)) {

                        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
                        var match = image.match(regExp);
                        let urlID = (match&&match[7].length===11)? match[7] : false;

                        // console.log(image);
                        // console.log(urlID);


                        if(image === gallery[selectedImageIndex]){
                            return (
                                <div className="smallimagecontainer selectedimage">
                                    <span className="material-symbols-outlined playcircle">play_circle</span>
                                    <img className='smallimage' src={"https://img.youtube.com/vi/"+urlID+"/maxresdefault.jpg"} allowFullScreen alt=''></img>
                                </div>
                            );
                        }
                        return (
                            <div className="smallimagecontainer">
                                    <span className="material-symbols-outlined playcircle">play_circle</span>
                                    <img onClick={() => imageClick(imageStart + index)} className='smallimage' src={"https://img.youtube.com/vi/"+urlID+"/maxresdefault.jpg"} allowFullScreen alt=''></img>
                            </div>
                        );
                    }
                    if(props.images.includes(image) || props.mainimage.includes(image)) {
                        if(image === gallery[selectedImageIndex]){
                            return (
                                <div className="smallimagecontainer selectedimage">
                                    <img className='smallimage' key={imageStart + index} src={image} alt=''/>
                                </div>
                            );
                        }
                        return (
                            <div className="smallimagecontainer">
                                <img onClick={() => imageClick(imageStart + index)} className='smallimage' key={imageStart + index} src={image} alt=''/>
                            </div>
                        );
                    }
                    return (
                        <div>Image failed to load.</div>
                    );
                })}
                <button onClick={handleClickRight} className="gallerybtn imageright">
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
            </div>
        </div>
     );
}
 
export default WorkPageImages;