import * as React from 'react';
import { Row, Col, Card, CardGroup, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { InterFaceExperience } from './InterFaceExperience'
import PayloadData from '../../payload/experience';
import '../../assets/css/variable.css'

type Payload = InterFaceExperience.Payload;

const Experience = () => {
    const {data} = PayloadData;
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
                    Experience
                </h2>
            </Col>
        </Row>
    )
}

const Contents =(data: Payload['data']) => {
    const dataList = data.map((exp, index) => (
        <Row key={index} className="mt-5">
            <Col sm={12} md={6}> 
                <Card style={{ borderColor: "transparent" }}>
                    <CardBody>
                    <CardTitle tag="h3" className="title mb-3">
                        {exp.title}
                    </CardTitle>
                    <CardSubtitle className="text-muted" tag="h6">
                        {exp.position}
                        <br></br>
                        {exp.startDate} ~ {exp.endDate}
                    </CardSubtitle>
                    </CardBody>
                </Card>
            </Col>

            <Col sm={12} md={6}> 
                <CardGroup>
                    {exp.project.map((proj, index) => (
                        <Row key={index}>
                            <Col md={12} className="mb-2">
                                <Card style={{ borderColor: "transparent" }}>
                                    <CardBody>
                                    <CardTitle tag="h4" className='title mb-3'>
                                        {proj.title}
                                    </CardTitle>
                                    <CardSubtitle className="mb-3 text-muted" tag="h6">
                                        {proj.startDate} ~ {proj.endDate}
                                    </CardSubtitle>
                                    </CardBody>
                                </Card>

                                <Card style={{ borderColor: "transparent" }}>
                                    <CardBody>
                                    <CardTitle tag="h5" className='title mb-3'>
                                        프로젝트 설명
                                    </CardTitle>
                                    <CardText>
                                        {proj.description}
                                    </CardText>
                                    </CardBody>
                                </Card>

                                <Card style={{ borderColor: "transparent" }}>
                                    <CardBody>
                                    <CardTitle tag="h5" className='title mb-3'>
                                        프로젝트 역할
                                    </CardTitle>
                                    {proj.role.map((role, index)=>(
                                        <ul key={index}>
                                            <li>
                                                {role}
                                            </li>
                                        </ul>
                                    ))}
                                    </CardBody>
                                </Card>

                                <Card style={{ borderColor: "transparent" }}>
                                    <CardBody>
                                    <CardTitle tag="h5" className='title mb-3'>
                                        프로젝트 사용기술
                                    </CardTitle>
                                    <CardText>
                                        {proj.tech}
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            {index==exp.project.length-1 ? '' : <hr style={{ width: "100%" }}/>}
                        </Row>
                    ))}
                </CardGroup>
            </Col>
        </Row>
    ))

    return (
        <>
            {dataList}
        </>
    )
}

export default Experience;