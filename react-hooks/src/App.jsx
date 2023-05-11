import { useState } from 'react'
import './App.css'
import { Demo1, Counter, PointerFive } from './hooks/customhook'
import RefCounter from './hooks/ref'
import Watch from './hooks/ref/Watch'

function App() {
  return (
    <>
      <main>
        <div className=" flex flex-auto justify-center text-3xl font-extrabold rounded-xl">
          <span className=" text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            hooks excel{' '}
          </span>
        </div>
        <Demo1 />
        <div>
          <Counter />
        </div>
        {/* <PointerFive /> */}
        <RefCounter />
        <Watch />
      </main>
    </>
  )
}

export default App
