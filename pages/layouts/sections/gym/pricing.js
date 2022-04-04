import React from 'react'
import PricingFive from '../../../elements/price/element/price5';
import { Container, Row, Col } from 'reactstrap'
const Pricing = () => (
    <section className="gym pricing set-relative" id="plan">
        <Container>
            <Row>
                <Col md="10" className="offset-md-1">
                    <h2 className="oftHeading text-dark">Let’s talk memberships</h2>
                </Col>
                <PricingFive />
            </Row>
        </Container>
    </section>
)


export default Pricing;