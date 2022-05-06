import * as React from 'react';
import { Row, Col, Card, CardGroup, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import "../../assets/css/experience/experience.scss"

const Skill = () => {
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
                    Skill
                </h2>
            </Col>
        </Row>
    )
}

const Contents =() => {
    return (
        <Row className="my-5">
            <Col sm={12} className="mb-4"> 
                <Card outline>
                    <CardBody>
                    <CardTitle tag="h3">
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
            <Col sm={12} className="mb-4"> 
                <Card outline>
                    <CardBody>
                    <CardTitle tag="h3">
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
        </Row>
    )
}

export default Skill;