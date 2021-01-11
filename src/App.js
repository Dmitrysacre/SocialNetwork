import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Pages/Dialogs/Dialogs'
import News from './Components/Pages/News/News'
import Music from './Components/Pages/Music/Music'
import Settings from './Components/Pages/Settings/Settings'

function App(props) {

  return (
   <BrowserRouter>
    <div className="container">
      <Header></Header>

      <div className="row pt-3">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/dialogues' render={() => <Dialogs dialogues={props.state.dialogues} dispatch={props.dispatch}></Dialogs>}></Route>
        <Route path='/profile' render={() => <Profile profile={props.state.profile} dispatch={props.dispatch}></Profile>}></Route>
        <Route path='/news' render={() => <News></News>}></Route>
        <Route path='/music' render={() => <Music></Music>}></Route>
        <Route path='/settings' render={() => <Settings></Settings>}></Route>
      </Switch>
      </div>

    </div>
   </BrowserRouter>
  )
}

export default App
