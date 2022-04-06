import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Benefits = ({ benefitList }) => (
    <section className="gym benefit rightAnimation" id="plan">

        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <h3 className="oftHeading text-dark">Membership Benefits</h3>
            <Row>
                {
                    benefitList.map((x, i) => (
                        <Col lg="4" md="4" className="offset-md-2 offset-lg-0" key={i}>
                            <div>
                                <center>
                                    <img src={x.img} alt="img"
                                        style={{
                                            padding: "1.5rem",
                                            border: "1px solid #F58220",
                                            borderRadius: "100%",
                                            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.14)",
                                            width: "110px"
                                        }}
                                    />
                                </center>
                            </div>
                            <p className='p-light oftsubHeading text-center mt-3'>
                                {
                                    x.title
                                }
                            </p>
                        </Col>
                    ))
                }
            </Row>
            <center>
                <button className='otfBtn1 mt-5 px-5'
                    style={{ border: "1px solid #F58220" }}
                >
                    Avail now
                </button>
                <p className='p-light mt-2'><small>*Available once pandemic restrictions are lifted.</small></p>
            </center>
        </Container>
    </section>
)


export default Benefits;