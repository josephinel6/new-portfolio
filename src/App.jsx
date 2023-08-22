import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navigation from './navigation'
import IndexPage from './index'
import ProjectsPage from './projects'
import ActivitiesPage from './activities'
import AccomplishmentsPage from './accomplishments'
import AboutPage from './about'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<IndexPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/accomplishments" element={<AccomplishmentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/layout" element={<Navigation />} />
      </Route>
    </Routes >
  )
}

export default App
