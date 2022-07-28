import {Box} from '@chakra-ui/react';
import {motion} from "framer-motion";
import styled from "styled-components";

import {ColorModeProps} from "components/sections/common.styles";

export const StyledHome = styled.div`
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const StyledContent = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TopSection = styled.div<ColorModeProps>`
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 100px;
  width: 100%;
  font-weight: 600;
  margin-top: 50px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 50px 50px;
  position: relative;
`;

export const MotionBox = styled(motion(Box))`
  
`;

export const Descriptions = styled.div`
  margin-top: 100px;
  width: 1600px;
  min-width: 0;
  box-sizing: border-box;

  @media (max-width: 1600px) {
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledWorkEducation = styled.div`
  display: grid;
  gap: 60px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 100px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const StyledBuildHash = styled.div`
  font-size: 0.8em;
  color: rgba(229, 229, 229, 0.3);
  text-align: left;
  font-weight: 500;
`;
