import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import StudentsList from './pages/StudentsList.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/aluno/:id" element={<StudentDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
