import { Stack, Typography, Button } from "@mui/material";
import React from "react";
import bodyPartImg from "../assets/icons/body-part.png";
import equipmentImg from "../assets/icons/equipment.png";
import targetImg from "../assets/icons/target.png";

const Details = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;
  const exerciseInfo = [
    { icon: bodyPartImg, name: bodyPart },
    { icon: equipmentImg, name: equipment },
    { icon: targetImg, name: target },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />

      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          fontSize="52px"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography fontSize="24px">
          Exercises keep you strong. <span className="text-color">{name} </span>
          is one of the best exercises to target your{" "}
          <span className="text-color">{target}</span>. It will help your mood
          and gain energy.
        </Typography>
        {exerciseInfo.map((exercise, index) => (
          <Stack
            direction="row"
            alignItems="center"
            sx={{ gap: { lg: "35px", xs: "20px" } }}
            key={index}
            pl="20px"
          >
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                height: "80px",
                width: "80px",
              }}
            >
              <img src={exercise.icon} alt={exercise.name} />
            </Button>
            <Typography
              fontSize="18px"
              textTransform="capitalize"
              fontWeight="bold"
            >
              {exercise.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Details;
