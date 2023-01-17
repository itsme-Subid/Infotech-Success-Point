import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Course from "../../components/Course";
import { motion } from "framer-motion";

const Courses = styled.div`
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  & h1 {
    width: 100%;
  }
  & .courses-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: flex-start;
    gap: 1rem;
    @media (max-width: 60rem) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 35rem) {
      grid-template-columns: 1fr;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const index = () => {
  const [courses, setCourses] = useState<
    [
      {
        id: string;
        title: string;
        description: string;
        duration: string;
        codeNo: string;
        eligibility: string;
      }
    ]
  >([
    {
      id: "",
      title: "",
      description: "",
      duration: "",
      codeNo: "",
      eligibility: "",
    },
  ]);
  const fetchCourses = async () => {
    try {
      axios
        .get("/api/courses")
        .then((response) => setCourses(response.data))
        .catch(() => {
          axios
            .get(
              "https://infotech-success-point.vercel.app/courseDetails/courses.json"
            )
            .then((response) => setCourses(response.data));
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <Courses className="container">
      <h1>Courses We Offer</h1>
      <motion.div
        className="courses-container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {courses?.map((course, index) => {
          return course && <Course key={index} course={course} />;
        })}
      </motion.div>
    </Courses>
  );
};

export default index;
