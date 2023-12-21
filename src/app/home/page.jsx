"use client";

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  textAlign: "center",
  boxShadow: "none",
  border: "5px solid black",
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  textAlign: "left",
  boxShadow: "none",
}));

const FavouriteItem = styled(Paper)(() => ({
  textAlign: "left",
  boxShadow: "none",
}));

const DynamicItem = styled(Paper)(() => ({
  textAlign: "center",
  position: "sticky",
  boxShadow: "none"
}));

const LogoutItem = styled(Paper)(() => ({
  textAlign: "right",
  boxShadow: "none",
}));

const page = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FavouriteItem className="itemHome itemGrid">
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
          </FavouriteItem>
        </Grid>
        <Grid item xs={4}>
          {/* <DynamicItem className="DynamicItem">
            <Box display="flex" justifyContent="center" alignItems="center">
              <div className="dynamicIsland">
                <h1
                  style={{
                    color: "white",
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                  className="userName"
                >
                  Mark M.
                </h1>
              </div>
              <div className="profileIcon"></div>
            </Box>
          </DynamicItem> */}
        </Grid>
        <Grid item xs={4}>
          <LogoutItem className="itemHome itemGrid">
            <div className="logoutButton">
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "600",
                }}
                href="/"
              >
                Log Out
              </Link>
            </div>
          </LogoutItem>
        </Grid>
        <Grid item xs={8}>
          <Item>Grid</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Grid</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Grid</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Grid</Item>
        </Grid>
        <Grid item xs={8}>
        <Item2>
          <div class="search">
    <div>
      <input type="text" placeholder="Search . . ." required/>
    </div>
  </div>
          </Item2>
        </Grid>
        <Grid item xs={4}>
          <Item>Grid</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>Grid</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>Grid</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default page;
