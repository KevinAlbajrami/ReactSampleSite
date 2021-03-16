import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from '../images/5.jpg';
import image2 from '../images/6.jpeg';
import image3 from '../images/4.jpg'
import '../custom.scss';
import Button from '@material-ui/core/Button';
const fadeImages = [
  image,
  image2,
  image3
];
const mystyle = {
  color: "white",
  fontWeight: "bold",
  fontFamily: "Arial"
};
const Slideshow = () => {
  return (
    <div className="slide-container centered">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} className="photo"/>
            <h2 className="txt txtimg">The Adventure Awaits 
            </h2>
            <p className="btntxt txtimg">            
              <Button size='medium'>
                <p style={mystyle}>LEARN MORE</p>
            </Button></p>
            
          </div>
          
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} className="photo"/>
          </div>
          
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} className="photo" />
          </div>
          
        </div>
      </Fade>
    </div>
  )
}

export default Slideshow;