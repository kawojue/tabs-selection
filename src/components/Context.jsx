import { FaAngleDoubleRight } from 'react-icons/fa'
import { createContext, useState, useEffect } from 'react'


const Context = createContext({})

export const DataProvider = ({ children }) => {
    const url = 'https://course-api.com/react-tabs-project'
    const [isLoading, setIsLoading] = useState(true)
    const [fetchErr, setFetchErr] = useState(null)
    const [jobs, setJobs] = useState([])

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

    console.log(jobs)

    return (
        <Context.Provider value={{
            isLoading, fetchErr, jobs
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context