import * as React from 'react';
import { Row, Col, Card, CardBody, CardTitle} from 'reactstrap';
import { InterFaceSkill } from './InterFaceSkill';
import PayloadData from '../../payload/skill';

type Payload = InterFaceSkill.Payload;

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
                    Skills
                </h2>
            </Col>
        </Row>
    )
}

const Contents =(data: Payload['data']) => {
    return (
        <Row className="mt-5">
            {data.map((skill, index)=> (
                <Col key={index} sm={12} className="mb-4"> 
                    <Card style={{ borderColor: "transparent" }}>
                        <CardBody>
                        <CardTitle tag="h3" className='title mb-3'>
                            {skill.title}
                        </CardTitle>
                        {skill.contents.map((contents, index) => (
                            <ul key={index}>
                                <li>
                                    {contents.text}
                                </li>
                            </ul>
                        ))}
                        </CardBody>
                    </Card>
                </Col>
            ))}
            
        </Row>
    )
}

export default Skill;