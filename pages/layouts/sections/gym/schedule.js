import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Schedule = () => (
    <section className="gym format bg-schedule" id="schedule"
        style={{ backgroundImage: "url('assets/images/OTF/home/health-safetybg.jpg')" }}
    >
        <Container>
            <h3 className="oftHeading">Health and Safety (It's not either/or)</h3>
            <Row>
                <Col md="6">
                    <div className="center-text">
                        <div>
                            <div className="format-sub-text">
                                <p className="p-light oftsubHeading text-white">
                                    Orangetheory is a heart-rate based HIIT total-body group workout that combines science, coaching and technology to guarantee maximum results from the inside out. It’s designed to charge your metabolism for MORE caloric afterburn, MORE results, and MORE confidence, all to deliver you MORE LIFE.  Orangetheory is more than a gym because the work you do here in our studio will make all the difference out there in your world.
                                </p>
                            </div>
                            <ul className="icon-collection">
                                <li className="about-icongym">
                                    <a className="center-content" href="#">
                                        <img alt="" className="img-fluid icons" src="/assets/images/OTF/icons/heatl1.png" />
                                    </a>
                                </li>
                                <li className="about-icongym">
                                    <a className="center-content" href="#">
                                        <img alt="" className="img-fluid icons" src="/assets/images/OTF/icons/heatl2.png" />
                                    </a>
                                </li>
                                <li className="about-icongym">
                                    <a className="center-content" href="#">
                                        <img alt="" className="img-fluid icons" src="/assets/images/OTF/icons/heatl3.png" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col md="6">
                    <div className="text-center center-content">
                        <img alt="" className="img-fluid format-img" src="/assets/images/OTF/home/health-safty.png" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Schedule;