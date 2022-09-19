import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const title = import.meta.env.VITE_APP_TITLE
// eslint-disable-next-line no-console
console.log(import.meta)

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(2)
  }, [count])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + 自定义title：{title}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
