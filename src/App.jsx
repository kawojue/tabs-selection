import { useContext } from 'react'
import Menu from './components/Menu'
import Header from "./components/Header"
import Context from './components/Context'

function App() {
  const { isLoading, fetchErr } = useContext(Context)

  if (isLoading) {
    return (
      <main>
        <h1 className="info">Loading...</h1>
      </main>
    )
  }

  if (fetchErr) {
    return (
      <main>
        <h1 className="info">{fetchErr}</h1>
      </main>
    )
  }

  return (
    <main>
      <Header />
      <Menu />
    </main>
  )
}

export default App
