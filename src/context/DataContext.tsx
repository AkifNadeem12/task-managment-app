import { createContext, Dispatch, SetStateAction } from 'react'

interface DataContextProps {
  data: JSONSchema
  setData: Dispatch<SetStateAction<JSONSchema>>
  selectedBoard: Board
}

export const DataContext = createContext<DataContextProps | undefined>(undefined)
