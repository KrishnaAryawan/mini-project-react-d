import React, { useEffect } from "react";
import MenuCard from "../components/MenuCard";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { gql, useQuery } from "@apollo/client";
import { Grid } from "@mui/material";

function Menu() {
  const { data, loading, error } = useQuery(gql`
    query MyQuery {
      miniproject {
        id
        name
        food_pictures
        description
        price
      }
    }
  `);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
          }}
        >
          <NavigationBar></NavigationBar>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container m="20px" spacing={5}>
            {data?.miniproject.map((item) => (
              <Grid item>
                <MenuCard
                  Gambar={item.food_pictures}
                  nama={item.name}
                  deskripsi={item.description}
                  price={item.price}
                ></MenuCard>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Menu;
