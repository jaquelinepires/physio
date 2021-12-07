import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext} from 'styled-components'
import { Link } from 'react-router-dom'
import { Container, Content} from './styles'
import { shade } from 'polished'
import logoImg from '../../assets/logo.png'

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Gophysio" />
    <Switch 
      onChange={toggleTheme}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor={shade(0.15, colors.primary)}
      onColor={colors.secundary}
      />
        <button type="button">New patient</button>
      </Content>
    </Container>
  )
}

export default Header