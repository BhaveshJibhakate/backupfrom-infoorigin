import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterPage from './RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={store}>
      <RegisterPage/>
    </Provider>
    </>
  )
}

export default App
