import styles from './style.module.css'
import { FaBorderNone, FaDownload, FaFirstdraft, FaPeopleCarry, FaRedo, FaSadCry, FaTasks, FaTrash, FaTv, } from 'react-icons/fa';
import axios from 'axios'
import { useContext } from 'react';
import DataContext from '../../context/DataContext';


export default function Buttens() {
  const { tasks, setTasks } = useContext(DataContext);

  const handleDeleteAll = async () => {
    try {
      await axios.delete('http://localhost:2555/todo');
      setTasks([]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDoneAll = async () => {
    try {
      await axios.put('http://localhost:2555/todo', { isDone: true })
        .then(() => {
          setTasks((prevTasks) => prevTasks.map((task) => {
            if (task.isDone === false) {
              task.isDone = true;
            }
            return task;
          }
          ))
        })
    } catch (error) {
      console.log(error);
    }
  };

  const handleDidntDoAll = async () => {
    try {
      await axios.put('http://localhost:2555/todo', { isDone: false })
      .then(() => {
        setTasks((prevTasks) => prevTasks.map((task) => {
          if (task.isDone === true) {
            task.isDone = false;
          }
          return task;
        }
        ))
      })
    
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className={styles.buttens}>
      <button className={styles.b} onClick={handleDeleteAll}>
        {<FaTrash />} Delete All
      </button>
      <button className={styles.b} onClick={handleDoneAll}>
        {<FaTasks />} Done All
      </button>
      <button className={styles.b} onClick={handleDidntDoAll}>
        {<FaSadCry />} Didn't do All
      </button>
    </div>
  );
}