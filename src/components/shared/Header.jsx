import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './../../assets/logo.jpg'

const Header = () => {
    return (
        <HeaderContainer>
            <NavStyles to='/'>
                <LogoStyles>
                    <img src={Logo} alt="" />
                </LogoStyles>
            </NavStyles>
            <NavContainer>
                <ul>
                    <ListItem><NavStyles to='/login'><i className="fa-solid fa-user"></i>Login</NavStyles></ListItem>
                    <ListItem><NavStyles to='/purchases'><i className="fa-solid fa-bag-shopping"></i>Purchase</NavStyles></ListItem>
                    <ListItem><i className="fa-solid fa-cart-shopping"></i></ListItem>
                </ul>
            </NavContainer>
        </HeaderContainer>
    )
}

const NavStyles = styled(NavLink)`
    margin: 0 12px;
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: 600;
    color: rgba(0, 0, 0, .6);

    &>i{
        margin-right: 5px;
    }
`

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
`

const LogoStyles = styled.div`
    &>img{
        width: 200px;
    }
`

const NavContainer = styled.nav`
    &>ul{
        list-style: none;
        display: flex;
    }
`
const ListItem = styled.li`
    font-size: 1.2rem;
    &>i{
        color: rgba(0, 0, 0, .6);
    }
    &:hover,
    &:focus{
        border-bottom: 1px solid rgba(0, 0, 0, .9);
        color: rgba(0, 0, 0, .9);
    }
`

export default Header