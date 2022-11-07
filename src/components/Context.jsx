import { FaAngleDoubleRight } from 'react-icons/fa'
import { createContext, useState, useEffect } from 'react'


const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = 'https://course-api.com/react-tabs-project'

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default Context