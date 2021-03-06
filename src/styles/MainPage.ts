import {motion} from "framer-motion";
import styled from "styled-components";

interface NavbarOpenedProps {
    opened: boolean;
}

export const StyledHome = styled.div<NavbarOpenedProps>`
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  background: ${props => props.opened ? '#212121' : 'none'};
  transition: background 0.25s ease-out;
`;

export const StyledContent = styled.div<NavbarOpenedProps>`
  box-sizing: border-box;
  display: flex;
  width: 1300px;
  justify-content: center;
  flex-direction: column;
  padding-left: 40px;
  padding-right: 40px;
  filter: ${props => props.opened ? 'blur(8px)' : 'none'};
  transition: filter 0.25s ease-out;

  @media (max-width: 1300px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    padding: 0 20px 10px;
  }
`;

export const fadeIn = {
    initial: "hidden",
    exit: "hidden",
    animate: "visible",
    variants: {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: [0.7, 0.1, 0.3, 0.9]
            }
        },
        hidden: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.4
            }
        }
    }
};

export const fadeIn2 = {
    initial: "hidden",
    exit: "hidden",
    animate: "visible",
    variants: {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                delay: 0.1,
                ease: [0.0, 0.3, 0.6, 1]
            }
        },
        hidden: {
            y: -50,
            opacity: 0,
            transition: {
                duration: 0.4
            }
        }
    }
};

export const StyledTitleBox = styled.div`
  box-sizing: border-box;
  margin-bottom: 100px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const RainbowTitle = styled(motion.span)`
  box-sizing: border-box;
  text-align: center;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: 900;
  font-size: 62px;
  line-height: 108px;
  font-family: Inter;
  background: linear-gradient(65deg, #ff0099, #ff7300, #ffeb00, #00ff00);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const StyledTitle = styled(motion.h1)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  color: #edf6ff;
  letter-spacing: -2px;
  font-style: normal;
  font-weight: 900;
  font-size: 62px;
  line-height: 108px;
  font-family: Inter;
`;

export const StyledDescriptionsSection = styled.div`
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  min-width: 0;

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
