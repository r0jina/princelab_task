import { AppBar, Grid, ListItem } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { nav_data } from "./Navdata";

const Nav = () => {
  let navigate = useNavigate();
  return (
    <Grid item>
      <AppBar
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "50px",
          width: "50vw",
          marginRight: "auto",
          marginLeft: "auto",
          position: "relative",
          paddingInline: "60px",
          backgroundColor: "grey",
          fontFamily: "Montserrat",
        }}
      >
        {nav_data.map((item, i) => (
          <ListItem
            key={i}
            label={`${item.title}`}
            onClick={() => navigate(`${item.path}`)}
          >
            {item.title}
          </ListItem>
        ))}
      </AppBar>
    </Grid>
  );
};

export default Nav;
