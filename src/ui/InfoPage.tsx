import React from "react"
import styled from "styled-components"

const InfoPageRoot = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: calc(100vh - 55px);
    width: 90%;
    padding-bottom: 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

const TextRoot = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    padding-top: 20px;
    margin-top: 60px;
    margin-bottom: 40px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
`

const TextFieldContainer = styled.div`
    display: inline;
    text-align: justify;
    font-size: 20px;
    margin-bottom: 30px;

    a {
        display: inline;
        color: #000;
        text-decoration: underline;
    }
`


const InfoPage: React.FunctionComponent = () => {
    return <InfoPageRoot>

        <TextRoot>
            <TextFieldContainer>
                Pred vama je prvi online tekst konvertor za bosansku arebicu. O samoj bosanskoj arebici i njenoj historiji svakako više možete saznati na internetu, pa ću ovdje istaći nekoliko bitnih stvari za Arebica Converter.
            </TextFieldContainer>
            
            <TextFieldContainer>
                Za potrebe Arebica Converter-a korištena je verzija bosanske arebice kojom je pisano posljednje djelo objavljeno na njoj - strip "Hadži Šefko i hadži Mefko" iz 2005. godine, autora Amira Al-Zubija i Melihe Čičak-Al-Zubi. Harfovica (tablica sa poređenjem latiničnih i arebičnih slova) objavljena uz taj strip iskorištena je i na ovom sajtu.
            </TextFieldContainer>
            <TextFieldContainer>
                Činjenica je da je bosanska arebica u praksi skoro pa izumrlo pismo, te ne iznenađuje manjak računarske podrške za posebna arebična slova korištena u bosanskom jeziku. Unicode standard ne podržava dva bosanska arebična slova (predstavljaju glasove Nj i Ć), pa su u pripremi slova za Arebica Converter iskorištene male zaobilaznice, kako bi se karakteri prilagodili što bliže izgledu bosanskih slova. Već neko vrijeme je <a href="http://www.unicode.org/L2/L2019/19339-bosnian-arabic.pdf" target="_blank" rel="noreferrer">aktivan prijedlog za standardizaciju ovih slova</a>, pa je za nadati se da ćemo u skoroj budućnosti imati standardizovanu kompletnu bosansku arebicu.
            </TextFieldContainer>
            <TextFieldContainer>
                Arebica Converter namijenjen je za konvertovanje latiničnog teksta na bosanskom jeziku u arebični tekst. Samim time, karakteri koji svakako nisu standardni u bosanskom jeziku (npr. Q, Y, X), neće moći biti konvertovani. Za potpuno ispravan rezultat najbolje je riječi i imena stranog porijekla pisati onako kako se i izgovaraju (npr. Mančester umjesto Manchester, Fejzbuk umjesto Facebook itd).
            </TextFieldContainer>
            <TextFieldContainer style={{paddingBottom: "60px"}}>
                Za sve prijedloge i primjedbe, <a href="mailto:meris.gutosic@gmail.com">slobodno me kontaktirajte</a>. Prvi put je nešto ovakvo urađeno, mora vala bit grešaka.
                Nadam se da će vam se Arebica Converter svidjeti i da će vam na bilo kakav način koristiti, makar to bilo i za opis na Instagramu.

                <br /><br />
                Meris
            </TextFieldContainer>
        </TextRoot>
    </InfoPageRoot>
}

export default InfoPage