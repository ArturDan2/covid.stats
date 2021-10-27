import React,{useState} from "react";
//Axios
import axios from "axios";
//Styles
import styled from "styled-components";
import {SearchAlt} from "@styled-icons/boxicons-regular/SearchAlt";
//Components
import Date from "./Date";
import SearchCountry from "./SearchCountry";
//Router
import {Link} from "react-router-dom";
//Animations
import {motion} from "framer-motion";
import { searchIconAnim } from "./animation";

const Inputs = ({countries,setDay,day,setDetailData, detailData}) => {
    //state
    const [errorMessage, setErrorMessage] = useState('');
    const [countrySlug, setCountrySlug] = useState();

    //event handlers
    const errorHandler = (err) => {
        if(err.response){
            console.log("Problem with Response", err.response.status);
            setErrorMessage("Chceck if provided country is correct.");
        } else if (err.request){
            console.log("Problem with request!");
            setErrorMessage("Check your internet connection.");
        } else {
            console.log('Error', err.message);
        }
    }


    const searchDetailsHandler = () => {
        if(day && day.length !== 0){
            axios
        .get(
            `https://api.covid19api.com/total/country/${countrySlug}?from=${JSON.stringify(day.decreaseDays(1)).substr(1,10)}T00:00:00Z&to=${JSON.stringify(day).substr(1,10)}T00:00:00Z`
        )
        .then((data) => {
            if (data.data.length !== 2){
                setErrorMessage("Data for that day is not updated.")
            } else {
            setDetailData(data)
            setErrorMessage('')
            }
        })
        .catch(errorHandler)
        console.log(detailData)
    }else{
        setErrorMessage('Check if provided date is correct.');
    }
        } //Function gets detailed covid data. It relays on two states: countrySlug and day, which are set by using inputs.

return(

    <Container>
        <h4>{errorMessage}</h4>
        <SearchInputs>
            <Date
                setDay={setDay}
                day={day}
            />
            <SearchCountry
                countries={countries}
                setCountrySlug={setCountrySlug}
            />
            <Icon to={`/country/${countrySlug}`} onClick={searchDetailsHandler} variants={searchIconAnim} initial="rest" whileHover="hover" whileTap="pressed"><SearchAlt size="40" color="white"/></Icon>
        </SearchInputs>
    </Container>
)
}

//styled components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15rem;
    height: 30rem;
    h4{
        display: block;
        height: 1.2rem;
        font-size: 0.9rem;
        color: #da5757;
        font-weight: 500;
    }
`
const SearchInputs = styled.div`
    /* margin-top: 15rem; */
    display: flex;
    justify-content: center;
    z-index: 2;
    input{
        width: 15rem;
        height: 3rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        text-align: center;
        color: #292929;
        background: white;
        ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: #9b9b9b;
            opacity: 1; /* Firefox */
        }

        :-ms-input-placeholder { /* Internet Explorer 10-11 */
            color: #9b9b9b;
        }

        ::-ms-input-placeholder { /* Microsoft Edge */
            color: #9b9b9b;
        }
        }

    @media (max-width: 590px) {
        input{
            width: 12rem;
            font-size: 1.4rem;
        }
    }
`

const Icon = styled(motion(Link))`
    background: #40cff3;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem;
    cursor: pointer;
    z-index: 4;
`

export default Inputs;