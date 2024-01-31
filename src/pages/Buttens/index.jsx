import styles from './style.module.css'
import { FaBorderNone, FaDownload, FaFirstdraft, FaPeopleCarry, FaRedo, FaSadCry, FaTasks, FaTrash, FaTv, } from 'react-icons/fa';


export default function Buttens() {
  const handleDeleteAll = () => {
    console.log('delete all')
  }
  const handleDoneAll = () => {
    console.log('done all')
  }
  const handleDidntDoAll = () => {
    console.log('didnt do all')
  }

  return (
    <div className={styles.buttens}>
      <button className={styles.b} onClick={handleDeleteAll}>{<FaTrash />}Delete All</button>
      <button className={styles.b} onClick={handleDoneAll}>{<FaTasks />}Done All</button>
      <button className={styles.b} onClick={handleDidntDoAll}>{<FaSadCry />}Didn't do All</button>
    </div>
  )
}
