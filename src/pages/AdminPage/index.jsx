import styles from './style.module.css'

export default function AdminPage() {
  return (
    <div>
      <h1>admin page</h1>
      <button>all users</button>
      <button>not done</button>
      <button>over deadline</button>
      <input type="text" placeholder="search by user" />
      <table>
        <input type="range" min="0" max="1" style={{ width: 25 }} />
      </table>
    </div>
  )
}
