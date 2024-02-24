import ConfirmationDialog from '@/components/Dialog/confirmationDialog'
import CreateBoard from '@/components/Dialog/createBoard'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreVertical } from 'lucide-react'
import { Fragment, useState } from 'react'

interface BoardMenuProps {
  data: JSONSchema
  setData: (data: JSONSchema) => void
  board?: Board
}

const BoardMenu = ({ data, setData, board }: BoardMenuProps) => {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const handleDeleteBoard = () => {
    const newBoards = data.boards.filter(b => b.name !== board?.name)
    setData({ ...data, boards: newBoards })

    setOpenDialog(false)
  }

  return (
    <Fragment>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <MoreVertical className="text-black dark:text-white cursor-pointer" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-6 mt-2 font-jakarta">
          <DropdownMenuItem className="cursor-pointer" onClick={() => setIsEdit(true)}>
            Edit Board
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red cursor-pointer" onClick={() => setOpenDialog(true)}>
            Delete Board
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isEdit && <CreateBoard open={isEdit} onChangeVisibility={() => setIsEdit(false)} data={data} setData={setData} isEdit board={board} />}

      {openDialog && (
        <ConfirmationDialog
          open={openDialog}
          onChangeVisibility={() => setOpenDialog(false)}
          title="Delete this board?"
          description="Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed."
          callback={() => handleDeleteBoard()}
        />
      )}
    </Fragment>
  )
}

export default BoardMenu
