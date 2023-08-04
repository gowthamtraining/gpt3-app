import React, { useState } from 'react'
import {Blog,Companylogo,Cta,Feature,Features,Footer,Header,Navbar,Whatisgpt3} from "./components"
import "./App.css"
import Data from "./data.json"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const App = () => {
  const [items,setitems] = useState(["Home","What is GPT?","feature","Case Studies","Library"])
  function removeitem(){
    setitems(items.splice(0,items.length-1))
  }
    return (
      <>
    <Router>
      <Navbar Data = {Data.navbar} items = {items}/>
      <Routes>
      <Route path='/header' element = {<>
        <div className='header'>
        <Header Data = {Data.header} removeitems = {removeitem}/></div>
        <div className='companylogo'><Companylogo Data={Data.companyLogo}/></div></>}></Route>
        <Route exact path='/whatsisgpt3' element={<>
          <div className='whatisgpt3'><Whatisgpt3 Data = {Data.whtaisgpt}/></div>
        </>}></Route>
      <Route path='/feature' element = {<>
          <div className='feature'><Feature data = {Data.feature}/></div>
          </>
      }></Route>
      <Route path='/features' element = {<>
      <div className='featuress'>
        <Features data = {Data.features}/>
      </div>
      <div className='Cta'>
      <Cta data = {Data.cta}/></div>
      </>}></Route>
      <Route path='/blog' element = {<>
      <div className='Blog'><Blog data = {Data.blog}/></div>
      </>}></Route>
      <Route path='/' element = {
        <div className='bg'>
      <div className='header'><Header Data = {Data.header} removeitems = {removeitem}/></div>
      <div className='companylogo'><Companylogo Data={Data.companyLogo}/></div>
      <div className='whatisgpt3'><Whatisgpt3 Data = {Data.whtaisgpt}/></div>
      <div className='feature'><Feature data = {Data.feature}/></div>
      <div className='featuress'><Features data = {Data.features}/></div>
      <div className='Cta'><Cta data = {Data.cta}/></div>
      <div className='Blog'><Blog data = {Data.blog}/></div>
    </div>
      }></Route>
      </Routes>
      <div className='footer'><Footer data={Data.footer}/></div>
    </Router>
    </>
    )
  }

export default App

