import { Plus, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useState } from 'react'
import { Button } from '../ui/button'

interface CreateBoardProps {
  open: boolean
  onChangeVisibility: () => void
  data: JSONSchema
  setData: (data: JSONSchema) => void
  isEdit?: boolean
  board?: Board
}

interface Column {
  name: string
  tasks: Task[]
}

const CreateBoard = ({ open, onChangeVisibility, data, setData, isEdit = false, board }: CreateBoardProps) => {
  const [columns, setColumns] = useState<Column[]>(isEdit && board ? board?.columns : [])
  const [boardName, setBoardName] = useState<string>(isEdit && board ? board?.name : '')

  const handleCreateBoard = () => {
    const newBoard: Board = {
      name: boardName,
      columns,
    }

    const newData: JSONSchema = {
      ...data,
      boards: [...data.boards, newBoard],
    }

    setData(newData)
    setColumns([])
    setBoardName('')

    onChangeVisibility()
  }

  const handleEditBoard = () => {
    const newBoard: Board = {
      name: boardName,
      columns,
    }

    const newData: JSONSchema = {
      ...data,
      boards: data.boards.map(b => (b.name === board?.name ? newBoard : b)),
    }

    setData(newData)
    setColumns([])
    setBoardName('')

    onChangeVisibility()
  }

  return (
    <Dialog open={open} onOpenChange={onChangeVisibility}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-jakarta">{isEdit ? 'Edit Board' : 'Add New Board'}</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="boardName" className="font-jakarta text-sm">
            Name
          </Label>
          <Input
            id="boardName"
            type="text"
            value={boardName}
            onChange={event => setBoardName(event.target.value)}
            placeholder="e.g Web Design"
            className="font-jakarta mt-1"
          />
        </div>
        <div>
          <Label htmlFor="columns" className="font-jakarta text-sm">
            Columns
          </Label>
          {columns.map((column, index) => (
            <div key={index} className="flex items-center gap-3 my-2">
              <Input
                id="columns"
                type="text"
                value={column.name}
                className="font-jakarta mt-1"
                onChange={event => {
                  const newColumns = [...columns]
                  newColumns[index].name = event.target.value
                  setColumns(newColumns)
                }}
              />
              <X
                className="dark:text-white text-black font-bold font-jakarta cursor-pointer"
                onClick={() => {
                  const newColumns = [...columns]
                  newColumns.splice(index, 1)
                  setColumns(newColumns)
                }}
              />
            </div>
          ))}

          <Button variant={'secondary'} className="w-full rounded-3xl my-1" onClick={() => setColumns([...columns, { name: '', tasks: [] }])}>
            <Plus className="text-main-purple font-bold font-jakarta mr-1 h-4 w-4" />
            Add New Column
          </Button>

          <div>
            <Button className="rounded-3xl w-full my-5" onClick={isEdit ? handleEditBoard : handleCreateBoard}>
              {isEdit ? 'Save Changes' : 'Create New Board'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CreateBoard
