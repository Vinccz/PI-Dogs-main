import './App.css'
import React from 'react'
import {Routes, Route} from "react-router-dom"
import DetailPage from './components/dogcard/detailpage/DetailPage'
import Container from './components/dogcard/containers/Container'
import LandingPage from './components/Login/landingpage/LandingPage'
import FormPage from './components/formpage/FormPage'
import Nav from './components/nav/Nav'
import ErrorPage from "./components/Error/Errorpage"
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';


function App() {
//usar un use effect par aque se carguen los estados globales de temp y dogs

  return (
    <>
       <Routes>

            <Route path='/*' element={<ErrorPage/>} />
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/dogs/:id' element={<DetailPage/>}/>
            <Route path='/dogs' element={<Container/>} />
            <Route path='/create' element={<FormPage/>} />
       </Routes>
    </>
  )
}

export default App
