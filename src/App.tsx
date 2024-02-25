import { useState } from 'react'
import Content from './components/content/content'
import Sidebar from './components/sidebar/sidebar'
import JsonData from '@/utils/data.json'
import { DataContext } from './context/DataContext'

const App = () => {
  const [data, setData] = useState<JSONSchema>(JsonData)
  const [selectedBoard, setSelectedBoard] = useState<Board>(JsonData.boards[0])

  return (
    <DataContext.Provider value={{ data, setData, selectedBoard }}>
      <Sidebar setSelectedBoard={setSelectedBoard} selectedBoard={selectedBoard} />
      <Content board={selectedBoard} />
    </DataContext.Provider>
  )
}

export default App
