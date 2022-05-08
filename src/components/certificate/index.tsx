import * as React from 'react';
import { Row, Col, Card, CardBody, CardTitle} from 'reactstrap';
import { InterFaceCertificate } from './InterFaceCertificate';
import PayloadData from '../../payload/certificate';

type Payload = InterFaceCertificate.Payload;

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
                    Certificate
                </h2>
            </Col>
        </Row>
    )
}

const Contents =(data: Payload['data']) => {
    return (
        <Row className="mt-5">
            {data.map((certificate, index)=> (
                <Col key={index} sm={12} className="mb-4"> 
                    <Card style={{ borderColor: "transparent" }}>
                        <CardBody>
                        <CardTitle tag="h3" className='title mb-3'>
                            {certificate.title} 
                        </CardTitle>
                        <h5 style={{color:"gray"}}>{certificate.date} </h5>
                        </CardBody>
                    </Card>
                </Col>
            ))}
            
        </Row>
    )
}

export default Skill;