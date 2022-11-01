import React from "react";
import paradox1 from "./images/paradox1.jpg";
import workCulture from "./images/workCulture.png";
import paradox2 from "./images/paradox2.png";
import earth from "./images/earth.png";
import nature from "./images/nature.png";
import { Box, Grid } from "@mui/material";
import "./index.css";
import YtEmbed from "./Component/YtEmbed";

const Home = () => {
  return (
    <Grid container flexDirection="column">
      <YtEmbed embedId="dpEPNioJ1Ik" />
      <Grid
        item
        marginLeft="auto"
        marginRight="auto"
        width="50vw"
        height="150px"
      >
        <img
          src={paradox1}
          width="100%"
          height="100%"
          alt=""
          style={{ position: "relative" }}
        />
        <p className="centered">Building the future</p>
      </Grid>
      <Grid
        item
        marginLeft="auto"
        marginRight="auto"
        display="flex"
        flexDirection="row"
        lg={6}
        gap={2}
      >
        <Box mt="12px" width="300px">
          <img
            src={workCulture}
            width="100%"
            height="100%"
            alt=""
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Grid item>
          <Box>
            <p className="row2 mb-0">Features</p>
          </Box>
          <Box display="flex" flexDirection="row" gap={1}>
            <p className="row2 mb-0" style={{ color: "#ffaf7a" }}>
              Ought
            </p>
            <p className="row2 mb-0">to</p>
          </Box>
          <Box>
            <p className="row2 mb-0">Partake</p>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        display="flex"
        ml="auto"
        mr="auto"
        flexDirection="row"
        lg={6}
        gap={2}
        mt="12px"
      >
        <Box width="300px" borderRadius="5px">
          <img
            src={paradox2}
            alt=""
            width="100%"
            style={{ borderRadius: "5px" }}
          />
        </Box>
        <Box width="300px">
          <img
            src={earth}
            alt=""
            width="100%"
            style={{ borderRadius: "5px" }}
          />
        </Box>
      </Grid>
      <Grid
        item
        marginLeft="auto"
        marginRight="auto"
        mt="30px"
        mb="20px"
        width="50vw"
        height="300px"
      >
        <img
          src={nature}
          width="100%"
          height="100%"
          alt=""
          style={{ borderRadius: "5px" }}
        />
      </Grid>
      <Grid item>
        <hr
          style={{
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.5,
            borderColor: "#000000",
            marginLeft: "auto",
            width: "50vw",
            marginRight: "auto",
            marginBottom: "20px",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
