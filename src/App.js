import React from 'react'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <main>
    		<div className="intro">
          <h1>
            Hello, I'm Alex Torres
            <span role="img" aria-label="wave"> 👋 </span>
          </h1>
        </div>
        <p className="tagline">Lifelong Learner | Clean Coder | Team Player</p>
        <div className="icons-social">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/alextorres94" aria-label="github link">
          <i className="fab fa-github"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/atorreserades" aria-label="twitter link">
          <i className="fab fa-twitter"></i>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alextorreserades" aria-label="linkedin link">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </main>

    </div>
  )
}

export default App
