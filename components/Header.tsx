import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaHamburger } from "react-icons/fa";
import styled, { css } from "styled-components";
import Link from "next/link";

const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 0.5rem;
  width: 90%;
  margin-inline: auto;
  color: rgba(var(--light-color));
  @media screen and (max-width: 40rem) {
    flex-direction: column;
    gap: 2rem;
    letter-spacing: 0.1rem;
  }
  & .assist {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 0.8rem;
    @media screen and (max-width: 50rem) {
      font-size: 1rem;
    }
    & .contact-detail {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;
      & svg {
        font-size: 1.25rem;
      }
    }
    @media screen and (max-width: 50rem) {
      width: 100%;
      flex-direction: column;
      font-size: 1.25rem;
      text-align: left;
      & p {
        width: 100%;
      }
      & .contact-detail {
        width: 100%;
        justify-content: flex-start;
        gap: 0.5rem;
        & svg {
          font-size: 2rem;
        }
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
        @media screen and (max-width: 50rem) {
          font-size: 2.5rem;
        }
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
      color: rgba(var(--primary-color));
    }
    @media screen and (max-width: 50rem) {
      display: none;
    }
  }
  & .menu {
    @media screen and (max-width: 50rem) {
      width: 100%;
    }
    gap: 1rem;
    & ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      @media screen and (max-width: 50rem) {
        flex-direction: column;
      }
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
        @media screen and (max-width: 50rem) {
          font-size: 1.25rem;
          text-align: center;
          letter-spacing: 0.1rem;
          background: rgba(var(--dark-color), 0.5);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          width: 100%;
        }
      }
    }
  }
`;

type NavbarType = {
  menu: boolean;
};

const StyledNavbar = styled.div<NavbarType>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: rgba(var(--dark-color), 0.8);
  backdrop-filter: blur(5px);
  transition: all 0.15s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 50rem) {
    height: 100%;
    padding-top: 4rem;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  ${(props) =>
    !props.menu &&
    css`
      @media screen and (max-width: 50rem) {
        transform: translateX(-100%);
      }
    `}
`;

const MobileNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background: rgba(var(--dark-color), 0.5);
  color: rgba(var(--white-color));
  backdrop-filter: blur(5px);
  transition: all 0.15s;
  transform: translateY(-100%);
  font-size: 1.5rem;
  padding-block: 0.5rem;
  @media screen and (max-width: 50rem) {
    transform: translateY(0);
  }
`;

const Header = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <>
      <StyledNavbar menu={menu}>
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
              <li onClick={() => setMenu(!menu)}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="/about">About</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="/courses">Courses</Link>
              </li>
              <li onClick={() => setMenu(!menu)}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </Navbar>
      </StyledNavbar>
      <MobileNavbar>
        <div className="content container">
          <FaHamburger onClick={() => setMenu(!menu)} />
        </div>
      </MobileNavbar>
    </>
  );
};

export default Header;
