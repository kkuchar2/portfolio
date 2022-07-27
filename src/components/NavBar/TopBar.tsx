import React, {useEffect, useState} from "react";

import {Box} from "@chakra-ui/react";

import { StyledTopBar} from "./style";

import DualLanguageSwitch from "components/DualLanguageSwitch/DualLanguageSwitch";
import ThemeSwitcher from "components/ThemeSwitcher/ThemeSwitcher";

const TopBar = () => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            }
            else { // if scroll up show the navbar
                setShow(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return <StyledTopBar bg={'bg-navbar'} visible={show}>
        <Box className={'flex items-center justify-between gap-[30px] h-full w-full md:w-auto'}>
            <DualLanguageSwitch firstLanguage={'en'} secondLanguage={'pl'}/>
            <ThemeSwitcher/>
        </Box>
    </StyledTopBar>;
};

export default TopBar;