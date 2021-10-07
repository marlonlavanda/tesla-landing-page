import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'

function Header() {
  const [ burgerStatus, setBurgerStatus ] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a href="#dsf">
        <img src="/images/logo.svg" alt="Tesla logo" />
      </a>
      <Menu>
        { cars && cars.map((car, index) => (
            <a key={index} href="#ad">{car} </a>
          ))
        }
      </Menu>
      <RightMenu>
        <a href="#as">Shop</a>
        <a href="#as">Tesla Account</a>
        <CustomMenu onClick={ () => setBurgerStatus(true) } />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={ () => setBurgerStatus(false) } />
        </CloseWrapper>
        { cars && cars.map((car, index) => (
          <li key={index} >
            <a href="#ad">{car}</a>
          </li>
          ))
        }
        <li><a href="#asd">Existing Inventory</a></li>
        <li><a href="#asd">Used Inventory</a></li>
        <li><a href="#asd">Trade-in</a></li>
        <li><a href="#asd">Cybertruck</a></li>
        <li><a href="#asd">Roadster</a></li>
      </BurgerNav>
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
  z-index: 1;
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
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)' };
  transition: transform 0.2s ;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, .2);

    a {
      font-weight: 600;
    }
  }

`
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`