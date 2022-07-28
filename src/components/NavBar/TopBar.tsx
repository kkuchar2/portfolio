import React from "react";

import {Box} from "@chakra-ui/react";

import { StyledTopBar} from "./style";

import DualLanguageSwitch from "components/DualLanguageSwitch/DualLanguageSwitch";
import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";

const TopBar = () => {
    return <StyledTopBar bg={'bg-navbar'} transition='background 2.15s' transitionTimingFunction='ease-out'>
        <Box className={'flex items-center justify-between gap-[30px] h-full w-full md:w-auto'}>
            <DualLanguageSwitch firstLanguage={'en'} secondLanguage={'pl'}/>
            <ThemeSwitcher/>
        </Box>
    </StyledTopBar>;
};

export default TopBar;