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
    border-radius: 0.5rem;
    border: 1px solid rgba(var(--dark-color), 0.5);
    background: rgba(var(--light-color));
    transition: all 0.15s;
    &:hover {
      border-color: transparent;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
      transform: translateY(-2px);
      scale: 1.025;
    }
    & h2 {
      text-align: center;
    }
    & .courseDetails {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      & span {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    }
    & .description {
      text-align: justify;
    }
  }
`;

const item = {
  hidden: { opacity: 0, y: 1000 },
  show: { opacity: 1, y: 0 },
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
    <CourseStyled as={motion.div} variants={item} transition={{ delay: 1 }}>
      <div className="wrapper">
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
        <p className="description">{course.description}</p>
      </div>
    </CourseStyled>
  );
};

export default Course;
