import React from 'react'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import News from './Components/News/News'
import Music from './Components/Music/Music'
import Settings from './Components/Settings/Settings'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {

  return (
   <BrowserRouter>
    <div className="container">
      <Header></Header>

      <div className="row pt-3">
      <Navbar></Navbar>
      <Switch>
      <Route path='/dialogs' component={Dialogs}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/news' component={News}></Route>
      <Route path='/music' component={Music}></Route>
      <Route path='/settings' component={Settings}></Route>
      </Switch>
      </div>

    </div>
   </BrowserRouter>
  )
}

export default App
