import React from 'react';
import './Products.css';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Products = () => {
    return (
        <div className="text-center row mb-5">
            <h1>Our all Highlighted Products</h1>
            <Container>
                <Fade bottom duration={2500} distance="40px">
                    <div className=" d-flex">

                        <div className='container-fluid row'>
                            <div className="card mx-auto col-md-3 mt-5"> <img className='mx-auto img-thumbnail' src="https://i.imgur.com/pjITBzX.jpg" alt="" width="auto" height="auto" />
                                <div className="card-body text-center mx-auto">
                                    <div className='cvp'>
                                        <h5 className="card-title font-weight-bold">Yail wrist watch</h5>
                                        <p className="card-text">$299</p> <a href="/" className="btn details px-auto">view details</a><br /> <a href="/" className="btn cart px-auto">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container-fluid'>
                            <div className="card mx-auto col-md-3  mt-5"> <img className='mx-auto img-thumbnail' src="https://i.imgur.com/pjITBzX.jpg" alt="" width="auto" height="auto" />
                                <div className="card-body text-center mx-auto">
                                    <div className='cvp'>
                                        <h5 className="card-title font-weight-bold">Yail wrist watch</h5>
                                        <p className="card-text">$299</p> <a href="/" className="btn details px-auto">view details</a><br /> <a href="/" className="btn cart px-auto">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Container>
        </div>
    );
};

export default Products;