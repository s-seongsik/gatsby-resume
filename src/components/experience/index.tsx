import * as React from 'react';
import { Row, Col, Card, CardGroup, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import "../../assets/css/experience/experience.scss"

const Experience = () => {
    return (
      <div className="mt-5">
        <Row>
            {Title()}
            {Contents()}
        </Row>
      </div>
    )
  };

const Title = () => {
    return (
        <Row>
            <Col xs={12} className="text-md-left">
                <h2 className='experience-h2'>
                    Experience
                </h2>
            </Col>
        </Row>
    )
}

const Contents =() => {
    return (
        <Row className="my-5">
            <Col sm={12} md={6}> 
                <Card outline>
                    <CardBody>
                    <CardTitle tag="h5">
                        Card title
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Card subtitle
                    </CardSubtitle>
                    <CardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    </CardBody>
                </Card>
            </Col>

            <Col sm={12} md={6}> 
                <CardGroup>
                    <Row>
                        <Col md={12} className="mb-2">
                            <Card>
                                <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={12} className="mb-2">
                            <Card>
                                <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card md={12}>
                                <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </CardGroup>
            </Col>
        </Row>
    )
}

export default Experience;