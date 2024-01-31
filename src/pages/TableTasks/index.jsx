import { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import { FaDog } from 'react-icons/fa';
import axios from 'axios';
import DataContext from '../../context/DataContext';

export default function TableTasks() {
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
}, [])


const handleDone = async (e) => {
 const id = e._id
 const updateDone = !e.isDone
 try{
  await axios.put(`http://localhost:2555/todo/${id}`, { isDone: updateDone })
   setTasks((prevTasks) => prevTasks.map((task) => {
     if (task._id === id) {
       task.isDone = !task.isDone;
     }
     return task;
   }
   ))
 } catch (error) {
   console.log(error);
 }
}

console.log("object")

const handleDelete = async (task) => {
  const id = task._id;

  try {
    await axios.delete(`http://localhost:2555/todo/${id}`);
  
    setTasks((prevTasks) => prevTasks.filter((t) => t._id !== id));
  } catch (error) {
    console.log(error);
  }
};
function calculateTime(startTime, endTime) {
  const currentDate = new Date();
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  // וודא שהתאריך הנוכחי נמצא בין תאריך ההתחלה לתאריך הסיום
  if (currentDate >= startDate && currentDate <= endDate) {
    const difference = endDate - currentDate;
    const hours = Math.floor(difference / (1000 * 60 * 60));
    return hours;
  } else {
    // המשימה לא בתחום תאריכים המתאימים לחישוב
    return 0;
  }
}



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
            <td onClick={()=>handleDone(task)}><input type='checkbox' checked={task.isDone} /></td>
            <td className={task.isDone ? styles['taskDone'] : ''} >{task.name}</td>
            <td className={task.isDone ? styles['taskDone'] : ''}>{calculateTime(task.date, task.timeForFinish)} hours</td>

            <td onClick={() => handleDelete(task)}><FaDog /></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}