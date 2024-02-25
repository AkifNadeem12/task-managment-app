import { MoreVertical } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'
import { Checkbox } from '../ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useContext } from 'react'
import { DataContext } from '@/context/DataContext'

interface ViewTaskProps {
  task: Task
  open: boolean
  onChangeVisibility: () => void
  data: JSONSchema
  setData: (data: JSONSchema) => void
}

const ViewTask = ({ task, open, onChangeVisibility, data, setData }: ViewTaskProps) => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('ViewTask must be used within a DataProvider')
  }

  const { selectedBoard } = context
  return (
    <Dialog open={open} onOpenChange={onChangeVisibility}>
      <DialogContent className="font-jakarta">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between gap-3 tracking-wide">
            {task && task.title} <MoreVertical className="text-black cursor-pointer h-5 w-5" />
          </DialogTitle>
          <DialogDescription>{task && task.description}</DialogDescription>
        </DialogHeader>
        <div>
          <span className="text-body-m text-medium-grey font-bold font-jakarta tracking-widest">
            Subtasks ({task.subtasks.filter(subtask => subtask.isCompleted).length} of {task.subtasks.length})
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {task &&
            task.subtasks.map((subtask: Subtask, index) => (
              <div key={index} className="flex items-center space-x-2 bg-light-grey p-3 rounded">
                <Checkbox
                  id={`subtask-${index}`}
                  onCheckedChange={(checked: boolean) => {
                    subtask.isCompleted = checked
                    setData({ ...data, boards: [...data.boards] })
                  }}
                  checked={subtask.isCompleted}
                />
                <label
                  htmlFor={`subtask-${index}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-bold"
                >
                  {subtask.title}
                </label>
              </div>
            ))}
        </div>
        <div>
          <span className="text-body-m text-medium-grey font-bold font-jakarta tracking-widest">Current Status</span>
          <div className="mt-1">
            <Select
              value={task.status}
              onValueChange={(value: string) => {
                task.status = value

                setData({ ...data, boards: [...data.boards] })
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" defaultValue={task.status} />
              </SelectTrigger>
              <SelectContent>
                {selectedBoard &&
                  selectedBoard.columns.map((column: Column, index) => (
                    <SelectItem key={index} value={column.name}>
                      {column.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ViewTask
