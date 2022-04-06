import React from 'react';
import { Container, Row, Col } from 'reactstrap'
const About = () => (
    <section className="gym format about-detail pb-2">
        <Container>
            <Row>
                <Col md="8" className="offset-md-2">
                    <div className="center-text">
                        <div className="text-center">
                            <div className="format-head-text">
                                <h3 className="oftHeading">a little about orange theory</h3>
                            </div>
                            <div className="format-sub-text mb-5">
                                <p className="p-light oftsubHeading text-center">
                                    Orangetheory is a 1 hour, full body workout, focused on training Endurance, Strength and/or Power. We use Heart Rate Based Interval Training, which burns more calories post workout than a traditional exercise. When wearing our Heart Rate monitors, your real time results are displayed on large screens throughout the studio. Intensity is based on your individual Heart Rate zones, making the workout effective for all fitness levels. To top it off, our fitness coaches to lead the workout to prevent you from over or under training.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="contenedor justify-content-center">
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>Our Mission</h2>
                        <p>Aliquam felis augue non nisl morbi elit. Eu pharetra, scelerisque varius amet vulputate porta vitae. Facilisi.</p>
                    </article>
                    <img src="/assets/images/OTF/about/vision.png" alt="" />
                </Col>
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>Our Vision</h2>
                        <p>Vitae quisque facilisis vel aliquam dolor enim ut risus. Diam aliquam faucibus semper habitasse parturient.</p>
                    </article>
                    <img src="/assets/images/OTF/about/vision.png" alt="" />
                </Col>
                <Col sm={4} className="container_foto">
                    <article className="text-left">
                        <h2>Our Values</h2>
                        <p>Molestie dui posuere amet, nunc, placerat. Ullamcorper at ultrices lorem malesuada arcu nisi.</p>
                    </article>
                    <img src="/assets/images/OTF/about/vision.png" alt="" />
                </Col>
            </Row>
        </Container >
    </section >
)

export default About;