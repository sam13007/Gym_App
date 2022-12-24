import React from "react";
import { Box, Typography, Button } from "@mui/material";
import banner from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "200px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={600}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="20px" lineHeight="36px" mb={4}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ bgcolor: "#ff2625", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize="200px"
        sx={{ opacity: 0.2, display: { xs: "none", lg: "block" } }}
      >
        Exercises
      </Typography>
      <img
        src={banner}
        alt="banner"
        style={{ position: "absolute" }}
        className="hero-banner"
      />
    </Box>
  );
};

export default HeroBanner;
