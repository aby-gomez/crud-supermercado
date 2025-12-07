import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CRUDView from './CRUDView'

function App() {
  

  return (
    <>
      <div className='flex justify-start items-start gap-1'>
       
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className='p-6'>CRUD SUPERMERCADO</h1>
      </div>
    
    
    </>
  )
}

export default App
