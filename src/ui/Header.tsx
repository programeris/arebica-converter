import React from "react"
import styled from "styled-components"

const HeaderRoot = styled.div`
    top: 0;
    position: fixed;
    height: 60px;
    font-size: 24px;
    text-align: center;
    font-family: 'Calibri';
    font-weight: bold;
    z-index: 100;
    background: #fff;
    width: 100%;
    
    border-bottom: 1px solid #888888;
    image-rendering: -webkit-optimize-contrast;
    -webkit-box-shadow: 0 5px 15px #888888;
    -moz-box-shadow: 0 5px 15px #888888;
    box-shadow: 0 5px 15px #888888;

`

const HeaderContainer = styled.div`
    margin-top: 5px;
    width: 100%;
`

const InfoButtonContainer = styled.div`
    float: left;
    display: inline-block;
    height: 50px;
    padding-top: 10px;
    padding-left: 10px;
    cursor: pointer;
`

const LogoContainer = styled.div`
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
`

const AlphabetButtonContainer = styled.div`
    float: right;
    display: inline-block;
    height: 50px;
    padding-top: 5px;
    padding-right: 15px;
    cursor: pointer;
`

interface HeaderProps {
    showInfo: boolean
    setShowInfo: (toggled: boolean) => void
    showAlphabet: boolean
    setShowAlphabet: (toggled: boolean) => void
}

const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => {
   
    function onInfoButtonClick() {
        props.setShowInfo(!props.showInfo)
        props.setShowAlphabet(false)
    }

    function onLogoClick() {
        props.setShowInfo(false)
        props.setShowAlphabet(false)
    }

    function onAlphabetButtonClick() {
        props.setShowAlphabet(!props.showAlphabet)
        props.setShowInfo(false)
    }

    return <>
    <HeaderRoot>
        <HeaderContainer>
            <InfoButtonContainer onClick={() => onInfoButtonClick()}>
                <img src="./assets/icon_info.png" width="30" height ="30" alt ="Info" />
            </InfoButtonContainer>

            <LogoContainer onClick={() => onLogoClick()}>
                <img src="./logo192.png" width="50" height="50" alt="Arebica Converter" />
            </LogoContainer>

            <AlphabetButtonContainer onClick={() => onAlphabetButtonClick()}>
                <img src="./assets/icon_alphabet.png" width="40" height ="40" alt ="Harfovica" />
            </AlphabetButtonContainer>
        </HeaderContainer>
        
    </HeaderRoot>
    </>
}

export default Header