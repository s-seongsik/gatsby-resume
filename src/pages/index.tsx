import React from "react";
import { CSSProperties } from 'react';
import { Container } from 'reactstrap';

import Profile from "../components/profile";
import "../assets/css/body.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const style: CSSProperties = {
  maxWidth:"800px"
}

const IndexPage = () => {
  return (
      <Container style={style}>
        <Profile/>
      </Container>
  );
};

export default IndexPage;