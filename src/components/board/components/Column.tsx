import { cn } from '@/lib/utils'

interface ColumnProps {
  column: Column
}

const Column = ({ column }: ColumnProps) => {
  console.log(column)

  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }

  return (
    <div className="relative">
      <div className=" pr-0.5 justify-center items-start gap-3 inline-flex">
        <div className={cn(`w-3.5 h-3.5 rounded-full`)} style={{ backgroundColor: generateRandomColor() }} />
        <div className="text-slate-400 text-xs font-bold font-jakarta tracking-widest">
          {column && column.name} ({column && column.tasks.length})
        </div>
      </div>
      <div className="flex flex-col py-3 gap-3">
        {column &&
          column.tasks.map((task: Task, index) => (
            <div className="bg-white dark:bg-dark-grey rounded-md p-2 cursor-pointer shadow" key={index}>
              <h5 className="text-black dark:text-white font-jakarta font-bold">{task.title}</h5>
              <span className="text-body-m text-medium-grey font-bold font-jakarta tracking-widest">0 of 3 subtasks</span>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Column
