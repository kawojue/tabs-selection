import Context from './Context'
import { useContext } from 'react'

const Buttons = () => {
    const { jobs, activeJob } = useContext(Context)

    return (
        <section className="btn-container">
            {jobs.map((job, index) => (
                <button key={job.id}
                    className={`btn ${index === activeJob ? 'active' : ''}`}>
                    {job.company}
                </button>
            ))}
        </section>
    )
}

export default Buttons