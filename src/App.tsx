import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Post from './pages/Post'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/:post?" component={Post} />
      </Switch>

      <GlobalStyles />
    </BrowserRouter>
  )
}

export default App
