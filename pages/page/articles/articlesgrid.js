import React from 'react'
import { BlogsList } from "../../../database/blog/database"
import { Container, Row, Col } from 'reactstrap'
// import Custom Components
import CardWrapper from "../../../containers/blog/card/list-wrapper"

const Articlesgrid = ({ }) => (
    <section className="agency blog blog-sec blog-no-sidebar blog-split pt-0">
        <Container>
            <Row className="pl-0 pr-0">
                <Col lg="12">
                    <Row className="split m-0">
                        {BlogsList.length > 0 ?
                            BlogsList.map((item, index) =>
                                <CardWrapper
                                    key={`grid-no-sidebar-${index}`}
                                    className="col-12 blog-sec blog-list "
                                    image={item.image}
                                    blogDate={item.createdAt}
                                    place={item.place}
                                    title={item.title}
                                    description={item.description}
                                    readUrl={item.readUrl}
                                />
                            ) :
                            '!! No Blogs Found'}
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
)


export default Articlesgrid;