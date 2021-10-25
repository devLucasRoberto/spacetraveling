import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyles from './styles/GlobalStyles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Posts from './pages/Posts'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts/:post?" component={Posts} />
        </Switch>

        <GlobalStyles />
      </div>
    </BrowserRouter>
  )
}

export default App
