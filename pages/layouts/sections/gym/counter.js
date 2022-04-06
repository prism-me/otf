import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Counter = () => (
    <section className="gym counter rightAnimation  bg-img3 bg1"
        style={{ backgroundImage: "url('/assets/images/OTF/home/get-off.jpg')" }}
    >
        <div className="animated-bg"><i></i><i></i><i></i></div>

        <Container>
            <div className="text-center">
                <h3 className="text-white oftHeading mb-4">Get 10% off during this festive season!</h3>
                <p className="p-light text-white text-center mb-5 oftsubHeading">
                    Senectus viverra laoreet proin eget. Ullamcorper in lorem nisl aliquet orci enim vel, a. Ut quis luctus massa.
                </p>
                <a className="otfBtn1" href="#">BOOK YOUR SESSIONS NOW!</a>
            </div>
        </Container>
    </section>
)


export default Counter;