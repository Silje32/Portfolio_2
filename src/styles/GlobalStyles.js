import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.colors.body};
        font-size: 15px;
        color: black;
        flex-grow: 1;
        width: 100‰;
    }
`;

export default GlobalStyles;
