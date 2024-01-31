import React, { useState } from 'react'
import Layout from './components/Layout'
import DataContext from './context/DataContext'

export default function App() {

  const [user, setUser] = useState()
  const [tasks, setTasks] = useState([]);



  return (
    
    <>
      <DataContext.Provider value={{ user, setUser, tasks, setTasks }}>
      <Layout/>
      </DataContext.Provider>
    </>
  )
}
