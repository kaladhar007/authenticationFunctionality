import {Route, Switch} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import About from './components/About'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/about" component={About} />
    <ProtectedRoute exact path="/" component={Home} />
    <NotFound />
  </Switch>
)
export default App
