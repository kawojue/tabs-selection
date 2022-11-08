import Context from './Context'
import { useContext } from 'react'

const Job = () => {
    const { jobs, value, FaAngleDoubleRight } = useContext(Context)

    const { title, company, dates, duties } = jobs[value]

    return (
        <article className="job">
            <div className="titles">
                <h3>{title}</h3>
                <h5>{company}</h5>
                <p>{dates}</p>
            </div>
            <ul className="duties">
                {duties.map((duty, index) => (
                    <li key={index} className="duty">
                        <FaAngleDoubleRight />
                        {duty}
                    </li>
                ))}
            </ul>
        </article>
    )
}

export default Job