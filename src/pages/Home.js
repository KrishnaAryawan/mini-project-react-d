import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(background.jpg)`,
          minHeight: "95vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#1B332D",
          }}
        >
          <NavigationBar></NavigationBar>
        </div>
        <Box color="white" py="300px" pl="80px">
          <h1
            style={{
              color: "white",
              fontWeight: 800,
            }}
          >
            Welcome to The Yard
          </h1>
          <p style={{ width: "505px" }}>
            Restaurant for everyone can share their happiness and place for
            everyone can enjoy the food.
          </p>
        </Box>
      </div>
      <Footer />
    </>
  );
}
export default Home;
