import React, { useState } from 'react'
import Layout from './components/Layout'
import DataContext from './context/DataContext'

export default function App() {

  const [user, setUser] = useState()
  const [tasks, setTasks] = useState([]);
  const server_url = "https://todo-81i3.onrender.com"
  // const server_url = "http://localhost:2555"

  return (
    
    <>
      <DataContext.Provider value={{ user, setUser, tasks, setTasks, server_url }}>
      <Layout/>
      </DataContext.Provider>
    </>
  )
}
