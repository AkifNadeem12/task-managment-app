import Board from '../board/board'
import Header from '../header/header'

interface ContentProps {
  selectedBoard: Board | undefined
}

const Content = ({ selectedBoard }: ContentProps) => {
  return (
    <div className="sm:ml-64">
      <Header selectedBoard={selectedBoard} />
      <Board selectedBoard={selectedBoard} />
    </div>
  )
}

export default Content
