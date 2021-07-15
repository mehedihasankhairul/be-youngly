import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer id="footer" className="">
            <div className="footer-top">
                <div className="container">
                    <Zoom clear>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>ShopKpr<span></span></h3>
                                <p>
                                    1181,Nurerchala Main Road. <br />
                                    East Baridhara,Vatara<br />
                                    Dhaka -1212, Bangladesh <br />

                                    <br />
                                    <strong>Phone:</strong> +88 01612-201602<br />
                                    <strong>Email:</strong> Shopkpr1@gmail.com<br />
                                </p>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Stay With ShopKpr</h4>
                                <ul>
                                    <li><i className="fas fa-angle-right"></i> <Link to="/">Home</Link></li>
                                    <li><i className="fas fa-angle-right"></i> <Link to="/about">About us</Link></li>
                                    <li><i className="fas fa-angle-right"></i> <Link to="/">Services</Link></li>
                                    <li><i className="fas fa-angle-right"></i> <Link to="/">Career</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>ShopKpr</h4>
                                <ul>
                                    <li><i className="fas fa-angle-right"></i> <Link to="/">Terms and Conditions</Link></li>
                                    <li><i className="fas fa-angle-right"></i> <Link to="/">Privacy policy</Link></li>
                                    <li><i className="fas fa-angle-right"></i> <Link to="/">Return Policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links pt-5">
                                <h4 className="common-font text-center p-0">Our Social Networks</h4>

                                <div className="social-links mt-3 text-center">
                                    <a rel="noopener noreferrer" href="/#" className="twitter"><i className="fab fa-twitter"></i></a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/Shopkpr.xyz" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                    <a rel="noopener noreferrer" href="/#" className="instagram"><i className="fab fa-instagram"></i></a>
                                    <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/company/shopkpr" className="linkedin"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>

            <Fade bottom>
                <div className="container d-flex justify-content-center align-items-center py-4">
                    <div className="copyright text-center">
                        &copy; 2020 - {(new Date().getFullYear())} Copyright <strong><span>ShopKpr Technologies Pvt. Ltd</span></strong>. All Rights Reserved
                    </div>
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;