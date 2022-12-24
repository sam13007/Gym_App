import { Box, Typography } from "@mui/material";
import React from "react";

const ExerciseVideo = ({ exerciseVideos, name }) => {
  const { title, channelName } = exerciseVideos;
  return (
    <Box sx={{ marginTop: { lg: "100px", xs: "20px" }, padding: "20px" }}>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        watch <span className="text-color">{name}</span> exercise videos
      </Typography>
    </Box>
  );
};

export default ExerciseVideo;
