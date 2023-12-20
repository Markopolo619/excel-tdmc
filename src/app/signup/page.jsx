import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Item from '@mui/material/ListItem'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stack alignItems={"center"} spacing={0}>
        <Item className="item1"></Item>

        <Stack item xs={4}>
          <Item className="item">
            <div className="heading_banner">
              <div className="image_heading_banner">
                <Image
                  className="logo"
                  src="https://www.surreal.co.za/leadership/logos/logo_tdmc_d06a.png"
                  alt="Picture of the author"
                  width={900}
                  height={900}
                  quality={100}
                />
              </div>

              <h4 className="text_heading_banner">Hi There.</h4>
            </div>
          </Item>
        </Stack>
        <Stack item xs={4}>
          <Item className="item"></Item>
        </Stack>
        <div className="login_forms">
          <Stack direction={"row"} xs={1} style={{ width: "30em" }}>
            <Item className="item">
              <div className="login_forms">
                <div className="email_login_forms">
                  <label className="emailAddress_label" htmlFor="">
                    Email Address:
                  </label>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="text"
                    className="email_emailAddress_label"
                    placeholder="you@tdmc.co.za"
                    style={{fontSize:"20px"}}
                  />
                </div>
              </div>
            </Item>
          </Stack>
          <Stack item xs={4}>
            <Item className="item"></Item>
          </Stack>

          <Stack style={{ width: "30em" }} item xs={4}>
            <Item className="item">
              <div className="login_forms">
                <div className="password_login_forms">
                  <label className="password_label" htmlFor="">
                    Password:
                  </label>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input
                    type="password"
                    className="passwordAddress_label"
                    placeholder="********"
                    style={{fontSize:"20px"}}
                  />
                </div>
              </div>
            </Item>
          </Stack>
        </div>
        <Stack item xs={4}>
          <Item className="item"></Item>
        </Stack>
        <Stack item xs={4}>
          <Item className="item" style={{ textAlign: "center" }}>
            <div
              className="buttons flex justify-center items-center"
              style={{ textAlign: "center" }}
            >
              <div
                className="login_button flex justify-center items-center"
                style={{ textAlign: "center" }}
              >
                <Link href="/home">
                  <button
                    className="login_actual_button"
                    style={{ textAlign: "center" }}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
              <div className="signup_button" style={{ textAlign: "center" }}>
                <h4 style={{ textAlign: "center" }}>
                  Have an account?
                </h4>
                <Link href="/login">
                  <button
                    className="signup_actual_button"
                    style={{ textAlign: "center" }}
                  >
                    <span style={{ fontWeight: "bolder" }}>Login</span>
                  </button>
                </Link>
              </div>
            </div>
          </Item>
        </Stack>
        <Stack item xs={4}>
          <Item className="item"></Item>
        </Stack>
      </Stack>
    </Box>
  )
}

export default page