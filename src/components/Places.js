import React, { Component } from 'react';
import PropTypes from 'prop-types';
import img1 from '../images/4.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/5.jpg';
import img5 from '../images/6.jpeg';
import '../custom.scss';
const style={
    maxWidth : 80,
    maxHeight: 80,
    position: "absolute"
}
class Places extends Component {
    
    render() {
        return (
            <div className="img-wrapper">
                <img style={Object.assign({},style, this.props.styles) } src={this.props.srce} className="hover-zoom"></img>
            </div>
        )
    }
}
Places.propTypes = {
    details: PropTypes.object.isRequired,
  };
export default Places;
