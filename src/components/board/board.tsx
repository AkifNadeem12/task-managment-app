import Column from './components/Column'

interface BoardProps {
  board: Board | undefined
}

const Board = ({ board }: BoardProps) => {
  return (
    <div className="h-full p-3 lg:px-8 flex justify-evenly gap-3 flex-nowrap overflow-x-auto">
      {board && board.columns.map((column: Column, index) => <Column key={index} column={column} />)}
      <div className="w-5/12 bg-medium-grey dark:bg-dark-grey flex justify-center items-center cursor-pointer rounded-md">
        <div className="text-white text-2xl font-bold font-jakarta">+</div>
      </div>
    </div>
  )
}

export default Board
