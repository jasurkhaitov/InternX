import React from 'react'
import { TablePage } from './pages/TablePage'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SettingsPage } from './pages/SettingsPage'
import NotFound from './pages/NotFound'
import { NotFoundPage } from './pages/NotFoundPage'

export default function App() {
  return (
    <div className='font-nunito light'>
      <Routes>
        <Route path='*' element={<NotFound/>} />

        <Route path='/' element={<Navigate to={'/table'}/>} />

        <Route path='/dashboard' element={<NotFoundPage title="Dashboard"/>}/>
        <Route path='/table' element={<TablePage/>}/>
        <Route path='/exams' element={<NotFoundPage title="Imtihonlar"/>}/>
        <Route path='/courses' element={<NotFoundPage title="Darslar"/>}/>
        <Route path='/email' element={<NotFoundPage title="Chat Email"/>}/>
        <Route path='/notifications' element={<NotFoundPage title="Notification"/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>

        <Route path='/profile' element={<NotFoundPage title="Foydalanuvchi"/>}/>

      </Routes>
    </div>
  )
}