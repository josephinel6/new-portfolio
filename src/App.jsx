import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="card">
        <img src="/public/assets/profile.jpg" id="mainphoto" />
        <h1 id="name"> Josephine</h1>
        <h3> High school sophomore</h3>
        <h3> WA </h3>
        <FontAwesomeIcon className="social" id="github" icon={faGithub} href="github.com" onClick={() => location.href = "https://www.github.com/josephinel6"} />
        <FontAwesomeIcon className="social" icon={faEnvelope} href="mailto:mailjosephinel@gmail.com" onClick={() => location.href = "mailto:mailjosephinel@gmail.com"} />

      </div>
    </>

  )
}

export default App
