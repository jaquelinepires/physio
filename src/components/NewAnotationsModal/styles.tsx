import styled from "styled-components"
import { darken, transparentize } from "polished"
export const Container = styled.form`
  h2{
        color: ${props => props.theme.colors.text};
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input {
      width: 100%;
      padding: 0 0.15rem;
      height: 4rem;
      border-radius: 0.25rem;
      color: ${props => props.theme.colors.text};
      

      background: ${props => props.theme.colors.bginput};
      border: 1px solid #d7d7d7;

      font-weight: 400;
      font-size:1rem;
    
      & + input {
        margin-top: 1rem;

      }
    }
    textarea {
      width: 100%;
      display : block;
      overflow: auto;
      resize: none;
      height: 10rem;
      margin-top: 1rem;
      border-radius: 0.25rem;
      border: 1px solid #d7d7d7;
      padding: 0 0.15rem;
      color: ${props => props.theme.colors.text};

      font-weight: 400;
      font-size:1rem;

      background: ${props => props.theme.colors.bginput};

    }
    button[type="submit"] {
      width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background:${props => props.theme.colors.bgbutton};
        color: ${props => props.theme.colors.text};
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`
export const AnotationsTypeContainer = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;

`;
const colors = {
  green: '#33cc95',
  red:'#e52e4d'
}

interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red';
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0%.25rem;

  background: ${(props) => props.isActive 
  ? transparentize(0.8, colors[props.activeColor]) 
  : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, '#d7d7d7')};
  }

  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }

`