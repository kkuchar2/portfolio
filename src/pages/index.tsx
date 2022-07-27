import React, {useEffect, useRef, useState} from "react";

import {Box, useColorMode} from "@chakra-ui/react";
import useMouse from "@react-hook/mouse-position";
import {useTranslation} from "next-export-i18n";

import meta from '../../public/meta.json';
import {hiTitleAnim, nameTitleAnim} from "../animation";
import {education, projects, work} from "../data";
import {setDocumentProperty} from "../util";

import ImageLink from "components/ImageLink/ImageLink";
import TopBar from "components/NavBar/TopBar";
import {EducationSection} from "components/sections/EducationSection/EducationSection";
import {ProjectsSection} from "components/sections/ProjectsSection/ProjectsSection";
import {WorkSection} from "components/sections/WorkSection/WorkSection";
import {
    LeftRightShadow,
    StyledBuildHash,
    Descriptions,
    StyledHome,
    TopSection,
    TopBottomShadow,
    StyledWorkEducation,
    MotionBox,
} from "styles/MainPage";

const Index = () => {
    const [mounted, setMounted] = useState(false);

    const ref = useRef(null);

    const mouse = useMouse(ref, { fps: 60 });

    const { colorMode } = useColorMode();

    const { t } = useTranslation();

    useEffect(() => {
        setDocumentProperty('--mouse-x', '-10000');
        setTimeout(function () {
            setMounted(true);
        }, 100);

    }, []);

    useEffect(() => {
        if (mouse.x && mouse.y) {
            setDocumentProperty('--mouse-x', mouse.x.toString());
            setDocumentProperty('--mouse-y', mouse.y.toString());
        }
    }, [mouse]);

    return <>
        <TopBar/>
        <StyledHome>
            <div style={{ opacity: !mounted ? '0' : '1', transition: 'opacity 0.25s ease-out', width: '100%' }}>
                <TopSection ref={ref} colorMode={colorMode}>
                    <LeftRightShadow colorMode={colorMode}/>
                    <TopBottomShadow colorMode={colorMode}/>
                    <MotionBox
                        bg={'rainbow'}
                        bgClip={'text'}
                        alignSelf={{ base: 'flex-start', md: 'center' }}
                        padding={{ base: 10, md: 10 }}
                        fontWeight={'black'}
                        fontSize={{ base: '50px', md: '60px', lg: '70px', xl: '80px' }}
                        lineHeight={{ base: '20px', md: '50px', lg: '50px', xl: '110px' }}{...hiTitleAnim}>
                        {t("index.title")}
                    </MotionBox>
                    <MotionBox
                        width={{ base: '100%', md: 'auto' }}
                        paddingLeft={{ base: 10, md: 0 }}
                        textAlign={'left'}
                        fontWeight={'extrabold'}
                        fontSize={{ base: '34px', md: '40px', lg: '50px', xl: '70px' }}
                        lineHeight={{ base: 1, md: '30px' }}{...nameTitleAnim}>
                        {t('index.krzysztof')}
                    </MotionBox>
                    <Box
                         marginTop={3}
                         maxWidth={800}
                         alignSelf={{ base: 'flex-start', md: 'center' }}
                         lineHeight={'30px'}
                         fontWeight={'normal'}
                         textAlign={{ base: 'left', xl: 'center' }}
                         padding={{ base: 10, xl: 20 }}
                         fontSize={'xl'}>
                        {t('index.about')}
                    </Box>
                    <div className={'flex items-center justify-center gap-[20px] mt-[30px]'}>
                        <ImageLink
                            href={"https://github.com/kkuchar2"}
                            target={'_blank'}
                            src={'/images/github_icon.svg'}
                            alt={'github_logo'}
                            title={'My GitHub'}
                            size={22}/>

                        <ImageLink
                            href={"https://www.linkedin.com/in/kkuchar/"}
                            target={'_blank'}
                            src={'/images/linkedin_icon.svg'}
                            alt={'linkedin_logo'}
                            title={'My LinkedIn'}
                            size={20}/>

                        <a className={'text-gray-300 hover:text-white'}
                           href={"https://storage.googleapis.com/kkucharski-server/resume_public_2022.pdf"}
                           rel="noopener noreferrer"
                           target="_blank"
                           download={true}>Resume</a>
                    </div>
                </TopSection>
            </div>
            <Descriptions>
                <StyledWorkEducation>
                    <WorkSection items={work}
                                 accentColorDark={'institution.work.accentDark'}
                                 accentColorLight={'institution.work.accentLight'}/>
                    <EducationSection items={education}
                                      accentColorDark={'institution.education.accentDark'}
                                      accentColorLight={'institution.education.accentLight'}/>
                </StyledWorkEducation>
                <ProjectsSection items={projects}/>
            </Descriptions>
        </StyledHome>
        <StyledBuildHash>{meta.buildHash}</StyledBuildHash>
    </>;
};

export default Index;