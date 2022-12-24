import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const NavBar = () => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "flex-start",
      }}
      px="0 20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        flexDirection="row"
        fontSize="24px"
        gap="40px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            color: "#3A1212",
            textDecoration: "none",

            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ color: "#3A1212", textDecoration: "none" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default NavBar;
