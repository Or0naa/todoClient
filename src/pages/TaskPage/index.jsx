import { useLocation, useNavigate } from "react-router-dom"
import styles from './style.module.css'
import axios from 'axios'

export default function TaskPage() {
const nav = useNavigate()
const {state} = useLocation()
const task = state

const handleUpdate = async (e) => {
  e.preventDefault()
  const name = e.target.name.value
  const timeForFinish = e.target.date.value
  const data = {name, timeForFinish}
  axios.put(`${server_url}/todo/${task._id}`, data)
 .then(res => {
    console.log(res.data)
    nav(`/`)
  })
 .catch(err => {
    console.log(err)
  })
}


  return (
    <div>
      <button onClick={() => nav(`/`)} className={styles.button}>back</button>
     <h1>Update Task:</h1> 
     <form onSubmit={handleUpdate}>
    <input type="text" placeholder="Change name" name="name" defaultValue={task.name}/> <br/>
    <input type='date' placeholder='Change time' name="date" defaultValue={task.timeForFinish}/> <button>Change</button>
    </form>
    </div>
  )
}
