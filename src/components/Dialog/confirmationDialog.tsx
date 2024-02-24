import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog'

interface ConfirmationDialogProps {
  title: string
  description: string
  open: boolean
  onChangeVisibility: () => void
  callback?: () => void
}

const ConfirmationDialog = ({ title, description, open, onChangeVisibility, callback }: ConfirmationDialogProps) => {
  return (
    <AlertDialog open={open} onOpenChange={onChangeVisibility}>
      <AlertDialogContent className="font-jakarta">
        <AlertDialogHeader className="text-red">
          <AlertDialogTitle>{title && title}</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>{description && description}</AlertDialogDescription>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogAction className="w-full rounded-3xl" onClick={callback && callback}>
            Delete
          </AlertDialogAction>
          <AlertDialogCancel className="w-full rounded-3xl">Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ConfirmationDialog
