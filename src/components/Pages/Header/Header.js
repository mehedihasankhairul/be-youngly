import React from 'react';
import './Header.css'
import headerPic from '../../../images/shopping-3.jpg'
import { Container } from 'react-bootstrap';



const Header = () => {
    return (
        <div className="header">
            <Container>
                <div className="d-flex row  ">
                    <div className="col-md-6 justify-content-start mt-5">
                        <h1 className="text-white text-bold mt-5 pt-5"> Be Young with <br /><span className="text-danger">Be-Youngly</span>  </h1>
                        <button className="btn-brand fw-bold text-dark mt-5 shadow-lg">Buy Now</button>
                    </div>
                    <div className="col-md-6 mt-5 pt-5 mb-5 pb-5 ">
                        <img
                            className="headerImg w-100 rounded shadow-lg"
                            src={headerPic} alt="" />
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default Header;