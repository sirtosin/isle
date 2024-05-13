'use client'
import { createContext, useContext, useState } from 'react'

const StateContext = createContext()

// const initialState = {
//   userProfile: false,
// };

export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [edit, setEdit] = useState(false)
  const [editData, setEditData] = useState(null)
  const [title, setTitle] = useState('')
  const [requestList, setRequestList] = useState([])
  const [requestListById, setRequestListById] = useState([])

  const handleToggle = () => setOpenMenu((prev) => !prev)

  const handleClick = (name) => {
    setOpen((prev) => !prev)
    setTitle(name)
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        open,
        handleClick,
        openMenu,
        setOpenMenu,
        title,
        handleToggle,
        setTitle,
        setOpen,
        editData,
        edit,
        setEditData,
        setEdit,
        setRequestList,
        requestList,
        requestListById,
        setRequestListById
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
