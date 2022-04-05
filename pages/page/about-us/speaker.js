import React from 'react';
import { Container, Row, Col } from 'reactstrap'

const speaker = [
    {
        img: "../assets/images/OTF/team/team1.png",
        title: "Management Member",
        subtitle: "Designation example"
    },
    {
        img: "../assets/images/OTF/team/team2.png",
        title: "Training Coach ",
        subtitle: "Designation example"
    },
    {
        img: "../assets/images/OTF/team/team3.png",
        title: "Sales Associates",
        subtitle: "Designation example"
    },
    {
        img: "../assets/images/OTF/team/team4.png",
        title: "Management Member",
        subtitle: "Designation example"
    }
];
const Speaker = () => (
    <section className="event speaker set-relative" id="speaker">
        <Container>
            <Row>
                <Col xs="12">
                    <div className="title title2 title-inner">
                        <div className="main-title">
                            <h2 className="font-primary borders text-center m-b-0">
                                <span>Our team</span>
                            </h2>
                        </div>
                    </div>
                </Col>
                {
                    speaker.map((x, i) => (
                        <Col md="3" sm="6" className="speker-container" key={i}>
                            <div className="text-center">
                                <div className="team-img">
                                    <img alt="" className="img-fluid" src={x.img} />
                                    <div className="overlay"></div>
                                    <div className="social">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-facebook center-content"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-twitter center-content"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-google center-content"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i aria-hidden="true" className="fa fa-globe center-content"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="employee">
                                    <h5 className="e-name text-center">{x.title}</h5>
                                    <h6 className="post text-center ">{x.subtitle}</h6>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
)

export default Speaker;