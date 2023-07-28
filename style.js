import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    main {
        display: flex;
        justify-content: center;
    }
`

export default EstiloGlobal

export const Container = styled.div`

    h1 {
        display: flex;
        justify-content: center;
        margin-bottom: 40px;
    }

    img {
        height: 300px;
    }

`