import React from 'react';

import {Text} from "@chakra-ui/react";
import {TranslateIcon} from "@heroicons/react/outline";

import LanguageSwitchButton from "components/LanguageSwitchButton/LanguageSwitchButton";
import {useSemanticColor} from "hooks/useSemanticColor";

type DualLanguageSwitchProps = {
    firstLanguage: string,
    secondLanguage: string,
};

const DualLanguageSwitch = (props: DualLanguageSwitchProps) => {

    const { firstLanguage, secondLanguage } = props;

    return <div className={'flex h-full items-center'}>
        {/*<TranslateIcon width={20} color={useSemanticColor('lang-switch-icon')} className={'mt-[2px]'}/>*/}
        <LanguageSwitchButton lang={firstLanguage}/>
        <Text color={'lang-option-separator'}>|</Text>
        <LanguageSwitchButton lang={secondLanguage}/>
    </div>;
};

export default DualLanguageSwitch;