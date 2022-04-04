import React from 'react'
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 420,
            settings: {
                slidesToShow: 1,
                centerPadding: '65px',
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
};


const testimonial = [
    {
        img: "/assets/images/OTF/testimonial/testimonial1.png",
        title: "Client name example",
        subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
    },
    {
        img: "/assets/images/OTF/testimonial/testimonial2.png",
        title: "Client name example",
        subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
    },
    {
        img: "/assets/images/OTF/testimonial/testimonial3.png",
        title: "Client name example",
        subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
    },
    {
        img: "/assets/images/OTF/testimonial/testimonial4.png",
        title: "Client name example",
        subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
    },
    {
        img: "/assets/images/OTF/testimonial/testimonial5.png",
        title: "Client name example",
        subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
    },
    {
        img: "/assets/images/OTF/testimonial/testimonial6.png",
        title: "Client name example",
        subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
    },
    {
        img: "/assets/images/OTF/testimonial/testimonial7.png",
        title: "Client name example",
        subtitle: "Lorem ipsum dolor amit set lorem ipsum dolor amit.."
    }
]

const Trainer = () => (
    <section className="gym trainers">
        <Container className="overflow-hide">
            <h3 className="oftHeading text-dark mb-0">Testimonials</h3>
            <Row>
                <Col xs="12">
                    <Slider className="owl-carousel owl-theme trainers-slider" id="trainers-slider" {...settings}>
                        {
                            testimonial.map((x, i) => (
                                <div className="item" key={i}>
                                    <img alt="" className="img-fluid" src={x.img} />
                                    <div className="text-center trainers-info">
                                        <h4 className=" mb-2">
                                            {
                                                x.title
                                            }
                                        </h4>
                                        <p className="p-light text-center">
                                            {
                                                x.subtitle
                                            }
                                        </p>
                                        {/* <div className="socials-lists">
                                        <ul className="socials-horizontal justify-content-center">
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
                                                    <i aria-hidden="true" className="fa fa-instagram center-content"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div> */}
                                    </div>
                                </div>
                            ))
                        }

                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Trainer;