import React from "react";

export default function MenuCard({ Gambar, nama, deskripsi, price, Id }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "312px",
        minHeight: "476px",
        filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
        border: "2px solid",
        borderColor: "#1B332D",
      }}
    >
      <div
        className="card-image"
        style={{ margin: "20px", display: "flex", justifyContent: "center" }}
      >
        <img
          src={Gambar}
          className="card-img-top"
          alt="Not Found"
          style={{
            height: "208px",
            width: "208px",
            borderRadius: "100%",
          }}
        />
      </div>
      <div className="card-body">
        <center>
          <h5
            className="card-title"
            style={{
              fontSize: "30px",
              fontFamily: "Inter",
              fontcolor: "#1B332D",
            }}
          >
            {nama}
          </h5>
          <p
            className="card-text"
            style={{
              fontSize: "20px",
              fontFamily: "Inter",
              fontcolor: "#1B332D",
            }}
          >
            {deskripsi}
          </p>
          <p
            className="card-text"
            style={{
              fontSize: "20px",
              fontFamily: "Inter",
              fontcolor: "#1B332D",
            }}
          >
            {price}
          </p>
        </center>
        <div
          className="d-flex"
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <a
            href={
              "https://wa.me/6281236827266?text=halo%20saya%20(nama)%20dimana%20saya%20ingin%20pesan%20produk%20" +
              nama +
              "%20apakah%20tersedia%3F"
            }
            className="btn"
            style={{
              marginTop: "25px",
              backgroundColor: "#1B332D",
              color: "white",
              fontFamily: "Inter",
            }}
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}
