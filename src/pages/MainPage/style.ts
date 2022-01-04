import styled from "styled-components";

export const StyledMainPage = styled.div`
  height: 200px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const StyledKeyboardImage = styled.img`
  width: 100%;
  opacity: 0.9;
  
  @media (max-width: 600px) {
    width: 200%;
  }
`

export const StyledBottomSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const StyledContent = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 150px;

  @media (max-width: 600px) {
    margin-top: 50px;
  }
`;

export const StyledTopSection = styled.div`
  width: 50%;
  max-width: 1500px;
  min-width: 600px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
  margin-bottom: 50px;

  @media (max-width: 600px) {
    width: 100%;
    min-width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    margin-bottom: 0;
  }
`;

export const StyledTitleSection = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 100px;

  @media (max-width: 600px) {
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  background: #202020;
  width: 150px;
  display: flex;
  align-items: center;

  justify-content: center;
  height: 50px;
  border-radius: 150px;
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  margin-left: 30px;
  margin-right: 30px;
  transform: scale(1.1);

  @media (max-width: 600px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const helloTextTheme = {
    textColor: "#a9a9a9",
    fontSize: "1.3em",
    textAlign: "left",
    fontWeight: 600,
    margin: "0px 0px 0px 5px"
};

export const nameTextTheme = {
    textColor: "#ff9100",
    fontSize: "2.5em",
    textAlign: "left",
    fontWeight: 600,
    margin: "10px 0px 0px 5px"
};

export const softwareDevTextTheme = {
    textColor: "#B4B4B4",
    fontSize: "1.2em",
    textAlign: "left",
    fontWeight: 600,
    margin: "10px 0px 0px 5px"
};

export const buttonTextTheme = {
    textColor: "#b6b6b6",
    fontSize: "1em",
    lineHeight: '40px',
    textAlign: 'center',
    fontWeight: 600,
    margin: "2px 10px 0px 0px"
};