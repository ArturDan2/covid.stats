import React,{useState, useEffect} from 'react';
//styled components
import styled from "styled-components";


const SearchCountry = ({countries, setCountrySlug}) => {
    //state
    const [filteredData, setFilteredData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [countryInputValue, setCountryInputValue] = useState([]);


    //event handlers
    const filterHandler = (event) => {
        const searchWord = event.target.value;
        const newFilter = countries.filter((value) => {
            return value.Country.toLowerCase().includes(searchWord.toLowerCase());
        });
        setCountryInputValue(searchWord);
        setFilteredData(newFilter);
        setCountrySlug('');
        if(searchWord === ""){
            setFilteredData([])
        }
    } // Function filters countries in the list basing on value of searchCountry input. It's being updated in filteredData state, countrySlug is cleard every time value changes.

    const submitCountryHandler = (country) => (e) => {
        setCountryInputValue(country.Country);
        setFilteredData([])
        setCountrySlug(country.Slug);
    } //Function submits choosen country. Filtered data is being cleared, so the list isn't shown after choosing a country.

    //useEffect
    useEffect(()=> {
        document.addEventListener("mousedown", (event)=>{
            const element = event.target;
            if (!element.classList.contains("keep-open")){
                setIsOpen(false)
            }
        });
    }); // List of filtered countries gets hidden when clicked outside of SearchCountry component

    return(
        <StyledSearchCountry className="keep-open">
            <input value={countryInputValue} type="text" placeholder="Country" onChange={filterHandler} onClick={()=>{setIsOpen(true)}}/>

            {filteredData.length !== 0 && (
                <CountryList hide={isOpen}>
                    {filteredData.map((country)=>{
                        return (
                        <CountryListItem className="keep-open" key={country.ISO2} onClick={submitCountryHandler(country)}>{country.Country}</CountryListItem>)

                    })}
                </CountryList>
            )}
        </StyledSearchCountry>
    )
}


//styled components
const CountryList = styled.ul`
    display: flex;
    flex-direction: column;
    visibility: ${props => props.hide === true ? "visible" : "hidden"};
    width: 15rem;
    max-height: 20rem;
    background: white;
    overflow: hidden;
    overflow-y: auto;
    box-shadow: rgba(0,0,0,0.10) 0px 5px 20px;
    z-index: 1;
    &::-webkit-scrollbar{
        width: 0.3rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #40cff3;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }

    @media (max-width: 590px) {
        width: 12rem;
    }
`

const CountryListItem = styled.li`
    padding: 1rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.1rem;
    color: #292929;
    text-decoration: none;
    :hover{
        background: #f5f5f5;
        color: #292929;
        cursor: pointer;
    }

`

const StyledSearchCountry = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input{
        z-index: 3;
    }

`
export default SearchCountry;