
import { Route, Router, Routes } from 'react-router-dom'
import Content from '../Content'
import styles from './style.module.css'
import TaskPage from '../../pages/TaskPage'

export default function Layout() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/updateTask/:_id' element={<TaskPage/>} />
      </Routes>
    </div>
  )
}
