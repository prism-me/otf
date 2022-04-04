import React, { Fragment } from 'react'
import { Container, Row, Col } from 'reactstrap'
const Footer = () => (
    <Fragment>
        <footer className="gym footer2">
            <Container>
                <Row>
                    <Col lg="3" md="3" sm="12" className="set-first">
                        <div className="logo-sec">
                            <div className="footer-contant">
                                <img alt="" className="img-fluid footer-logo" src="/assets/images/OTF/logo/footer_logo.png" />
                                <ul className="d-flex footer-social social">
                                    <li className="footer-social-list">
                                        <a href="#">
                                            <i aria-hidden="true" className="fa fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="#">
                                            <i aria-hidden="true" className="fa fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="#">
                                            <i aria-hidden="true" className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li className="footer-social-list">
                                        <a href="#">
                                            <i aria-hidden="true" className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="footer-contant">
                            <div>
                                <ul className="footer-lists">
                                    <li>
                                        <a href="#">Select You Locations</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Mission, Vision, & Values</a>
                                    </li>
                                    <li>
                                        <a href="#">Press</a>
                                    </li>
                                    <li>
                                        <a href="#">Franchisees</a>
                                    </li>
                                    <li>
                                        <a href="#">International Opportunities</a>
                                    </li>
                                    <li>
                                        <a href="#">Jobs</a>
                                    </li>
                                    <li>
                                        <a href="#">Articles</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="footer-contant">
                            <div>
                                <ul className="footer-lists">
                                    <li>
                                        <a href="#">Shop</a>
                                    </li>
                                    <li>
                                        <a href="#">Customer Service</a>
                                    </li>
                                    <li>
                                        <a href="#">Real Estate</a>
                                    </li>
                                    <li>
                                        <a href="#">Promotion Terms</a>
                                    </li>
                                    <li>
                                        <a href="#">Do not sell my information</a>
                                    </li>
                                    <li>
                                        <a href="#">Global Studios</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg="3" md="3" sm="12">
                        <div className="footer-para">
                            <p className="para-address">
                                <i aria-hidden="true" className="fa fa-map-marker mr-2"></i>
                                <strong>
                                    Orangetheory Fitness
                                    Mercato Mall - Level 1
                                </strong>
                                <br />
                                <span style={{ fontWeight: "300" }}>
                                    Jumeirah Beach Road, Dubai
                                    United Arab Emirates
                                </span>
                            </p>
                            <p className="para-address mt-2">
                                <i aria-hidden="true" className="fa fa-phone mr-2"></i>
                                <a href='tel:+9714 340 1040'>
                                    +9714 340 1040
                                </a>
                            </p>
                            <p className="para-address mt-3">
                                <i aria-hidden="true" className="fa fa-map-marker mr-2"></i>
                                <strong>
                                    Times Square Centre - Ground Floor
                                </strong>
                                <br />
                                <span style={{ fontWeight: "300" }}>
                                    Sheikh Zayed Road, Dubai
                                    United Arab Emirates
                                </span>
                            </p>
                            <p className="para-address mt-2">
                                <i aria-hidden="true" className="fa fa-phone mr-2"></i>
                                <a href='tel:+9714 340 1040'>
                                    +9714 340 1040
                                </a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
        <div className="gym copyright text-center">
            <Container>
                ©<a className="copyright-text" href="/">Orangetheoryfitness</a> | <a className="copyright-text " href="#">Terms of use </a> | <a className="copyright-text" href="#">Privacy Policy</a> | Designed and Managed by <a className="copyright-text" href="https://www.prism-me.com/" target={"_blank"}>Prism Digital.</a>
            </Container>
        </div>
    </Fragment>
)


export default Footer;