import React from "react";
import '../../src/custom.scss'

const Footer = () => {
  return (
        <div className="container footer">
            <div className="row">
                <div className="col-md" style={{padding: 60}}>
                    <h2>Visit Albania</h2>
                </div>
                <div className="col-md" style={{padding: 20}}>
                    <h3>Pages</h3>
                    <ul className="list-unstyled">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div className="col-md" style={{padding: 20}}>
                <h3>Details:</h3>
                    <ul className="list-unstyled">
                        <li>Phone Number</li>
                        <li>Address</li>
                        <li>Email</li>
                    </ul>
                </div>
                
            </div>
            <div className="row">
            <div className="col-sm ">
                    &copy;{new Date().getFullYear()}| Visit Albania | All Rights Reserved | Privacy
                </div>
            </div>
        </div>
  );
}

export default Footer;