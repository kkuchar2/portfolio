import {useMemo, useRef} from "react";

import {Box as ChakraBox, useColorMode} from "@chakra-ui/react";
import {useTranslation} from "next-export-i18n";

import meta from '../../public/meta.json';
import {hiTitleAnim, nameTitleAnim} from "../animation";
import {education, projects, work} from "../data";

import ImageLink from "components/ImageLink/ImageLink";
import TopBar from "components/NavBar/TopBar";
import {EducationSection} from "components/sections/EducationSection/EducationSection";
import {ProjectsSection} from "components/sections/ProjectsSection/ProjectsSection";
import {WorkSection} from "components/sections/WorkSection/WorkSection";
import {
    StyledBuildHash,
    Descriptions,
    StyledHome,
    TopSection,
    StyledWorkEducation,
    MotionBox,
} from "styles/MainPage";
import React from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import * as THREE from 'three'
import {Effects} from "components/Thing/Effects";

const roundedSquareWave = (t, delta, a, f) => {
    return ((2 * a) / Math.PI) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
}

function Dots() {
    const ref = useRef()
    const { vec, transform, positions, distances } = useMemo(() => {
        const vec = new THREE.Vector3()
        const transform = new THREE.Matrix4()

        // Precompute randomized initial positions
        const positions = [...Array(10000)].map((_, i) => {
            const position = new THREE.Vector3()
            // Place in a grid
            position.x = (i % 100) - 50
            position.y = Math.floor(i / 100) - 50

            // Offset every other column (hexagonal pattern)
            position.y += (i % 2) * 0.5

            // Add some noise
            position.x += Math.random() * 0.3
            position.y += Math.random() * 0.3
            return position
        })

        // Precompute initial distances with octagonal offset
        const right = new THREE.Vector3(1, 0, 0)
        const distances = positions.map((pos) => {
            return pos.length() + Math.cos(pos.angleTo(right) * 8) * 0.5
        })
        return { vec, transform, positions, distances }
    }, [])
    useFrame(({ clock }) => {
        for (let i = 0; i < 10000; ++i) {
            const dist = distances[i]

            // Distance affects the wave phase
            const t = clock.elapsedTime - dist / 25

            // Oscillates between -0.4 and +0.4
            const wave = roundedSquareWave(t, 0.15 + (0.2 * dist) / 72, 0.4, 1 / 3.8)

            // Scale initial position by our oscillator
            vec.copy(positions[i]).multiplyScalar(wave + 1.3)

            // Apply the Vector3 to a Matrix4
            transform.setPosition(vec)

            // Update Matrix4 for this instance
            ref.current.setMatrixAt(i, transform)
        }
        ref.current.instanceMatrix.needsUpdate = true
    })
    return (
        <instancedMesh ref={ref} args={[null, null, 10000]}>
            <circleBufferGeometry args={[0.15]}/>
            <meshBasicMaterial/>
        </instancedMesh>
    )
}

const Index = () => {
    const { colorMode } = useColorMode();

    const { t } = useTranslation();

    const navbar = useMemo(() => {
        return <TopBar/>
    }, []);

    return <>
        {navbar}
        <StyledHome>
            <TopSection colorMode={colorMode}>
                <Canvas style={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                    height: 500,
                    zIndex: -1
                }}
                        orthographic camera={{ zoom: 20 }}
                >
                    <Effects/>
                    <Dots/>
                </Canvas>
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
                    textAlign={'center'}
                    letterSpacing={'-0.05em'}
                    fontWeight={'extrabold'}
                    fontSize={{ base: '34px', md: '40px', lg: '64px', xl: '70px' }}
                    lineHeight={{ base: 1, md: '77px' }}{...nameTitleAnim}>
                    {t('index.krzysztof')}
                </MotionBox>
                <ChakraBox
                    marginTop={3}
                    maxWidth={800}
                    alignSelf={{ base: 'flex-start', md: 'center' }}
                    lineHeight={'30px'}
                    fontWeight={'normal'}
                    textAlign={{ base: 'left', md: 'center' }}
                    padding={{ base: 10, xl: 20 }}
                    fontSize={'xl'}>
                    {t('index.about')}
                </ChakraBox>
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