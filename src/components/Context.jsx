import { FaAngleDoubleRight } from 'react-icons/fa'
import { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = 'https://course-api.com/react-tabs-project'
    const [jobs, setJobs] = useState([])
    const [fetchErr, setFetchErr] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState(0)

    const fetchJobs = async () => {
        setIsLoading(true)
        setFetchErr(null)
        try {
            const res = await fetch(url)
            if (!res.ok) throw new Error("Please, check your connection.")
            const data = await res.json()
            setJobs(data)
        } catch {
            setFetchErr("Please, reload the page.")
        }
    }

    useEffect(() => {
        (async () => await fetchJobs())()
        setTimeout(() => {
            setIsLoading(false)
        }, 1200)
    }, [])

    return (
        <Context.Provider value={{
            FaAngleDoubleRight,
            isLoading, fetchErr,
            value, setValue, jobs
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context