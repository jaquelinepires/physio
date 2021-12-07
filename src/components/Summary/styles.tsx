import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 1rem;

  div {
    background: ${props => props.theme.colors.bgcard};
    padding: 1rem 2rem;
    border-radius: 0%.25rem;

    header {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    p {
      font-size: 1.5rem;
    }
    }
    strong {
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      display: flex;
      justify-content:center;
    }  
    button {
        font-size: 1.5rem;
        color: var(--text-title);
        background:${props => props.theme.colors.bgbutton};
        border: 0 ;
        border-radius: 0.25rem;
        
        transition: filter 0.2s;

            &:hover{
                filter: brightness(0.8)
            }    
    }
`