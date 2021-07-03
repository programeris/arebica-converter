import React, { useState } from "react"
import ConverterPage from "./ConverterPage"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"
import InfoPage from "./InfoPage"
import AlphabetPage from "./AlphabetPage"

const ContentRoot = styled.div`
    display: flex;
    position: relative;
    overflow-y: auto;
`

const Content: React.FunctionComponent = () => {
    const [showInfo, setShowInfo] = useState<boolean>(false)
    const [showAlphabet, setShowAlphabet] = useState<boolean>(false)

    return <ContentRoot>
        <Header showInfo={showInfo} setShowInfo={setShowInfo} showAlphabet={showAlphabet} setShowAlphabet={setShowAlphabet} />
        {
            showInfo &&
            <InfoPage />
        }
        {
            !showInfo && !showAlphabet &&
            <ConverterPage />
        }
        {
            showAlphabet &&
            <AlphabetPage />
        }
        <Footer />
    </ContentRoot>
}

export default Content