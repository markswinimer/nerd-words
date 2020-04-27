import styled from 'styled-components';

export const StyledBurger = styled.div`
  position: absolute;
  top: .5em;
  right: 1em;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        display: flex;
    }
`;
