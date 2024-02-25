import { DataContext } from '@/context/DataContext'
import Board from '../board/board'
import Header from '../header/header'
import { useContext } from 'react'

interface ContentProps {
  board: Board | undefined
}

const Content = ({ board }: ContentProps) => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('Content must be used within a DataProvider')
  }

  const { data, setData } = context

  return (
    <div className="sm:ml-64">
      <Header board={board} data={data} setData={setData} />
      <Board board={board} data={data} setData={setData} />
    </div>
  )
}

export default Content
