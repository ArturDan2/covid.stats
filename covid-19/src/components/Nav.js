import React from "react";
//styles
import styled from "styled-components";


const Nav = () => {
    return (
    <StyledNav>
        <Logo onClick={() => {window.location.reload()}}>
            <h1>covid.stats</h1>
        </Logo>
    </StyledNav>)
}


//styled components

const StyledNav = styled.nav`
width: 100vw;
    display: flex;
    justify-content: center;
    padding: 0.8rem 2rem;
    background: #ffffff40;
    position: absolute;
`

const Logo = styled.div`
    cursor: pointer;
    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        font-weight: 100;
        color: #ffffff;
    }
`

export default Nav;