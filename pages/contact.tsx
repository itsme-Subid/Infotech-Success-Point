import React from "react";
import styled, { keyframes } from "styled-components";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import Head from "next/head";

const animateBefore = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100vh);
    }
`;
const animateAfter = keyframes`
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100vh);
    }
`;

const Contact = styled.div`
  margin-top: 8rem;
  @media screen and (max-width: 50rem) {
    margin-top: 5rem;
  }
  &::before {
    content: "";
    position: absolute;
    top: -20rem;
    left: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgba(255, 183, 3, 0.175),
      transparent,
      transparent
    );
    animation: ${animateBefore} 15s infinite;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -20rem;
    right: -10rem;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    background: radial-gradient(
      rgb(33, 158, 188, 0.175),
      transparent,
      transparent
    );
    animation: ${animateAfter} 15s infinite;
    z-index: -1;
  }
  & .card {
    backdrop-filter: blur(5rem) brightness(0.5);
    min-height: 20rem;
    display: grid;
    place-content: center;
    border-radius: 2rem;
    background-color: rgb(128, 128, 128, 0.075);
    gap: 2rem;
    padding: 4rem;
    @media screen and (max-width: 50rem) {
      padding: 1.5rem;
      border-radius: 1rem;
      gap: 1rem;
      & h1 {
        font-size: 1.5rem;
      }
    }
    & ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & li {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        & svg {
          font-size: 1.25rem;
          transition: 0.15s;
        }
        &:hover svg {
          color: rgb(33, 158, 188);
        }
        & span {
          font-size: 1rem;
          font-weight: 500;
          transition: 0.15s;
          position: relative;
          display: flex;
          flex-direction: column;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgb(33, 158, 188);
            width: 0;
            height: 0.1rem;
            border-radius: 5rem;
            transition: 0.15s;
          }
          &:hover::before {
            width: 100%;
          }
        }
      }
    }
  }
`;

const Index = () => {
  const contacts = [
    {
      icon: <IoLocationSharp />,
      content:
        "Near Govt. Quarter, 52/25 Kamarpara lane, Baidyabati, Hooghly, Pin: 712222, West Bengal, INDIA",
    },
    {
      icon: <BsWhatsapp />,
      content: <a href="tele:+919830673726">+91 98306 73726</a>,
    },
    {
      icon: <BsFillTelephoneFill />,
      content: <a href="tele:+919830673726">+91 98306 73726</a>,
    },
    {
      icon: <GrMail />,
      content: <a href="mailto:itsmesubid@gmail.com">itsmesubid@gmail.com</a>,
    },
    {
      icon: <TfiWorld />,
      content: (
        <a href="https://infotech-success-point.vercel.app/">
          https://infotech-success-point.vercel.app/
        </a>
      ),
    },
  ];
  return (
    <Contact>
      <Head>
        <title>Contact | Infotech Success Point</title>
      </Head>
      <div className="card container">
        <h1>Infotech Success Point</h1>
        <ul>
          {contacts.map(({ icon, content }, index) => (
            <li key={index}>
              {icon}
              <span>{content}</span>
            </li>
          ))}
        </ul>
      </div>
    </Contact>
  );
};

export default Index;
