import ViewTask from '@/components/Dialog/viewTask'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface ColumnProps {
  column: Column
  data: JSONSchema
  setData: (data: JSONSchema) => void
}

const Column = ({ column, data, setData }: ColumnProps) => {
  const [task, setTask] = useState<Task | undefined>(undefined)
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }

  const isSubtaskCompleted = (subtask: Subtask[]) => {
    return subtask.filter(subtask => subtask.isCompleted).length
  }

  return (
    <div className="w-5/12 relative">
      <div className="pr-0.5 justify-center items-start gap-3 inline-flex">
        <div className={cn(`w-3.5 h-3.5 rounded-full`)} style={{ backgroundColor: generateRandomColor() }} />
        <div className="text-slate-400 text-xs font-bold font-jakarta tracking-widest">
          {column && column.name} ({column && column.tasks.length})
        </div>
      </div>
      <div className="flex flex-col py-3 gap-3">
        {column &&
          column.tasks.map((task: Task, index) => (
            <div
              className="bg-white dark:bg-dark-grey rounded-md p-2 cursor-pointer shadow"
              key={index}
              onClick={() => {
                setTask(task)
                setOpenDialog(true)
              }}
            >
              <h5 className="text-black dark:text-white font-jakarta font-bold">{task.title}</h5>
              <span className="text-body-m text-medium-grey font-bold font-jakarta tracking-widest">
                {isSubtaskCompleted(task.subtasks)} of {task.subtasks && task.subtasks.length} subtasks
              </span>
            </div>
          ))}
      </div>
      {openDialog && task && (
        <ViewTask
          task={task}
          open={openDialog}
          onChangeVisibility={() => setOpenDialog(false)}
          data={data}
          setData={setData}
        />
      )}
    </div>
  )
}

export default Column
