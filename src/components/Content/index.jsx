import AddTask from '../../pages/AddTask'
import Buttens from '../../pages/Buttens'
import Header from '../../pages/Header'
import TableTasks from '../../pages/TableTasks'
import styles from './style.module.css'

export default function Content() {
  return (
    <div className={styles.content}>
      <Header />
      <TableTasks/>
      <Buttens/>
      <AddTask />
    </div>
  )
}
