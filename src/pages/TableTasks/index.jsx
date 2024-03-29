import { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import { FaDog } from 'react-icons/fa';
import axios from 'axios';
import DataContext from '../../context/DataContext';
import { useNavigate } from 'react-router-dom';

export default function TableTasks() {
  const [isDone, setIsDone] = useState(false);
  const { tasks, setTasks, server_url } = useContext(DataContext)
  const nav = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${server_url}/todo`);
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
    try {
      await axios.put(`${server_url}/todo/${id}`, { isDone: updateDone })
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
      await axios.delete(`${server_url}/todo/${id}`);

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

  const handleNavigate = async (task) => {
    console.log("task", task)
    nav(`/updateTask/` + task._id, { state: task });

  }

  console.log("tasks", tasks)

  return (
    <div>
      {tasks.langht != 0 ? 
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
              <td onClick={() => handleDone(task)}><input type='checkbox' checked={task.isDone} /></td>
              <td className={task.isDone ? styles[`taskDone`] : ``} onClick={() => handleNavigate(task)} >{task.name}</td>
              <td className={task.isDone ? styles[`taskDone`] : ``}>{calculateTime(task.date, task.timeForFinish)} hours</td>

              <td onClick={() => handleDelete(task)}><FaDog /></td>
            </tr>
          ))}
        </tbody>
        </table> : <div>
          <img src="https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif?cid=ecf05e47fpceqyoemzqotmx9ocamj80czmvh1ufoccpjqbd2&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="loading" />
          </div>}

    </div>
  );
}