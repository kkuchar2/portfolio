import {Box} from "@chakra-ui/react";
import styled from "styled-components";

interface StyledNavbarProps {
    visible: boolean;
}

export const StyledTopBar = styled(Box)<StyledNavbarProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  position: fixed;
  left: 0;
  top: ${props => props.visible ? '0' : '-80px'};
  height: 50px;
  z-index: 5;
  padding-left: 20px;
  padding-right: 20px;
  transition: all 0.25s ease-out;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;