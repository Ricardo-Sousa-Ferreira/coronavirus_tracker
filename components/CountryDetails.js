import useStats from "../utils/useStats.js"
import styled from "styled-components"

const CountryDetailsContainer = styled.div`
margin: 10px;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 1.2em;
`;

const StatBox = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items:center;
    font-size: 2rem;
`;

const Boxtitle = styled.h3`
    margin: 20px;
`;

function CountryDetails(props) {
    const stats = useStats("http://covid19.mathdro.id/api/countries/" + props.country);
    if(!stats) return <p>Loading...</p>
    return (
    <CountryDetailsContainer>
        < StatBox>
            <Boxtitle>Confirmed</Boxtitle>
            <span>{stats.confirmed.value}</span>
        </ StatBox>
        < StatBox>
            <Boxtitle>Deaths</Boxtitle>
            <span>{stats.deaths.value}</span>
        </ StatBox>
        < StatBox>
            <Boxtitle>Recovered</Boxtitle>
            <span>{stats.recovered.value}</span>
        </ StatBox>
    </CountryDetailsContainer>
    )
}
export default CountryDetails