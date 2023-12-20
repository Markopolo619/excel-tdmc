import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import Link from "next/link";

const page = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item className="itemHome itemGrid">
            <div className="favouriteButton">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "600",
                }}
                href="/favourites"
              >
                Favourites
              </Link>
            </div>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="itemHome itemGrid">

              <div className="dynamicIsland">
                <h1
                  className="userName"
                  style={{
                    color: "white",
                    fontSize: "19px",
                    paddingLeft: "1em",
                  }}
                >
                  Mark M.
                </h1>
                <div className="profileIcon"></div>
              </div>

          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="itemHome itemGrid">
            <div className="logoutButton">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "600",
                  position: "relative",
                  left:"20em"
                }}
                href="/login"
              >
                Log Out
              </Link>
            </div>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
};

export default page;
