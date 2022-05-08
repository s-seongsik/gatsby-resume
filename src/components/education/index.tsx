import * as React from 'react';
import { Row, Col, Card, CardBody, CardTitle} from 'reactstrap';
import { InterFaceEducation } from './InterFaceEducation';
import PayloadData from '../../payload/education';

type Payload = InterFaceEducation.Payload;

const Skill = () => {
    const { data } = PayloadData;
    return (
      <div className="mt-5">
        <Row>
            {Title()}
            {Contents(data)}
        </Row>
      </div>
    )
  };

const Title = () => {
    return (
        <Row>
            <Col xs={12} className="text-md-left">
                <h2 className='title'>
                    Education
                </h2>
            </Col>
        </Row>
    )
}

const Contents =(data: Payload['data']) => {
    return (
        <Row className="mt-5">
            {data.map((education, index)=> (
                <Col key={index} sm={12} className="mb-4"> 
                    <Card style={{ borderColor: "transparent" }}>
                        <CardBody>
                        <CardTitle tag="h3" className='title mb-3'>
                            {education.title} 
                        </CardTitle>
                        <h5 style={{color:"gray"}}>{education.subtitle} </h5>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            
        </Row>
    )
}

export default Skill;