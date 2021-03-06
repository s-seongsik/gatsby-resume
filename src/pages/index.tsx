import React from "react";
import { CSSProperties } from 'react';
import { Container } from 'reactstrap';
import Profile from "../components/profile";
import Experience from "../components/experience";
import OpenSource from "../components/opensource";
import Skill from "../components/skill";
import Certificate from "../components/certificate";
import Education from "../components/education";
import "../assets/css/global.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

const style: CSSProperties = {
  maxWidth:"800px"
}

const IndexPage = () => {
  return (
      <Container style={style}>
        <Profile/>
        <hr />
        <Experience/>
        <hr />
        <OpenSource/>
        <hr />
        <Skill/>
        <hr />
        <Certificate />
        <hr />
        <Education />
      </Container>
  );
};

export default IndexPage;