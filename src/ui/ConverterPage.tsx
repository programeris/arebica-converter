import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { IconButton, MenuItem, Select, TextField, Tooltip } from "@material-ui/core"
import { convertCyrillicToArebica, convertLatinToArebica } from "../HelperFunctions"
import {CopyToClipboard} from 'react-copy-to-clipboard';

const ConverterPageRoot = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: calc(100vh - 100px);
    width: 80%;
    margin-top: 60px;
    padding-top: 10px;
    padding-bottom: 0;
    max-width: 1000px;
    margin-left: auto;
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
        border-color: #000 !important;
    }
`

const Label = styled.div`
    font-size: 18px;
    font-weight: bold;
    height: 32px;
    font-family: 'Calibri';
`

const ConverterPage: React.FunctionComponent = () => {
    const [currentScript, setCurrentScript] = useState<"lat" | "cyr">("lat")

    const [latinText, setLatinText] = useState<string>("")
    const [cyrillicText, setCyrillicText] = useState<string>("")
    const [arebicaText, setArebicaText] = useState<string>("")

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
            <Label>
                {
                    false && 
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={currentScript}
                    onChange={(e: any) => setCurrentScript(e.target.value)}>
                    <MenuItem value={"lat"}>Latinica</MenuItem>
                    <MenuItem value={"cyr"}>Ćirilica</MenuItem>
                </Select>
                }
                Latinica
            </Label>
            {
                currentScript === "lat" &&
                <TextField
                multiline
                variant="outlined"
                rows={4}
                rowsMax={10}
                value={latinText}
                onChange={(e:any) => setLatinText(e.target.value)}
                inputProps={{style: {fontSize: 18, lineHeight: 1.5, fontFamily:"Calibri"}}}
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
                rowsMax={10}
                value={cyrillicText}
                onChange={(e:any) => setCyrillicText(e.target.value)}
                inputProps={{style: {fontSize: 18, lineHeight: 1.5, fontFamily:"Calibri"}}}
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
            rowsMax={10}
            value={arebicaText}
            inputProps={{readOnly: true, style: {fontSize: 18, lineHeight: 1.5, fontFamily:"Calibri"}}}
            size="medium"
            />
            
            <Tooltip title="Kopiraj tekst">
                <CopyToClipboard text={arebicaText}>
                <IconButton color="default" style={{width: "40px", fontSize: "14px", float: "right"}} >
                    <img src="./assets/icon_copy.jpg" width="40" height="40" alt="Kopiraj tekst" />
                </IconButton>
                </CopyToClipboard>
            </Tooltip>
        </TextFieldContainer>
        
        </form>
    </ConverterPageRoot>
}

export default ConverterPage