import React from 'react';
import './CarouselData.css';
import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap';

const CarouselData = () => {
    return (

        <div className="imageSlider  justify-content-center align-items-center5">
            <Container>
                <div className="d-flex row mt-5 mb-5">
                    <div className="col-md-4 shadow-lg p-2 rounded">
                        <img
                            className="w-100 h-100 rounded "
                            src="https://envato-shoebox-0.imgix.net/e718/f169-446b-11e4-ace4-b8ca3a6774f8/_L9A8103-Edit-Edit-Edit-Edit.jpg?auto=compress&crop=edges&fit=crop&fm=jpeg&h=800&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1200&s=0c43e19997b4c09f9b0e8e204c17a52c" alt="" />
                    </div>
                    <div className="col-md-8">
                        <Carousel className=" shadow-lg m-1 rounded">
                            <Carousel.Item>
                                <img
                                    // style={{ height: '300px' }}
                                    className="slideImage w-100 rounded"
                                    src="https://fizzymag.com/uploads/article/inside_top_image/ce92ebcc-9570-4277-9518-cf454879c5dc/simply-be-best-plus-size-shop.gif"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className=" align-items-start text-dark">
                                        <h1>Get Your Product with Free Delivery </h1>
                                        <button className="btn-brand"> Buy Now</button>
                                    </div>


                                </Carousel.Caption>
                            </Carousel.Item>
                            {/*2nd item*/}
                            <Carousel.Item>
                                <img
                                    // style={{ height: '300px' }}
                                    className="slideImage w-100 rounded"
                                    src="https://static.onecms.io/wp-content/uploads/sites/23/2011/09/27/green-dress-nordstrom-1.jpg"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className=" align-items-start text-dark">
                                        <h1>Get Your Product with Free Delivery </h1>
                                        <button className="btn-brand"> Buy Now</button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            {/*3rd item*/}
                            <Carousel.Item>
                                <img
                                    // style={{ height: '300px' }}
                                    className="slideImage w-100 rounded"
                                    src="https://hips.hearstapps.com/rbk.h-cdn.co/assets/15/34/1600x800/landscape-1440078927-rbk-50-dresses-body-confidence.jpg?resize=640:*"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <div className=" align-items-start text-dark">
                                        <h1>Get Your Product with Free Delivery </h1>
                                        <button className="btn-brand"> Buy Now</button>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default CarouselData;
