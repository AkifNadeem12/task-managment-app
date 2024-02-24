import Board from '../board/board'
import Header from '../header/header'

interface ContentProps {
  board: Board | undefined
  data: JSONSchema
  setData: (data: JSONSchema) => void
}

const Content = ({ board, data, setData }: ContentProps) => {
  return (
    <div className="sm:ml-64">
      <Header board={board} data={data} setData={setData} />
      <Board board={board} />
    </div>
  )
}

export default Content
