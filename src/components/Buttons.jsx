import Context from './Context'
import { useContext } from 'react'

const Buttons = () => {
    const { jobs, value, setValue } = useContext(Context)

    return (
        <article className="btn-container">
            {jobs.map((job, index) => (
                <button key={job.id}
                    onClick={() => setValue(index)}
                    className={`btn ${index === value && 'active'}`}>
                    {job.company}
                </button>
            ))}
        </article>
    )
}

export default Buttons