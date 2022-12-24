/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Details from "../components/Details";
import ExerciseVideo from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";
import { fetchOptions, fetchData, youtubeOptions } from "../utils/fetchData";

const ExerciseDetails = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    const exerciseUrl = "https://exercisedb.p.rapidapi.com/exercises/exercise/";
    const youtubeUrl = "https://youtube-search-and-download.p.rapidapi.com";

    const fetchExerciseDetail = async () => {
      const exercisesDetail = await fetchData(
        `${exerciseUrl}${id}`,
        fetchOptions
      );
      setExerciseDetail(exercisesDetail);

      const exerciseVideoData = await fetchData(
        `${youtubeUrl}/search?query=${exercisesDetail.name} exercise`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents.slice(0, 3));
    };

    fetchExerciseDetail();
  }, [id]);

  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      {console.log(exerciseVideos)}

      <ExerciseVideo
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetails;
