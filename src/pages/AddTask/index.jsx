import { FaPlus } from 'react-icons/fa'
import styles from './style.module.css'
import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

export default function  AddTask() {
  const {tasks, setTasks, server_url} = useContext(DataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const timeForFinish = e.target.date.value;
    const data = {name, timeForFinish}
   
    await axios.post(`${server_url}/todo`, data)
    .then(res => {
        console.log(res.data)
        setTasks([...tasks, res.data])
      })
     .catch(err => {
        console.log(err)
      })
  }

  
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>  
      <input className={styles.inputs} type="text" placeholder="Add task" name="name" />
      <input className={styles.inputs} type='date' name="date" />
      <button className={styles.inputs}> {<FaPlus/>} Add</button>
      </form>
    </div>
  )
}
