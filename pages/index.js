import Stats from "../components/Stats.js"
import CountrySelector from "../components/CountrySelector.js"
import styled from "styled-components"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
    font-family: 'Roboto', sans-serif;
    
   

`;

const Title = styled.h1`
font-size: 3em;
margin-bottom: 0px
`;

export default function IndexPage() {
    return (
        <MainContainer>
            <Title>Covid-19 Tracker</Title>
            <Stats></Stats>
            <CountrySelector></CountrySelector>
        </MainContainer>
    )
}