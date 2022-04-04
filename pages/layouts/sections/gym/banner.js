import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const sliderData = [
    {
        bannerImg: "assets/images/OTF/banner/homeBannerSlider.jpg",
        title: "The Smartest Workout for More Results",
        detail: "Aliquet nullam cursus mollis donec imperdiet enim viverra. A ac tincidunt mollis sit sed placerat diam bibendum porta. Egestas nisl viverra arcu faucibus.",
        btn1: "book class now",
        btn2: "view membership details"
    },
    {
        bannerImg: "assets/images/OTF/banner/homeBannerSlider.jpg",
        title: "The Smartest Workout for More Results",
        detail: "Aliquet nullam cursus mollis donec imperdiet enim viverra. A ac tincidunt mollis sit sed placerat diam bibendum porta. Egestas nisl viverra arcu faucibus.",
        btn1: "book class now",
        btn2: "view membership details"
    }
];

const Banner = () => (
    <section className="gym header" id="home">
        <div className="header5-content">
            <Slider className="default-dots gym-slider" id="gym-slider" {...settings}>
                {
                    sliderData.map((x, i) => (
                        <div className="item" key={i}>
                            <div className="gym-header bg"
                                style={{ backgroundImage: `url(${x.bannerImg})` }}
                            >
                                <Container>
                                    <Row>
                                        <Col md="10" className="offset-md-1">
                                            <div className="center-text">
                                                <div className="text-center">
                                                    <div className="header-text bold-text">
                                                        <h1>{x.title}</h1>
                                                    </div>
                                                    <div className="header-sub-text">
                                                        <p className="text-white p-light">
                                                            {x.detail}
                                                        </p>
                                                    </div>
                                                    <div className="link-horizontal">
                                                        <ul className="justify-content-center">
                                                            <li>
                                                                <a className=" btn btn-default">
                                                                    {x.btn1}
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className=" btn btn-default">
                                                                    {x.btn2}
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    )
                    )
                }
            </Slider>
        </div>
    </section>
)


export default Banner;