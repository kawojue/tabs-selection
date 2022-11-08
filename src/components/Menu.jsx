import Context from './Context'
import Buttons from './Buttons'
import { useContext } from 'react'

const Menu = () => {
    const { jobs, value, FaAngleDoubleRight } = useContext(Context)

    const { title, company, dates, duties } = jobs[value]

    return (
        <section className="menu">
            <Buttons />
            <article className="">
                <div>
                    <h3>{title}</h3>
                    <h5>{company}</h5>
                    <p>{dates}</p>
                </div>
                <ul>
                    {duties.map((duty, index) => (
                        <li key={index}>
                            <FaAngleDoubleRight />
                            {duty}
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}

export default Menu