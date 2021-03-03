import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import DialogsContainer from './Components/Pages/Dialogs/DialogsContainer'
import News from './Components/Pages/News/News'
import Music from './Components/Pages/Music/Music'
import Settings from './Components/Pages/Settings/Settings'
import UsersContainer from './Components/Pages/Users/UsersContainer'

function App(props) {

  return (
   <BrowserRouter>
    <div className="container">
      <Header></Header>

      <div className="row pt-3">
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/dialogues' render={() => <DialogsContainer></DialogsContainer>}></Route>
        <Route path='/profile' render={() => <Profile></Profile>}></Route>
        <Route path='/users' render={() => <UsersContainer></UsersContainer>}></Route>
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
