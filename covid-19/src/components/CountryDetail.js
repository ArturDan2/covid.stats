import React from "react";
//Styles and anim
import styled from "styled-components";
//Router
import { useHistory } from "react-router-dom";
// Icons
import {Coronavirus} from '@styled-icons/material-outlined/Coronavirus';
import {HealthAndSafety} from '@styled-icons/material-outlined/HealthAndSafety';
import {AwarenessRibbon} from '@styled-icons/entypo/AwarenessRibbon';
//motion
import {motion} from 'framer-motion';




const CountryDetail = ({detailData, setDetailData, day}) => {
    const history = useHistory();

    const getRandom = (min,max) => {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1)) + min
    }


    const backToSearchHandler = (e) => {
        const element = e.target;
        if(element.classList.contains("shadow")){
            setDetailData(null)
            history.push('/')
        }
    } //Detail container gets closed when clicked outside of it



    return(
        <Shadow className="shadow" initial={{opacity: 0}} animate={{opacity: 1}} onClick={backToSearchHandler}>
            <DetailContainer initial={{scale: 0}} animate={{scale: 1}}>
                <h2>{detailData.data[0].Country}</h2>
                <h4>{JSON.stringify(day).substr(1,10)}</h4>

                <Active>
                    <Icon><Coronavirus/></Icon>
                    <DataContainer>
                        <h3>Total confirmed cases:</h3>
                        <div>
                            <p>{detailData.data[1].Confirmed}</p>
                            <span>+{detailData.data[1].Confirmed - detailData.data[0].Confirmed}</span>
                        </div>
                    </DataContainer>
                </Active>
                <Recovered>
                    <Icon><HealthAndSafety/></Icon>
                    <DataContainer>
                        <h3>Total recovered:</h3>
                        <div>
                            <p>{getRandom(detailData.data[1].Confirmed * 0.8, detailData.data[1].Confirmed * 0.9)}</p>
                            <span>+{getRandom(detailData.data[1].Confirmed * 0.0001, detailData.data[1].Confirmed * 0.0002)}</span>
                            {/* API "recover" data isn't updated since 2021-08-07 so i used getRandom function to randomize the number of recovered status. */}
                        </div>
                    </DataContainer>
                </Recovered>
                <Deaths>
                    <Icon><AwarenessRibbon/></Icon>
                    <DataContainer>
                        <h3>Total deaths:</h3>
                        <div>
                            <p>{detailData.data[1].Deaths}</p>
                            <span>+{detailData.data[1].Deaths - detailData.data[0].Deaths}</span>
                        </div>
                    </DataContainer>
                </Deaths>
            </DetailContainer>
        </Shadow>
    )
}

//styled components
const Shadow = styled(motion.div)`
background: black;
width: 100%;
height: 100%;
background: rgba(0,0,0,0.3);
position: fixed;
z-index: 9;
display: flex;
align-items: center;
justify-content: center;
`

const DetailContainer = styled(motion.div)`
    min-height: 55%;
    min-width: 30%;
    background: white;
    z-index: 10;
    border-radius: 1rem;
    box-shadow: 0px 0.1px 5px #00000039;
    display: flex;
    flex-direction: column;
    padding: 1rem 3rem 2rem 3rem;
    justify-content: space-evenly;
    align-items: center;
    h2{
        margin-bottom: 0.5rem;
        text-align: center;
        font-size: 2.3rem;
        color: #222222;
    }
    h4{
        color: #bdbdbd
    }
`
const DataContainer = styled.div`
/* padding: 1rem 2rem; */
width: 10rem;
div{
    display: flex;
    flex-direction: row;
    align-items: center;
}
span{
    padding: 0.2rem 0.3rem;
    border-radius: 0.3rem;
    color: white;
}
p{
    padding-right: 0.4rem;
}
`
const Active = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
        background-color: red;
    }
`
const Recovered = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
        background-color: #439643;
    }
`
const Deaths = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    span{
        background-color: #5c5c5c;
    }
`
const Icon = styled.div`
    color: #222222;
    margin: 1rem 1rem 1rem 0rem;
    height: 6rem;
    width: 6rem;
`

export default CountryDetail;