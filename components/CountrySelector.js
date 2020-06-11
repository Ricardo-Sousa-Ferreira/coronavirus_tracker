import { useState } from 'react';
import useStats from "../utils/useStats.js"
import CountryDetails from "./CountryDetails"
import styled from "styled-components"

const CountrySelectorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    font-size: 1.2em;
    margin-top:30px;
    border: 2px solid ;
    border-radius: 10px;

`;

const SelectInput = styled.select`
    margin-top: 20px;
    font-size: 1.1em;
    width: 280px;
    padding-left:5px;
`;

function CountrySelector() {
    const countries = useStats('https://covid19.mathdro.id/api/countries');
    const [selectedCountry, setSelectedCountry] = useState('PT');
    const [selectedCountryText, setSelectedCountryText] = useState('Portugal');
    if(!countries) return <p>Loading...</p>
    return (
    <CountrySelectorContainer>
        
       <SelectInput
        onChange={e => {
            setSelectedCountryText(e.target.options[e.target.selectedIndex].text);
            setSelectedCountry(e.target.value);
        }}
        value = {selectedCountry}
        >
       {countries.countries.map(function(country){
           return(
            <option
                key={country.iso2}
                value={country.iso2}
            >
                {country.name}
            </option>
           )
        })}
       </SelectInput>
       <h1>{selectedCountryText}</h1>
       <img src={`https://www.countryflags.io/${selectedCountry}/flat/64.png`}></img>
       <CountryDetails country = {selectedCountry}></CountryDetails>
    </CountrySelectorContainer>
    

    )
}

export default CountrySelector