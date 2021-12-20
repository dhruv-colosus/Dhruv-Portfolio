import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import DHRUV from "../assets/Images/removedimage.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`;
const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 25vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  overflow-y: scroll;
  padding-top: 1rem;

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Source Code Pro", monospace;
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <ParticleComponent theme="dark" />

        <Spaceman>
          <img src={DHRUV} alt="spaceman" />
        </Spaceman>
        <Main>
          <br />
          <br />
          I am Currently learning MERN stack development and am a consistent
          open source contributor. I have Contributed in various organisations
          and bagged positions in competitions and programs like Google Codein,
          HacktoberFest, Github Universe etc.
          <br />
          <br /> I am very interested in ML and it's amazing to learn about its
          applications in various fields like crime detection, predicting
          diseases like cancer and Parkinson's, use of Big Data to target ads,
          self-driving cars, creation of unique art and music.
          <br />
          <br />I am proficient in Python,C,C# and Javascript
        </Main>

        <BigTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
