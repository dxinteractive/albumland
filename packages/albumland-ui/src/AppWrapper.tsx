import React from 'react';

import {ThemeProvider, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Eczar', sans-serif;
        height: 100%;
        line-height: 1.5em;
        position: relative;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${(props: any) => props.theme.colors.background};
        color: ${(props: any) => props.theme.colors.text.normal};

        font-size: ${(props: any) => props.theme.fontSizes.baseSmall};
        @media (min-width: ${(props: any) => props.theme.breakpoints.sm}) {
            font-size: ${(props: any) => props.theme.fontSizes.base};
        }
        @media (min-width: ${(props: any) => props.theme.breakpoints.lg}) {
            font-size: ${(props: any) => props.theme.fontSizes.baseBig};
        }
    }

    body {
        font-weight: 400;
        height: 100%;
        line-height: 1.5em;
        overflow-x: hidden;
        text-rendering: optimizelegibility;

        &[aria-hidden='true'] {
            overflow: hidden;
        }
    }

    #root {
        height: 100%;
    }
`;

const breakpoints: any = ['575px', '720px', '1000px', '1600px'];

// Named aliases so we dont have to use array order in layout components
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const theme = {
    breakpoints,
    fontSizes: {
        baseSmall: '14px',
        base: '16px',
        baseBig: '18px'
    },
    colors: {
        background: {
            normal: '#FFFFFF'
        },
        text: {
            normal: '#333333'
        }
    },
    textStyles: {
        logo: {
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: '1.5em'
        }
    }
};

type Props = {
    children: React.ReactNode
};

export function AppWrapper(props: Props): React.ReactElement {
    const {children} = props;
    return <>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;700&display=swap" rel="stylesheet" />
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    </>;
}
