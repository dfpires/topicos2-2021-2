import { createGlobalStyle } from "styled-components";
import imgBackground from '../assets/background.svg'

export const GlobalStyle = createGlobalStyle`

    margin: 0;
    padding: 0;

    body{
        background: #f0f0f5 url(${imgBackground}) no-repeat 70% top;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 2.5rem 1.25rem // rem é 16px 
    }
`