import AdminPage from '../../pages/AdminPage'
import Content from '../Content'
import styles from './style.module.css'

export default function Layout() {
  return (
    <div>
      <Content />
      <AdminPage/>
    </div>
  )
}
