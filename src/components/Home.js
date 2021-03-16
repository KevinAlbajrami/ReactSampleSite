import '../../src/App.css'
import React, {Component} from 'react';
import Slideshow from './Slider';
import ImgMediaCard from './ImgMediaCard';
import Text from './Text';
import Footer from './Footer'
class Home extends Component {
  render(){
  return (
    
    <div className="App">
      
      <Slideshow/>  
      <Text />
      <div class="flexbox-container" >
        <div style={{padding:5}}><ImgMediaCard name='./8.jpg' text="Adventure" details="A country that boasts wild ecosystems"/></div>
        <div style={{padding:5}}><ImgMediaCard name='./9.jpg' text="History" details="People that have transcended time"/></div>
        <div style={{padding:5}}><ImgMediaCard name='./7.jpg' text="Riviere" details="Waters as blue as the sky"/></div>
        <div style={{padding:5}}><ImgMediaCard name='./5.jpg' text="Leisure" details="Good coffee, friendly hosts"/></div>
        <div style={{padding:5}}><ImgMediaCard name='./4.jpg' text="Culture" details="Where the modern and the traditional clash"/></div>
      </div>
      
    </div>
  );
  }
}

export default Home;
