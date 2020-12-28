import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'

const dialoguesData = [
  {id: 1, name: 'Дмитрий', count: 4},
  {id: 2, name: 'Антон', count: 20},
  {id: 3, name: 'Екатерина', count: 17},
]

const messagesData = [
  {id: 1, text: 'Is everything ok?'},
  {id: 2, text: 'Good job'},
  {id: 3, text: 'Ok'},
  {id: 4, text: 'How are you'},
  {id: 5, text: 'Tomorrow it can be'},
  {id: 6, text: 'Lets party tonight'},
]

const postsData = [
  {id: 1, text: 'This is my first post'},
  {id: 2, text: 'This is my second post'},
  {id: 3, text: 'This is my third post'}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogues={dialoguesData} messages={messagesData} posts={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
