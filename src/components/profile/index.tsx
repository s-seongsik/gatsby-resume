import * as React from 'react';
import { Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InterFaceProfile } from './InterFaceProfile'
import PayloadData from '../../payload/profile';
import '../../assets/css/variable.css'

type Payload = InterFaceProfile.Payload;

const Profile = () => {
  const {name, intro, contact} = PayloadData;
  return (
    <div className="my-5">
      <Row>
        {myName(name)}
        {myIntroduce(intro)}
        {myContact(contact)}
      </Row>
    </div>
  )
};

const myName = (name: Payload['name']) => {
  const nameList = name.map((name, index)=>(
    <h1 className='title' key={index}> {name} </h1>
  ))
  
  return (
    <Row>
      <Col xs={12} className="text-md-left">
        {nameList}
      </Col>
    </Row>
  )
}

const myIntroduce = (intro: Payload['intro']) => {
  const introList = intro.map((intro,index) => (
    <p key={index} className="profile-paragraph">{intro}</p>
    )
  )
  
  return (
    <Row>
      <Col xs={12} className="text-md-left mt-5">
          {introList}
      </Col>
    </Row>
  )
}


const myContact = (contact: Payload['contact']) => {
  
  const contactList = contact.map((value, index)=>(
    <Row key={index}>
      <Col xs={1} className="text-md-right mt-4">
        <FontAwesomeIcon className="mr-2" icon={value.icon} />
      </Col>
      <Col xs="auto" className="text-md-left mt-4">
      <a href={value.link}>{value.text}</a>
      </Col>
    </Row>
  ))

  return (
    <>
      {contactList}
    </>
  )
}

export default Profile;