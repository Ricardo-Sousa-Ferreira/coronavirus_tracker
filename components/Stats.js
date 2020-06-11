import useStats from "../utils/useStats.js"
import styled from "styled-components"

const StatContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    border: 2px solid ;
    border-radius: 10px;
    padding: 10px;
    margin-top: 40px;


`;
const StatBox = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2rem;
`;

const Boxtitle = styled.h3`
    margin: 20px;
  
`;

function Stats() {
    const stats = useStats('http://covid19.mathdro.id/api/');
    if(!stats) return <p>Loading...</p>
    return (    
    <StatContainer>
        <StatBox>
        
            <Boxtitle>Confirmed</Boxtitle>
            <span>{stats.confirmed.value}</span>
        </StatBox>
        <StatBox>
            <Boxtitle>Deaths</Boxtitle>
            <span>{stats.deaths.value}</span>
        </StatBox>
        <StatBox>
            <Boxtitle>Recovered</Boxtitle>
            <span>{stats.recovered.value}</span>
        </StatBox>
    </StatContainer>
    )
}

export default Stats