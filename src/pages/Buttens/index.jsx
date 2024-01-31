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
  await axios.put('http://localhost:2555/todo');
    setTasks((prevTasks) => prevTasks.map((t) => {
      t.done = true;
      return t;
    }));
  } catch (error) {
    console.log(error);
}
  };

  const handleDidntDoAll = () => {
    console.log("didn't do all");
    // Implement logic for marking all tasks as not done
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