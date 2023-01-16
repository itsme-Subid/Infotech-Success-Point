import Head from "next/head";
import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { createGlobalStyle } from "styled-components";
import { Suspense, lazy } from "react";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/Header"));

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const GlobalStyle = createGlobalStyle`
:root {
  --light-color: 235, 236, 241;
  --dark-color: 49, 49, 49;
  --primary-color: 251, 237, 184;
  --primary-text-color: 233, 196, 151;
  --secondary-color: 86, 60, 40;
  --white-color: 255, 255, 255;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--font-poppins, sans-serif);
  outline: none;
}
body {
  background: rgba(var(--light-color), 1);
  color: rgba(var(--dark-color), 1);
  overflow-x: hidden;
  transition: all 0.15s ease;
}
.container {
  margin-inline: auto;
  width: min(90%, 70rem);
}
.App {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
::-webkit-scrollbar {
  width: 0.25em;
}
::-webkit-scrollbar-track {
  background: transparent;
  transition: all 0.15s ease;
}
::-webkit-scrollbar-track:hover {
  background: rgba(var(--dark-color), 0.01);
}
::-webkit-scrollbar-thumb {
  background: rgba(var(--light-color), 0.25);
  border-radius: 0.5rem;
}
a {
  text-decoration: none;
  color: inherit;
  transition: 0.15s;
}
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Infotech Success Point</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={poppins.variable}>
        <GlobalStyle />
        <motion.div variants={container} initial="hidden" animate="show">
          <Suspense fallback={<Loading />}>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Suspense>
        </motion.div>
      </div>
    </>
  );
}
