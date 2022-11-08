import { useContext } from 'react'
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
      <p>Greetings - Hello, World!</p>
    </main>
  )
}

export default App
