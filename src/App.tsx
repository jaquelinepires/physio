import { ThemeProvider, DefaultTheme} from 'styled-components'
import usePersistedState from './utils/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Header from './components/Header'
import { GlobalStyle } from './styles/global'
import { Dashboard } from './components/Dashboard'
import { AnotationsProvider } from './hooks/useAnotations'

const App = () => {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <AnotationsProvider>
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
    </div>
    <Dashboard />
   
    </ThemeProvider>
    </AnotationsProvider>
  );
}

export default App;
