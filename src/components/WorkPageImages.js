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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
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
                                    <svg className='playcircle' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                                    <img className='smallimage' src={"https://img.youtube.com/vi/"+urlID+"/maxresdefault.jpg"} allowFullScreen alt=''></img>
                                </div>
                            );
                        }
                        return (
                            <div className="smallimagecontainer">
                                    <svg className='playcircle' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#e8eaed"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </button>
            </div>
        </div>
     );
}
 
export default WorkPageImages;