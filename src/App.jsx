import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navigation from './navigation'
import IndexPage from './index'
import ProjectsPage from './projects'
import ContactPage from './contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<IndexPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes >
  )
}

export default App
