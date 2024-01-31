import { FaPlus } from 'react-icons/fa'
import styles from './style.module.css'

export default function AddTask() {
  return (
    <div>
      <input type="text" placeholder="Add task" />
      <input type='date' />
      <button>{<FaPlus/>}Add</button>
      
    </div>
  )
}
