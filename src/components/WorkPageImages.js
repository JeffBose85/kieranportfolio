import '../styles/WorkPage.css'
import { useEffect, useState } from "react";

const WorkPageImages = (images) => {

    let [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [imageGallery, setImageGallery] = useState([images.mainimage, ...images.images]);
    let [selectedImage, setSelectedImage] = useState(imageGallery[selectedImageIndex]);

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
            setSelectedImage(imageGallery[selectedImageIndex]);
        }
    }

    function handleClickRight() {
        if(imageEnd < imageGallery.length) {
            setImageEnd(imageEnd += 1);
            setImageStart(imageStart += 1);
        }
        if(selectedImageIndex < imageGallery.length - 1) {
            setSelectedImageIndex(selectedImageIndex += 1);
            setSelectedImage(imageGallery[selectedImageIndex]);
        } 
    }

    function imageClick(index) {
        
        // if(index === 0) {
        //     console.log("LEFT")
        //     setImageStart(0)
        //     setImageEnd(imageCount);
        // } else if(index === imageGallery.length - 1) {
        //     console.log("RIGHT");
        //     setImageEnd(imageGallery.length - 1);
        //     setImageStart(imageEnd - imageCount);
        // } else {
        //     console.log("MIDDLE");
        //     setImageStart(index - 1);
        //     setImageEnd(imageStart + imageCount - 1);
        // }
        
        setSelectedImageIndex(index);
        setSelectedImage(imageGallery[index]);

    }


    return ( 
        <div className="imagegallery">
            <div className="mainimagecontainer">
                <img key={selectedImage+selectedImageIndex} src={selectedImage} alt="" className="mainimage" />
            </div>
            <div className="imagescroller">
                <button onClick={handleClickLeft} className="imageleft">&#8592;</button>
                {imageGallery.slice(imageStart, imageEnd).map((image, index) => {
                    if(image === imageGallery[selectedImageIndex]){
                        return (
                            <div className="smallimagecontainer">
                                <img className='smallimage selectedimage' key={imageStart + index} src={image} alt=''/>
                            </div>
                        );
                    }
                    return (
                        <div className="smallimagecontainer">
                            <img onClick={() => imageClick(imageStart + index)} className='smallimage' key={imageStart + index} src={image} alt=''/>
                        </div>
                    );
                })}
                <button onClick={handleClickRight} className="imageright">&#8594;</button>
            </div>
        </div>
     );
}
 
export default WorkPageImages;