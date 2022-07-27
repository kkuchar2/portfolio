import {extendTheme} from "@chakra-ui/react";

// Define tokens
const tokens = {
    colors: {
        'default': {
            'bg-default': "#fafafa",
            'bg-navbar': "#fafafa",
            'text-default': "#333",
            'text-lang-option': "#a2a2a2",
            'text-lang-option-active': "#333",
            'text-lang-option-hover': "#333",
            'text-lang-option-hover-active': "#333",
            'lang-option-separator': "#a2a2a2",
            'lang-switch-icon': "rgba(0,0,0,0.3)",
            'theme-switch-icon': "#A0AEC0",
            'rainbow': `linear-gradient(135deg, #0e73cc 1.93%, #624bbb 14.86%, #ff455d 48.09%, #f35815 77.82%, #f2b600 97.3%)`,
        },
        _dark: {
            'bg-default': "#1d1d1d",
            'bg-navbar': "#1d1d1d",
            'text-default': "#dfdfdf",
            'text-lang-option': "#666666",
            'text-lang-option-active': "#dfdfdf",
            'text-lang-option-hover': "#dfdfdf",
            'text-lang-option-hover-active': "#dfdfdf",
            'lang-option-separator': "#666666",
            'lang-switch-icon': "rgba(255,255,255,0.19)",
            'theme-switch-icon': "#e6e6e6",
            'rainbow': `linear-gradient(135deg, #0e73cc 1.93%, #624bbb 14.86%, #ff455d 48.09%, #f35815 77.82%, #f2b600 97.3%)`,
        },
    }
};

// Define semantic tokens
const semanticTokens = { colors: {} };
const props = Object.keys(tokens.colors['default']);
props.forEach(prop => {
    semanticTokens['colors'][prop] = {
        'default': tokens.colors['default'][prop],
        '_dark': tokens.colors['_dark'][prop]
    };
});

// define breakpoints
const breakpoints = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
};

// define global styles
const styles = {
    global: {
        body: {
            bg: "none",
            color: 'text-default',
        }
    }
};

// define config
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
};

// define fonts
const fonts = {
    body: `'Inter', sans-serif`,
};

// define font weights
const fontWeights = {
    thin: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
};

// define gradients

const theme = extendTheme({
    config,
    styles,
    tokens,
    semanticTokens,
    breakpoints,
    fonts,
    fontWeights
});

export default theme;