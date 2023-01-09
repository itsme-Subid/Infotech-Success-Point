import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CourseStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  & .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(var(--light-color), 0.5);
    & h2 {
      text-align: center;
    }
    & .courseDetails {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      & span {
        font-weight: lighter;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
  }
`;

const item = {
  hidden: { opacity: 0, x: -1000 },
  show: { opacity: 1, x: 0 },
};

const Course = ({
  course,
}: {
  course: {
    id: string;
    title: string;
    description: string;
    duration: string;
    codeNo: string;
    eligibility: string;
  };
}) => {
  return (
    <CourseStyled>
      <motion.div className="wrapper" variants={item} transition={{ delay: 1 }}>
        {course && (
          <>
            <h2>{course.title}</h2>
            <p className="courseDetails">
              <span>
                Duration: <b>{course.duration}</b>
              </span>
              <span>
                Eligibility: <b>{course.eligibility}</b>
              </span>
              <span>
                Code no.: <b>{course.codeNo}</b>
              </span>
            </p>
            <p>{course.description}</p>
          </>
        )}
      </motion.div>
    </CourseStyled>
  );
};

export default Course;
