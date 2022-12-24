import React, { useState, useEffect } from "react";
import { Stack, TextField, Button, Typography, Box } from "@mui/material";
import { fetchOptions, fetchData } from "../utils/fetchData";
import HorizontalScroll from "./HorizontalScroll";

const SearchExercises = ({ setExercises, setBodyPart, bodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        fetchOptions
      );

      const SearchExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setExercises(SearchExercises);
    }
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  useEffect(() => {
    const bodyParts = async (url, fetchOptions) => {
      const data = await fetchData(url, fetchOptions);
      setBodyParts(["all", ...data]);
    };
    bodyParts(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
      fetchOptions
    );
  }, []);

  return (
    <Stack alignItems="center" mt="36px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise You
        <br /> Should Know
      </Typography>
      <Stack direction="row" gap="20px" mb="72px">
        <TextField
          height="76px"
          value={search}
          placeholder="Search Exercises"
          type="text"
          sx={{
            width: { lg: "800px", sx: "400px" },
            input: { fontWeight: "700", border: "none", borderRadius: "12px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff2625",
            textTransform: "none",
            color: "#fff",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
          }}
          color="error"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Stack>
      <Box sx={{ width: "100%", p: "20px" }}>
        <HorizontalScroll
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
