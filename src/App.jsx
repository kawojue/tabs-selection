import { useContext } from 'react'
import Context from './components/Context'

function App() {
  const { isLoading, fetchErr } = useContext(Context)

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  if (fetchErr) {
    return (
      <main>
        <h1>{fetchErr}</h1>
      </main>
    )
  }

  return (
    <main>
      <p>Greetings - Hello, World!</p>
    </main>
  )
}

export default App
