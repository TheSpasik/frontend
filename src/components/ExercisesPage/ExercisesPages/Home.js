import React, { useState } from "react";
import "../../../styles/exercisesHome.css";
import { Box } from "@mui/material";
import Navbar from "../ExercisesComponents/Navbar";
import Footer from "../ExercisesComponents/Footer";
import ExerciseDetail from "./ExerciseDetail";
import HeroBanner from "../ExercisesComponents/HeroBanner";
import SearchExercises from "../ExercisesComponents/SearchExercises";
import Exercises from "../ExercisesComponents/Exercises";
//import Detail from "../ExercisesComponents/Detail";
//import ExerciseVideos from "../ExercisesComponents/ExerciseVideos";
import SimilarExercises from "../ExercisesComponents/SimilarExercises";
//import HorizontalScrollbar from "../ExercisesComponents/HorizontalScrollbar";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <Navbar />
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
      {/* <HorizontalScrollbar/> */}
      <Footer />
    </Box>
  );
};

export default Home;
