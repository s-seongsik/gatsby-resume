import React from "react";
import Profill from "../components/profill";
import Grid from '@mui/material/Grid';
import "../assets/css/body.scss";



const IndexPage = () => {
  return (
      <Grid container 
            justifyContent="center"
            style={{minWidth:'500px'}}
            >
        <Profill/>
      </Grid>
  );
};

export default IndexPage;