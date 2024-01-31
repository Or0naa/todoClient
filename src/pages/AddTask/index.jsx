import { FaPlus } from 'react-icons/fa'
import styles from './style.module.css'
import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

export default function  AddTask() {
  const {tasks, setTasks} = useContext(DataContext)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const timeForFinish = e.target.date.value;
    const data = {name, timeForFinish}
   
    await axios.post('http://localhost:2555/todo', data)
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
      <input type="text" placeholder="Add task" name="name" />
      <input type='date' name="date" />
      <button>{<FaPlus/>}Add</button>
      </form>
    </div>
  )
}
