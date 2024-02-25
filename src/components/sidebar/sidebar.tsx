import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import DarkLogo from '@/assets/images/logo-dark.svg'
import LightLogo from '@/assets/images/logo-light.svg'
import BoardIcon from '@/assets/images/icon-board.svg'
import ActiveBoardIcon from '@/assets/images/icon-active-board.svg'
import EyeOff from '@/assets/images/icon-hide-sidebar.svg'
import ThemeToggle from './theme-toggle'
import { Plus } from 'lucide-react'
import CreateBoard from '../Dialog/createBoard'
import { DataContext } from '@/context/DataContext'

interface Props {
  setSelectedBoard: (board: Board) => void
  selectedBoard: Board | undefined
}

const Sidebar = ({ setSelectedBoard }: Props) => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('Sidebar must be used within a DataProvider')
  }

  const { data, setData } = context
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const sidebarRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <Fragment>
      <button
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isOpen ? (
            <>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </>
          ) : (
            <>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </>
          )}
        </svg>
      </button>

      <aside
        ref={sidebarRef}
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 border border-r-lines-light dark:border-r-lines-dark`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-dark-grey relative">
          <div className="flex items-center ps-2.5 mb-8">
            <img src={DarkLogo} className="h-6 me-3 sm:h-6 block dark:hidden" alt="Logo Logo" />
            <img src={LightLogo} className="h-6 me-3 sm:h-6 hidden dark:block" alt="Logo Logo" />
          </div>
          <div className="flex items-center ps-2.5 mb-1">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase font-jakarta">
              All Boards ({data && data.boards && data.boards.length})
            </span>
          </div>
          <ul className="space-y-2 font-medium max-h-72 overflow-y-auto">
            {data &&
              data.boards &&
              data.boards.map((board: Board) => (
                <li key={board.name}>
                  <div
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer font-jakarta"
                    onClick={() => setSelectedBoard(board)}
                  >
                    <img src={BoardIcon} />
                    <span className="ms-3">{board.name}</span>
                  </div>
                </li>
              ))}
            <li>
              <div className="flex items-center p-2 rounded-lg cursor-pointer font-jakarta" onClick={() => setOpenDialog(true)}>
                <img src={ActiveBoardIcon} />
                <span className="ms-3 flex items-center text-main-purple">
                  <Plus className=" h-3 w-3 mr-1 text-main-purple" />
                  Create New Board
                </span>
              </div>
            </li>
          </ul>
          <ThemeToggle />
          <span
            className="text-sm font-medium text-gray-500 dark:text-gray-400 absolute left-0 right-0 bottom-10 flex items-center justify-start gap-3 w-5/6 mx-auto cursor-pointer font-jakarta"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={EyeOff} />
            Hide Sidebar
          </span>
        </div>
      </aside>
      {openDialog && <CreateBoard open={openDialog} onChangeVisibility={() => setOpenDialog(false)} data={data} setData={setData} />}
    </Fragment>
  )
}

export default Sidebar
