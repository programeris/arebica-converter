import React from "react"
import styled from "styled-components"

const AlphabetPageRoot = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: calc(100vh - 100px);
    width: 80%;
    padding-top: 10px;
    margin-top: 60px;
    padding-bottom: 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

const AlphabetPageContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url("./assets/arebica.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`


const AlphabetPage: React.FunctionComponent = () => {
    return <AlphabetPageRoot>
        <AlphabetPageContent />
    </AlphabetPageRoot>
}

export default AlphabetPage