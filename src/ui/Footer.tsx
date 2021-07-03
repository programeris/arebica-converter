import React from "react"
import styled from "styled-components"

const FooterRoot = styled.div`
    bottom: 0;
    position: fixed;
    height: 40px;
    text-align: center;
    font-family: 'Calibri';
    width: 100%;
    border-top: 1px solid #999999;
    background: #fff;
    z-index: 100;
`

const FooterContainer = styled.div`
    margin-top: 12px;

`

const Footer: React.FunctionComponent = () => {
    return <FooterRoot>
        <FooterContainer>
        © Meris Gutošić {new Date().getFullYear()}
        </FooterContainer>
    </FooterRoot>
}

export default Footer