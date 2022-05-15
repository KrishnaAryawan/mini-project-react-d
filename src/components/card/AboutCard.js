import React from "react";
import { Box } from "@mui/material";

export default function AboutCard({ gambar, nama, role }) {
  return (
    <Box>
      <img
        src={gambar}
        alt={nama}
        width="203px"
        height="203px"
        style={{ borderRadius: "100%" }}
      />
      <h3>{nama}</h3>
      <p>{role}</p>
    </Box>
  );
}
