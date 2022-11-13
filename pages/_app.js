import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/components/cssReset";
import ColorModeProvider, {ColorModeContext }from "../src/components/Menu/ColorMode";
import RegisterVideo from "../src/components/RegisterVideos";



const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#fffcfc",
    }
};


function ProviderWrapper(propriedades) {
    return (
        <ColorModeProvider initialMode={"dark"}>
             {propriedades.children}
        </ColorModeProvider>
    )
}

function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);
     
    return (
        
        
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />
                <Component {...pageProps} />
                <RegisterVideo />
            </ThemeProvider>

        
            
        
        
    )
}
  export default function _App(propriedades) {
    return (
        <ProviderWrapper>
            <MyApp {...propriedades} />
        </ProviderWrapper>
    )
  };
