import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledMenu = styled.nav`
    width: 15em;
    height: 100%;
    background-color: ${({ theme }) => theme.primaryBackground};
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
        height: ${({ open }) => open ? 'auto' : '0%'};
        width: 100%;
        flex-direction: column;
    }
    .user {
      padding-left: 1em;
      padding: 2em 0em 3em 1em;
      background-color: #F5F5F5;
      color: #A9A9A9;
      font-size: .8em;
      #name {
        font-size: 1.5em;
        font-family: 'Raleway';
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

.Menu-link.unavailable {
    opacity: .4;

}
.Menu-link.unavailable:hover {
    cursor: not-allowed;
    color: #808080;
    background-color: #E0E0E0;
    border-top: 1px solid silver;
}

.Menu-copywrite {
    margin-top: auto;
}

`
export const StyledLink = styled(Link)`
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

    :hover {
      background-color: #F8F8F8;
      color: #d87171;
      border-top: 1px solid #F8F8F8;
    }
    .active {
      background-color: white;
      color: #c73636;
      border-top: solid 1px white;
      pointer-events: none;
    }

`

// export const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: ${({ theme }) => theme.primaryBackground};
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease-in-out;
  
//   @media (max-width: ${({ theme }) => theme.mobile}) {
//     width: 100%;
//   }

//   a {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: ${({ theme }) => theme.primaryDark};
//     text-decoration: none;
//     transition: color 0.3s linear;
    
//     @media (max-width: ${({ theme }) => theme.mobile}) {
//       font-size: 1.5rem;
//       text-align: center;
//     }

//     &:hover {
//       color: ${({ theme }) => theme.primaryHover};
//     }
//   }
// `;