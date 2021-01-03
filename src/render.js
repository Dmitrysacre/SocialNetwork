import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { addPost } from './redux/state'

const rerenderApp = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} addPost={addPost}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}

export default rerenderApp