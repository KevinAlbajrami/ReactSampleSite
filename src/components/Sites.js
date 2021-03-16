import react from 'react';
import bi from '../images/map.png';
import Places from './Places';

class Sites extends react.Component{
    render(){
        return(
            <div style={{backgroundImage: "url(" + bi + ")"}}>
                <img src={bi}></img>
                <Places srce='./4.jpg' styles={{top: 540, left:550}}/> 
                <Places srce='./5.jpg' styles={{top: 1040, left:550}}/>
                <Places srce='./6.jpeg' styles={{top: 880, left:400}}/>
                <Places srce='./7.jpg' styles={{top: 240, left:600}}/>
                <Places srce='./8.jpg' styles={{top: 400, left:700}}/>
                <Places srce='./9.jpg' styles={{top: 800, left:600}}/>
            </div>
        )
    }
}

export default Sites;