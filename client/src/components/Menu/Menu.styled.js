import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Label } from '../../global'

export const MenuContainer = styled.div`
  height: 100vh;
  width: 300px;
  padding: 2em 0 0 4em;  
`
export const StyledMenu = styled(Card)`
    min-width: 15em;
    background-color: ${({ theme }) => theme.primaryBackgroundLight};
    display: flex;
    flex-direction: column;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        height: ${({ open }) => open ? '0%' : 'auto'};
        display: ${({ open }) => open ? 'flex' : 'none'};
        width: 100%;
        flex-direction: column;
    }

    .user {
      padding-left: 1em;
      padding: 2em 0em 3em 1em;
      background-color: #F5F5F5;
      font-size: .8em;
      font-family: 'Roboto';

      #name {
        color: #c73636;
        font-size: 1.5em;
        font-family: 'Roboto';
        margin-bottom: 1em;
      } 
      p {
        margin-top: .25em;
        margin-bottom: .25em;
      }
    }
    h3 { 
        margin-bottom: .2em;
    }

  .icon {
      margin-right: .5em;
      font-size: 1.75em;
  }

  .Menu-link {
      color: #808080;
      display: flex;
      flex-direction: row;
      justify-content: left;
      vertical-align: middle;
      align-items: center;
      height: 4em;
      padding-left: 1em;
      background-color: #E0E0E0;
      border-top: 1px solid silver;
      font-family: 'Roboto Condensed';
      transition: .1s ease-in;
  }


  .Menu-link:hover {
      background-color: #F8F8F8;
      color: #d87171;
      border-top: 1px solid #F8F8F8;
  }

  .Menu-link.active {
      background-color: white;
      color: #c73636;
      border-top: solid 1px white;
      pointer-events: none;
  }
`
export const StyledMenuLink = styled(Link)`
    color: #808080;
    display: flex;
    flex-direction: row;
    justify-content: left;
    vertical-align: middle;
    align-items: center;
    height: 4em;
    padding-left: 1em;
    border-top: 1px solid silver;
    font-family: 'Roboto Condensed';
    transition: .1s ease-in;
    background-color: #E0E0E0;

    :hover {
      background-color: #F8F8F8;
      color: #d87171;
      border-top: 1px solid #F8F8F8;
    }
    ${({ active }) => active && `
      background-color: white;
      color: #c73636;
      border-top: solid 1px white;
      border-bottom: solid 4px #c73636;
      padding-top: 4px;
      padding-bottom: 4px;
      :hover {
        background-color: white;
        color: #c73636;
      }
    `}
`

export const Footer = styled.div`
  height: 20px;
`