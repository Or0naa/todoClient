import { useState } from 'react';
import styles from './style.module.css';
import { FaDog } from 'react-icons/fa';

export default function TableTasks() {
  const t1 = {
    "title": "todo react side",
    "timeLeft": "2 hours"
  };
  const t2 = {
    "title": "todo server side",
    "timeLeft": "2.5 hours"
  };
  const [tasks, setTasks] = useState([t1, t2]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleDone = (index) => {
    const newSelectedTasks = [...selectedTasks];

    if (newSelectedTasks.includes(index)) {
      newSelectedTasks.splice(newSelectedTasks.indexOf(index), 1);
    } else {
      newSelectedTasks.push(index);
    }

    setSelectedTasks(newSelectedTasks);
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
              <td onClick={() => handleDone(index)}>
                <input type='checkbox' checked={selectedTasks.includes(index)} />
              </td>
              <td className={selectedTasks.includes(index) ? styles['taskDone'] : ''}>{task.title}</td>
              <td className={selectedTasks.includes(index) ? styles['taskDone'] : ''}>{task.timeLeft}</td>
              <td><FaDog /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
