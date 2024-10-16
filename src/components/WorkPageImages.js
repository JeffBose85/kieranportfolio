import { renderToString } from 'react-dom/server';
import '../styles/WorkPage.css'
import { useEffect, useState } from "react";

const WorkPageImages = (images) => {

    let [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [gallery, setGallery] = useState([images.mainimage,...images.videos, ...images.images]);
    let [selectedImage, setSelectedImage] = useState(gallery[selectedImageIndex]);

    const [imageCount, setImageCount] = useState(3);
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

    function imageOrVideo(path) {
        if(images.videos.includes(path)) {
            return "video";
        } else if(images.images.includes(path) || images.mainimage.includes(path)) {
            return "image";
        }
        return -1;
    }

    function getMainImage() {
        if(images.videos.includes(selectedImage)) {
            return (
                <iframe src={selectedImage} allowfullscreen className="mainimage"/>
            );
        }
        if(images.images.includes(selectedImage) || images.mainimage.includes(selectedImage)) {
            return (
                <img key={selectedImage} src={selectedImage} alt="" className="mainimage" />
            );
        }
    }


    return ( 
        <div className="imagegallery">
            <div className="mainimagecontainer">
                {getMainImage()}
            </div>
            <div className="imagescroller">
                <button onClick={handleClickLeft} className="gallerybtn imageleft">&#8592;</button>
                {gallery.slice(imageStart, imageEnd).map((image, index) => {

                    if(images.videos.includes(image)) {

                        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
                        var match = image.match(regExp);
                        let urlID = (match&&match[7].length==11)? match[7] : false;

                        console.log(image);
                        console.log(urlID);


                        if(image === gallery[selectedImageIndex]){
                            return (
                                <div className="smallimagecontainer selectedimage">
                                    <span class="material-symbols-outlined">play_circle</span>
                                    <img className='smallimage' src={"https://img.youtube.com/vi/"+urlID+"/maxresdefault.jpg"} allowFullScreen></img>
                                </div>
                            );
                        }
                        return (
                            <div className="smallimagecontainer">
                                    <span class="material-symbols-outlined">play_circle</span>
                                    <img onClick={() => imageClick(imageStart + index)} className='smallimage' src={"https://img.youtube.com/vi/"+urlID+"/maxresdefault.jpg"} allowFullScreen></img>
                            </div>
                        );
                    }
                    if(images.images.includes(image) || images.mainimage.includes(image)) {
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
                })}
                <button onClick={handleClickRight} className="gallerybtn imageright">&#8594;</button>
            </div>
        </div>
     );
}
 
export default WorkPageImages;