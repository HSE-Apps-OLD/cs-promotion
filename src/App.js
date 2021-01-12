import React from 'react'
import "antd/dist/antd.css";
import "./App.css"

import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'

const App = () => {
  return (
    <>
      <BackToTop/>
      <Navbar/>
    </>
  )
}

export default App;
