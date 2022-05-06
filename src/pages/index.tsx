import React from "react";
import { CSSProperties } from 'react';
import { Container } from 'reactstrap';

import Profile from "../components/profile";
import Experience from "../components/experience";
import OpenSource from "../components/opensource";
import Skill from "../components/skill";


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
        <OpenSource/>
        <Skill/>
      </Container>
  );
};

export default IndexPage;