import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Pagination } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import { fetchOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexLastExercise = currentPage * exercisePerPage;
  const indexFirstExercise = indexLastExercise - exercisePerPage;

  const currentExercises = exercises.slice(
    indexFirstExercise,
    indexLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          fetchOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          fetchOptions
        );
      }

      setExercises(exercisesData);
    };
    fetchExerciseData();
  }, [bodyPart, setExercises]);

  return (
    <Box sx={{ mt: { lg: "100px" } }} mt="30px" p="20px">
      <Typography variant="h4" mb="46px" textAlign="center" fontWeight="500">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "58px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            count={Math.ceil(exercises.length / exercisePerPage)}
            color="primary"
            shape="rounded"
            defaultPage={1}
            sx={{ mt: "60px" }}
            page={currentPage}
            size="large"
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
