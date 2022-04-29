import React from "react";
import { CSSProperties } from 'react';
import { Container } from 'reactstrap';

import Profile from "../components/profile";
import Experience from "../components/experience";

import "../assets/css/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const style: CSSProperties = {
  maxWidth:"800px"
}

const IndexPage = () => {
  return (
      <Container style={style}>
        <Profile/>
        <Experience/>
      </Container>
  );
};

export default IndexPage;