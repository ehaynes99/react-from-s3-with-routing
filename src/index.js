    import React from 'react'
    import ReactDOM from 'react-dom'
    import './index.css'
    import App from './App'
    import { createBrowserHistory } from 'history'

    const replaceHashPath = () => {
      const history = createBrowserHistory()
      const hash = history.location.hash
      if (hash) {
        const path = hash.replace(/^#/, '')
        if (path) {
          history.replace(path)
        }
      }
    }
    replaceHashPath()

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root'),
    )
