import * as React from 'react';
import { Row, Col, Card, CardBody, CardTitle} from 'reactstrap';
import { InterFaceOpensource } from './InterFaceOpensource';
import PayloadData from '../../payload/opensource';

type Payload = InterFaceOpensource.Payload;

const OpenSource = () => {
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
                    OpenSource
                </h2>
            </Col>
        </Row>
    )
}

const Contents =(data: Payload['data']) => {
    return (
        <Row className="mt-5">
            {data.map((ope, index)=> (
                <Col key={index} sm={12} className="mb-4"> 
                    <Card style={{ borderColor: "transparent" }}>
                        <CardBody>
                        <CardTitle tag="h3" className='title mb-3'>
                            {ope.title}
                        </CardTitle>
                        {ope.contents.map((contents, index) => (
                            <ul key={index}>
                                <li>
                                    {contents.link ? <a href={contents.link} target="_blank">{contents.text}</a> : contents.text}
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

export default OpenSource;