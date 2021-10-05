import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
function Header() {
  return (
    <Container>
      <a href="#dsf">
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <Menu>
        <a href="#ad">Model S</a>
        <a href="#ad">Model 3</a>
        <a href="#as">Model X</a>
        <a href="#as">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="#as">Shop</a>
        <a href="#as">Tesla Account</a>
        <CustomMenu></CustomMenu>
      </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`
const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768px){
    display: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;


`
