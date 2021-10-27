import React, { useEffect, useState } from "react";
//Axios
import axios from "axios";
//Styles
import styled from "styled-components";
//Components
import CountryDetail from "./CountryDetail";
import Inputs from "./Inputs";

const Home = () => {
    //state
    const [countries, setCountries] = useState(null);
    const [day, setDay] = useState([]);
    const [detailData, setDetailData] = useState(null);
    //getting data from API
    useEffect(() => {
        axios
        .get(
            "https://api.covid19api.com/countries"
        )
        .then((data) => {
            setCountries(data.data)
        })
    },[]);


    return(
        <MainSearch>
            {detailData &&
            <CountryDetail
                detailData={detailData}
                setDetailData={setDetailData}
                day={day}
            />}
            <Inputs
                countries={countries}
                setCountries={setCountries}
                setDay={setDay}
                day={day}
                setDetailData={setDetailData}
                detailData={detailData}
                />
        </MainSearch>
    )
}

//styled components
const MainSearch = styled.div`
    height: 100vh;
    background: linear-gradient(328deg, rgba(255,255,255,1) 0%, rgba(92,223,255,1) 63%);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: hidden;
    `
export default Home;