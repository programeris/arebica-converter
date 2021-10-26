import React from "react"
import ConverterPage from "./ConverterPage"
import styled from "styled-components"

const ContentRoot = styled.div`
    display: flex;
    position: relative;
    overflow-y: auto;
`

const Content: React.FunctionComponent = () => {
    return <ContentRoot>
        <ConverterPage />
    </ContentRoot>
}

export default Content