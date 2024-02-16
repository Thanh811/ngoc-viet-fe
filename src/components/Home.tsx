import React from 'react'
import logo from '../logo.svg';
import '../input.css';

const Home = () => {
  return (
    <div className="theme  p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    <div className="shrink-0">
      <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
    </div>
    <div>
      <div className="text-xl font-medium text-black border-spacing-x-md">ChitChat</div>
      <p className="text-slate-500 font-display">You have a new message!</p>
    </div>
  </div>
  )
}

export default Home