import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import styled from "styled-components";
import Link from "next/link";

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  width: 90%;
  margin-inline: auto;
  color: rgba(var(--light-color));
  .assist {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .contact-detail {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
    }
  }
  & .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    a {
      transition: 0.15s;
      &:hover {
        color: rgba(var(--light-color), 0.5);
      }
    }
  }
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  width: 90%;
  margin-inline: auto;
  color: rgba(var(--light-color));
  & .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: 0.15s;
    cursor: pointer;
    &:hover {
      & .ant-space-item {
        color: rgba(var(--light-color), 0.5);
      }
      & svg {
        color: rgba(var(--light-color), 0.5);
      }
    }
  }
  & .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    & ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      & li {
        list-style: none;
        font-size: 1rem;
        font-weight: 500;
        transition: 0.15s;
        position: relative;
        cursor: pointer;
        &:hover {
          color: rgba(var(--light-color), 0.5);
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 10,
        background: "rgba(var(--dark-color), 0.8)",
        backdropFilter: "blur(5px) ",
      }}
    >
      <Alert>
        <div className="assist">
          <p>For any assistance</p>
          <div className="contact-detail whatsapp">
            <FaWhatsapp size="1.5rem" />
            <a
              href="https://wa.me/918902175210"
              target="_blank"
              rel="noreferrer"
            >
              +91 98306 73726
            </a>
          </div>
          <div className="contact-detail phone">
            <BsPhone size="1.5rem" />
            <a href="tele:+918902175210" target="_self" rel="noreferrer">
              +91 98306 73726
            </a>
          </div>
          <div className="contact-detail email">
            <HiOutlineMail size="1.5rem" />
            <a
              href="mailto:itsmesubid@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              itsmesubid@gmail.com
            </a>
          </div>
        </div>
        <div className="social">
          <a
            href="https://www.facebook.com/itsmesubid"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook size="1.5rem" />
          </a>
          <a
            href="https://www.instagram.com/itsmesubid"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size="1.5rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/itsmesubid"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size="1.5rem" />
          </a>
          <a
            href="https://www.twitter.com/itsmesubid"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size="1.5rem" />
          </a>
        </div>
      </Alert>
      <Navbar>
        <div className="logo">
          <Link href="/">Infotech Success Point</Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
