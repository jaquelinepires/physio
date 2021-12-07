import styled from "styled-components"

export const Container = styled.div`
margin-top: 4rem;

table { 
  width: 100%;
  border-spacing: 0 0.5rem;

  th { 
    font-weight: 400 bold;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
  td { 
    padding: 1rem 2rem;
    border: 0;
    background: ${props => props.theme.colors.bgcard};
    border-radius: 0.25rem;

    &.admission { 
      color: ${props => props.theme.colors.coloradmission}
    }
    
    &.withdraw { 
      color: ${props => props.theme.colors.colorwithdraw}
    }
  
}
}
`