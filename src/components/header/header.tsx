import { Plus } from 'lucide-react'
import { Button } from '../ui/button'
import BoardMenu from './components/BoardMenu'

interface HeaderProps {
  board: Board | undefined
  data: JSONSchema
  setData: (data: JSONSchema) => void
}

const Header = ({ board, data, setData }: HeaderProps) => {
  return (
    <header className="bg-gray-50 dark:bg-dark-grey border border-r-lines-light dark:border-r-lines-dark sticky top-0 z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <h1 className="font-jakarta font-bold text-black dark:text-white text-heading-xl">{board && board.name}</h1>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <Button variant={'default'} className="rounded-3xl">
            <Plus className="text-white h-4 w-4 mr-3 rounded" /> Add New Task
          </Button>
          <BoardMenu data={data} setData={setData} board={board} />
        </div>
      </nav>
    </header>
  )
}

export default Header
