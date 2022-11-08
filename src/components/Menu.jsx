import Context from './Context'
import Buttons from './Buttons'
import { useContext, useState } from 'react'

const Menu = () => {

    const { jobs } = useContext(Context)
    console.log(jobs)

    return (
        <section className="menu">
            <Buttons />
        </section>
    )
}

export default Menu