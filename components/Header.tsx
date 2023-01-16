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
  & .assist {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.8rem;
    & .contact-detail {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      & svg {
        font-size: 1.25rem;
      }
    }
  }
  & .social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    a {
      transition: 0.15s;
      & svg {
        font-size: 1.25rem;
      }
      &:hover {
        color: rgba(var(--primary-color));
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
    letter-spacing: 0.05rem;
    transition: 0.15s;
    cursor: pointer;
    &:hover {
      color: rgba(var(--primary-color), 0.5);
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
          color: rgba(var(--primary-color), 0.5);
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
            <FaWhatsapp />
            <a
              href="https://wa.me/918902175210"
              target="_blank"
              rel="noreferrer"
            >
              +91 98306 73726
            </a>
          </div>
          <div className="contact-detail phone">
            <BsPhone />
            <a href="tele:+918902175210" target="_self" rel="noreferrer">
              +91 98306 73726
            </a>
          </div>
          <div className="contact-detail email">
            <HiOutlineMail />
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
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/itsmesubid"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/itsmesubid"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com/itsmesubid"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
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
