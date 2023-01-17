import styled from "styled-components";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import Link from "next/link";

const FooterElement = styled.footer`
  background-color: rgb(var(--dark-color));
  margin-block: 3rem;
  padding: 3rem;
  border-radius: 2rem;
  text-align: center;
  transition: 0.15s;
  box-shadow: 0 0 1rem rgb(var(--dark-color));
  & .row {
    margin-bottom: 2rem;
    display: flex;
    gap: 5rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
      gap: 2rem;
    }
    & .col {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: left;
      @media screen and (max-width: 50rem) {
        text-align: center;
      }
      & .col-header {
        display: flex;
        flex-direction: column;
        & h2 {
          font-size: 1.5rem;
          color: rgb(var(--primary-color));
          text-transform: uppercase;
        }
        & span {
          font-size: 1rem;
          color: rgb(var(--primary-color), 0.8);
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      @media screen and (max-width: 50rem) {
        &.social .col-body {
          & ul {
            align-items: center;
          }
        }
      }
      & .col-body {
        & ul {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-direction: column;
          gap: 0.5rem;
          & li {
            font-size: 0.9rem;
            color: rgb(var(--light-color), 0.5);
            transition: 0.15s;
            white-space: nowrap;
            font-weight: 500;
            &:hover {
              color: rgb(var(--primary-color), 0.8);
            }
          }
          &.description li {
            white-space: normal;
          }
        }
      }
      &.social li {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(var(--primary-color));
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
  & .credits {
    font-size: 1rem;
    color: rgb(var(--light-color), 0.5);
    letter-spacing: 0.05rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    @media screen and (max-width: 50rem) {
      flex-direction: column;
    }
    & .left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      @media screen and (max-width: 50rem) {
        flex-direction: column;
      }
      & .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.15rem;
        & svg:hover {
          color: rgb(var(--primary-color), 0.8);
        }
      }
      & .others {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        & span:hover {
          color: rgb(var(--primary-color), 0.8);
        }
        & span {
          position: relative;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(var(--primary-color));
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

const Footer = () => {
  return (
    <FooterElement className="container">
      <div>
        <div className="row">
          <div className="col">
            <div className="col-header">
              <h2>Infotech Success Point</h2>
              <span>Computer learning center</span>
            </div>
            <div className="col-body">
              <ul className="description">
                <li>
                  Designed and built with all the love in the world by the
                  Infotech Success Point team using Next.js.
                </li>
                <li>Code licensed GNU General Public License v3.0.</li>
              </ul>
            </div>
          </div>
          <div className="col social">
            <div className="col-header">
              <h2>Social</h2>
            </div>
            <div className="col-body">
              <ul>
                <li>
                  <a
                    href="http://github.com/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="http://linkedin.com/in/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="http://twitter.com/ItsmeSubid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/itsme-subid"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="credits">
          <div className="left">
            <div className="socials">
              <BsFacebook />
              <BsGithub />
              <BsYoutube />
              <BsInstagram />
              <BsTwitter />
              <BsLinkedin />
            </div>
            <div className="others">
              <span>Terms of service</span>
              <span>Privacy</span>
            </div>
          </div>
          <div className="right">© 2022 INFOTECH SUCCESS POINT, Inc.</div>
        </div>
      </div>
    </FooterElement>
  );
};

export default Footer;
