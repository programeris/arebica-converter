import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { IconButton, MenuItem, Select, TextField, Tooltip } from "@material-ui/core"
import { convertCyrillicToArebica, convertLatinToArebica } from "../HelperFunctions"
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ConverterPageRoot = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: auto;
    width: 80%;
    margin-top: 0;
    padding-bottom: 0;
    max-width: 1000px;
    margin-left: auto;
    background: transparent;
    margin-right: auto;
`

const TextFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    min-height: 200px;
    margin-left: auto;
    margin-right: auto;

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: transparent !important;
    }
`

const IconContainer = styled.div`
    display: block;


    &:active {
        transform: translateY(2px);
      }
`

const Label = styled.div`
    font-size: 18px;
    font-weight: bold;
    height: 32px;
    width: 80px;
    font-family: 'Roboto';
    color: #fff;
`

const ConverterPage: React.FunctionComponent = () => {
    const [currentScript, setCurrentScript] = useState<"lat" | "cyr">("lat")

    const [latinText, setLatinText] = useState<string>("")
    const [cyrillicText, setCyrillicText] = useState<string>("")
    const [arebicaText, setArebicaText] = useState<string>("")

    const [classNames, setClassNames] = useState<string>("")

    useEffect(() => {
        setLatinText("")
        setCyrillicText("")
        setArebicaText("")
    }, [currentScript])

    useEffect(() => {
        setArebicaText(convertLatinToArebica(latinText))
    }, [latinText])

    useEffect(() => {
        setArebicaText(convertCyrillicToArebica(cyrillicText))
    }, [cyrillicText])

    return <ConverterPageRoot>
        <form noValidate autoComplete="off">
            <TextFieldContainer>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={currentScript}
                    onOpen={
                        () => {
                            setClassNames("menu-label")
                        }
                    }
                    onClose={
                        () => {
                            setClassNames("")
                        }
                    }
                    onChange={(e: any) => setCurrentScript(e.target.value)}>
                    <MenuItem value={"lat"}>
                        <Label className={classNames}>
                            Latinica
                        </Label>
                    </MenuItem>

                    <MenuItem value={"cyr"}>
                        <Label className={classNames}>
                            Ćirilica
                        </Label>
                    </MenuItem>
                </Select>
                {
                    currentScript === "lat" &&
                    <TextField
                        multiline
                        variant="outlined"
                        rows={4}
                        value={latinText}
                        onChange={(e: any) => setLatinText(e.target.value)}
                        inputProps={{ style: { fontSize: 17, lineHeight: 1.5, background: "#fff", fontFamily: "Roboto" } }}
                        size="medium"
                    />
                }
                {
                    currentScript === "cyr" &&
                    <TextField
                        multiline

                        color="primary"
                        variant="outlined"
                        rows={4}
                        value={cyrillicText}
                        onChange={(e: any) => setCyrillicText(e.target.value)}
                        inputProps={{ style: { fontSize: 17, lineHeight: 1.5, background: "#fff", fontFamily: "Roboto" } }}
                        size="medium"
                    />
                }
            </TextFieldContainer>

            <TextFieldContainer dir="rtl">
                <Label>
                    Arebica
                </Label>
                <TextField
                    multiline
                    color="primary"
                    className="arebica-field"
                    variant="outlined"
                    rows={4}
                    value={arebicaText}
                    inputProps={{ readOnly: true, style: { fontSize: 28, background: "#fff", lineHeight: 1.5, fontFamily: "ScheherezadeNew-Regular" } }}
                    size="medium"
                />

                <Tooltip title="Kopiraj tekst">
                    <CopyToClipboard text={arebicaText}>
                        <IconButton style={{ width: "40px", fontSize: "14px", float: "right" }} >
                            <IconContainer>
                                <img src="./assets/copy.svg" width="40" height="40" alt="Kopiraj tekst" />
                            </IconContainer>
                        </IconButton>
                    </CopyToClipboard>
                </Tooltip>
            </TextFieldContainer>

        </form>
    </ConverterPageRoot>
}

export default ConverterPage