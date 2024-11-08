import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="card">
        <img src="/assets/profile-cropped.jpg" id="mainphoto" />
        <h1 id="name"> Josephine</h1>
        {/* <h3> High school sophomore</h3>  */}
        <h3> WA </h3>
        <FontAwesomeIcon className="social" id="github" icon={faGithub} onClick={() => location.href = "https://www.github.com/josephinel6"} />
        <FontAwesomeIcon className="social" icon={faEnvelope} href="mailto:mailjosephinel@gmail.com" onClick={() => location.href = "mailto:mailjosephinel@gmail.com"} />
        <FontAwesomeIcon className="social" icon={faLinkedin} onClick={() => location.href = "https://www.linkedin.com/in/josephine-li-90ba02324/"} />

        <div className="horizontal-line"></div>

        {/* <div id="awards">
          <h2> Awards </h2>
          <img class="award" href="https://www.aspirations.org/people/josephine-l/134641" src="/assets/ncwit.png"></img>
        </div> */}

        <img className="award" onClick={() => location.href = "https://www.aspirations.org/people/josephine-l/134641"} src="/assets/ncwit.png"></img>

        <div id="posts">
          <h2> My Work </h2>
                    <a className="post-title" onClick={() => location.href = "https://devpost.com/software/medinet-r5shm6"}> MediNet (BCHacks 2024--Track Winner) </a>
          <a className="post-title" onClick={() => location.href = "https://github.com/josephinel6/Hack-PNW-Spring-24/tree/main"}> Name It (Hack PNW Spring 2024) </a>
          <a className="post-title" onClick={() => location.href = "https://josephinel6.github.io"}> Portfolio </a>
          {/*   <a className="post-title" onClick={() => location.href = "https://orange-depot.github.io/posts/Preventing-Integral-Windup/"}> Preventing Integral Windup </a>
          <a className="post-title" onClick={() => location.href = "https://orange-depot.github.io/posts/Slew-Rate-Control/"}> Slew Rate Control </a>
          <a className="post-title" onClick={() => location.href = "https://orange-depot.github.io/posts/Basic-Motion-Profiling/"}> Basic Motion Profiling </a> */}
        </div>
      </div>
    </>

  )
}

export default App
