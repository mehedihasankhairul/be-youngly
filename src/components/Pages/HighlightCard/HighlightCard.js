import React from 'react';
import './HighlightCard.css'
import { Container } from 'react-bootstrap';


const HighlightCard = () => {
    return (
        <div className=" mt-5 mb-5">
            <Container>
                <h1 className="mb-5">Popular Products</h1>
              
                    <div className="row justify-content-center">
                        {/* Card*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="single-card rounded">
                                <img
                                    // className="w-100"
                                    src="https://static.aadi.com.bd/__sized__/products/5_UltPeqs-crop-c0-5__0-5-400x500-70.jpg" alt="" />
                                <div className="text-content justify-content-center">
                                    <h4>Multi Colour Cotton Saree</h4>
                                    <p>Price : 1299 TK</p>
                                    <button className="btn-brand">Buy Now</button>
                                </div>
                            </div>
                        </div>

                        {/*Another Card*/}
                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="single-card rounded">
                                <img
                                    // className="w-100"
                                    src="https://static.aadi.com.bd/__sized__/products/5_UltPeqs-crop-c0-5__0-5-400x500-70.jpg" alt="" />
                                <div className="text-content justify-content-center">
                                    <h4>Multi Colour Cotton Saree</h4>
                                    <p>Price : 1299 TK</p>
                                    <button className="btn-brand">Buy Now</button>
                                </div>
                            </div>
                        </div>

                        {/*Another Card*/}

                        <div className="col-md-4 col-sm-6 mb-3">
                            <div className="single-card rounded">
                                <img
                                    // className="w-100"
                                    src="https://static.aadi.com.bd/__sized__/products/5_UltPeqs-crop-c0-5__0-5-400x500-70.jpg" alt="" />
                                <div className="text-content justify-content-center">
                                    <h4>Multi Colour Cotton Saree</h4>
                                    <p>Price : 1299 TK</p>
                                    <button className="btn-brand">Buy Now</button>
                                </div>
                            </div>
                        </div>

                        {/*Another Card*/}

                    </div>
             
            </Container>
        </div>
    );
};

export default HighlightCard;