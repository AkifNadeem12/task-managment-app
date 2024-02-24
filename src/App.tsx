import { useState } from 'react'
import Content from './components/content/content'
import Sidebar from './components/sidebar/sidebar'
import JsonData from '@/utils/data.json'

const App = () => {
  const [data, setData] = useState<JSONSchema>(JsonData)
  const [selectedBoard, setSelectedBoard] = useState<Board>(JsonData.boards[0])

  return (
    <div>
      <Sidebar data={data} setSelectedBoard={setSelectedBoard} selectedBoard={selectedBoard} />
      <Content selectedBoard={selectedBoard} />
    </div>
  )
}

export default App
