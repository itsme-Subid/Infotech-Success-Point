import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import bg from "./../public/images/homePageBackground.jpg";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  min-height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(var(--dark-color), 0.5),
      rgba(var(--dark-color), 0.5)
    ),
    url(${bg.src}) no-repeat center center/cover;
  color: rgb(var(--light-color));
  text-align: center;
  & h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: rgb(var(--primary-color));
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
    color: rgb(var(--primary-color));
  }
  & h3,
  h4 {
    font-weight: 500;
    letter-spacing: 0.05rem;
  }
  & p {
    font-size: 1.25rem;
    font-weight: 400;
  }
  & a {
    transition: 0.15s;
    & button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem 1.5rem;
      border: 1px solid transparent;
      border-radius: 5rem;
      color: rgb(var(--primary-color));
      background-color: rgb(var(--dark-color));
      font-size: 1rem;
      cursor: pointer;
      transition: 0.15s;
      box-shadow: 0 0 1rem rgb(var(--dark-color));
      & svg {
        transition: 0.15s;
        scale: 0;
        visibility: hidden;
        opacity: 0;
        width: 0;
      }
      &:hover {
        & svg {
          scale: 1;
          visibility: visible;
          opacity: 1;
          width: auto;
        }
      }
    }
  }
`;

export default function Home() {
  return (
    <>
      <Main>
        <h3>AN AUTONOMOUS INSTITUTE UNDER NCT,DELHI & MHRD ,GOVT. OF INDIA</h3>
        <h2>Bharatiya Youth Computer Academy</h2>
        <h4>An ISO 9001:2015 Certified Computer Educational Organisation</h4>
        <h1>Why join Infotech Success Point ?</h1>
        <p>Get career-ready with job-oriented learning</p>
        <Link href="/courses">
          <button>
            Our Courses <BsArrowRightShort />
          </button>
        </Link>
      </Main>
    </>
  );
}
