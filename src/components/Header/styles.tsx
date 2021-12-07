
import styled from 'styled-components'

export const Container = styled.div`
  height: 120px;
  background: ${props => props.theme.colors.primary};
  /* color: #fff; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 30px 0; */
`
  export const Content = styled.div `
    width: 1120px; 
    margin: 0 auto;
    
    padding: 2rem 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between ;
    
    button {
      font-size: 1rem;
      color: #fff;
      background: ${props => props.theme.colors.primary};
      border: 0;
      padding: 0rem 2rem;
      border-radius: 0.25rem;

      transition: filter 0.2s;
      &:hover {
        filter: brightness(0.9)
      }
    }
  
`