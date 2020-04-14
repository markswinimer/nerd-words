import styled from 'styled-components';

export const StyledChooseMode = styled.div`
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    width: 300px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
    }
`

export const StyledCreate = styled.div`
    display: flex;
    flex-direction: column;
`