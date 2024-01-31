<<<<<<< HEAD
import AdminPage from '../../pages/AdminPage'
=======
import { Route, Router, Routes } from 'react-router-dom'
>>>>>>> e7976200cd64220e31f8dbc2b7eb1af5bed7a690
import Content from '../Content'
import styles from './style.module.css'
import TaskPage from '../../pages/TaskPage'

export default function Layout() {
  return (
    <div>
<<<<<<< HEAD
      <Content />
      <AdminPage/>
=======
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/updateTask/:_id' element={<TaskPage/>} />
      </Routes>
>>>>>>> e7976200cd64220e31f8dbc2b7eb1af5bed7a690
    </div>
  )
}
