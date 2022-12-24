import { Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            textTransform: "capitalize",
            fontSize: "14px",
            borderRadius: "20px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            textTransform: "capitalize",
            fontSize: "14px",
            borderRadius: "20px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: "700",
          fontSize: "24px",
          mt: "35px",
          ml: "21px",
          pb: "10px",
          color: "#000",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
