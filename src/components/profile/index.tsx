import * as React from 'react';
import { CSSProperties } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

type TStyleKey =
  | 'h1'
  | 'p'

const style: Record<TStyleKey, CSSProperties> = {
  h1 : {
    lineHeight: "1.2",
    fontSize: "4rem", 
    fontWeight: "bold",
    color:"rgb(60, 120, 216)"
  },

  p: {
    fontSize: "1.5rem",
    lineHeight: 1.2,
    fontWeight: 500,
  },
}


const Profill = () => {
  return (
    <div className="mt-5">
      <Row>
        {myName()}
        {myIntroduce()}
        {myContact()}
      </Row>
    </div>
  )
};

const myName = () => {
  return (
    <Row>
      <Col xs={12} className="text-md-left">
        <h1 style={style.h1}>🧑‍💻 안녕하세요, 
          <br></br>
          저는 서성식입니다.
        </h1>
      </Col>
    </Row>
  )
}

const myIntroduce = () => {
  const introduceData: Array<string> = [
    '3년차 웹 프론트엔드 엔지니어로 일하고 있습니다.',
    '저는 Team의 성장을 중요시 합니다. 기술의 완성도와 견고함은 동료와의 끊임없는 커뮤니케이션과 피드백에서 만들어 진다고 믿기 때문입니다.',
    '코드 리뷰와 같은 기술적 토론을 좋아하며, 개발 생태계와 개인의 성장을 위해 공부를 게을리하지 않으며 이를 기록하는 습관을 가지고 있습니다.',
    '스스로에게 끊임없이 질문을 던져 답을 구하기위해 노력하며, 상대방의 정확한 의도파악을 위해 질문하는 것을 두려워 하지 않습니다.',
    '마지막으로, 주도적으로 일할 수 있는 환경을 선호합니다.'
  ]

  const introList = introduceData.map((intro,index) => (
    <p key={index} style={style.p}>{intro}</p>
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


const myContact = () => {
  const contact:Array<Object> = [
    {
      text : 'sungsik9831@gmail.com',
      icon : faEnvelope
    },
    {
      text : 'sungsik9831@gmail.com',
      icon : faEnvelope
    },
    {
      text : 'sungsik9831@gmail.com',
      icon : faEnvelope
    }
  ];

  const contactList = contact.map((value, index)=>(
    <>
      <Row>
        <Col key={index} xs={1} className="text-md-right mt-4">
          <FontAwesomeIcon className="mr-2" icon={value.icon} />
        </Col>
        <Col key={index} xs="auto" className="text-md-left mt-4">
        <a href='https://s-seongsik.github.io/resume/'>{value.text}</a>
        </Col>
      </Row>
    </>
  ))

  return (
    <>
      {contactList}
    </>
  )
}

export default Profill;