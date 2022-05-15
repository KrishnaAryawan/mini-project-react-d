import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { Box } from "@mui/material";
import AboutCard from "../components/card/AboutCard";

function About() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#5F7A6B",
          minHeight: "95vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#1B332D",
            fontFamily: "inter",
          }}
        >
          <NavigationBar></NavigationBar>
        </div>
        <Box color="white" py="20px">
          <center>
            <h1
              style={{
                color: "white",
              }}
            >
              Our Team
            </h1>
            <p style={{ width: "735px" }}>
              Using Our Team you are able to make an incredible cook evening at
              our restaurant and other people are able to apply for it.
            </p>
            <Box>
              <AboutCard nama="Founder" role="Founder" gambar="/img/1.jpg" />
            </Box>
            <Box>
              <AboutCard
                nama="Co-Founder"
                role="Co-Founder"
                gambar="/img/2.jpg"
              />
            </Box>
            <Box>
              <AboutCard
                nama="Head Chef"
                role="Head Chef"
                gambar="/img/3.jpg"
              />
            </Box>
          </center>
        </Box>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
