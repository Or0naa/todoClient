import { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import { FaDog } from 'react-icons/fa';
import axios from 'axios';
import DataContext from '../../context/DataContext';

export default function TableTasks() {
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const {tasks, setTasks} = useContext(DataContext)

 useEffect (() => {
  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:2555/todo');
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData()
}, [tasks])


const handleDone = () => {
  const isChecked = document.querySelector('input[type="checkbox"]').checked;
  if (isChecked) setIsDone(true);
  else setIsDone(false);
};

const handleDelete = async (task) => {
  const id = task._id;

  try {
    await axios.delete(`http://localhost:2555/todo/${id}`);
    // Update state only after successful deletion
    setTasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
  } catch (error) {
    console.log(error);
  }
};

return (
  <div>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Done</th>
          <th>Task</th>
          <th>Time Left</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td onClick={handleDone}><input type='checkbox' /></td>
            <td className={isDone ? styles['taskDone'] : ''} >{task.name}</td>
            <td className={isDone ? styles['taskDone'] : ''} >{task.timeToFinish}</td>
            <td onClick={() => handleDelete(task)}><FaDog /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}