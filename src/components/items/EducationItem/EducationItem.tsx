import React from "react";

import {Text} from "kuchkr-react-component-library";

import {
    descriptionTextTheme,
    eductionTitleTextTheme,
    schoolTextTheme,
    StyledEducationItem,
    StyledLeftSide,
    StyledRightSide,
    timeTextTheme,
} from "./style";

export interface EducationDescriptionItemProps {
    school: string;
    title: string;
    startTime: string;
    endTime: string;
    description: string;
    marginTop?: number;
}

export const EducationItem = (props: EducationDescriptionItemProps) => {

    const { school, title, startTime, endTime, description, marginTop = 0 } = props;

    return <StyledEducationItem>
        <StyledLeftSide>
            <Text theme={schoolTextTheme} text={school}/>
        </StyledLeftSide>

        <StyledRightSide>
            <Text theme={timeTextTheme} text={`${startTime} - ${endTime}`}/>
            <Text theme={eductionTitleTextTheme} text={title}/>
            <Text theme={descriptionTextTheme} text={description}/>
        </StyledRightSide>
    </StyledEducationItem>;
};