import { ThemeProvider, DefaultTheme} from 'styled-components'
import usePersistedState from './utils/usePersistedState'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import Header from './components/Header'
import { GlobalStyle } from './styles/global'
import { Dashboard } from './components/Dashboard'

const App = () => {

  

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme}/>
    </div>
    <Dashboard />
   
    </ThemeProvider>
  );
}

export default App;
