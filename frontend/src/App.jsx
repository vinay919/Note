import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

const App = () => {

  return (
    <div data-theme="forest">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Create' element={<CreatePage />} />
        <Route path='/Note/:id' element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App