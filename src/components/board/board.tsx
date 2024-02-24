import Column from './components/Column'

interface BoardProps {
  selectedBoard: Board | undefined
}

const Board = ({ selectedBoard }: BoardProps) => {
  return (
    <div className="h-full p-3 lg:px-8 grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {selectedBoard && selectedBoard.columns.map((column: Column, index) => <Column key={index} column={column} />)}
    </div>
  )
}

export default Board
