import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/first" />
          </Route>
          <Route path="/first" component={FirstPage} />
          <Route path="/second" component={SecondPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
