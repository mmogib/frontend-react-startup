import React from 'react'
import {Route} from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import Login from './components/pages/Login'

const App = ()=>(
  <div className="ui container">
    <h1> HI </h1>
    <Route path='/' exact component={HomePage} />
    <Route path='/login' component={Login} />
  </div>

)

export default App;
