import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { BestPractice } from './page/best-practice/Practice'
import { Blog } from './page/blog/Blog'
import { Home } from './page/home/Home'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function App() {

  const customStyle : any = {
    style : 'text-white m-2'
  }

  return (
   <>
    <Router>
       <>

          <Navbar bg="dark" variant="dark">
            <Container className=''>
              <Navbar.Brand>Yusuf Firmansyah</Navbar.Brand>
              <Nav className="me-auto w-100">
               <Link className={`nav-link ${customStyle?.style}`} to="/">Home</Link>
               <Link className={`nav-link ${customStyle.style}`} to="/best-pratice">Best Practice</Link>
               <Link className={`nav-link ${customStyle.style}`} to="/blog">Blog</Link>
              </Nav>
            </Container>
          </Navbar>

          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/best-pratice' element={<BestPractice/>} />
            <Route path='/blog'  element={<Blog/>} />
          </Routes>   
        </>
      </Router>
   </>
  );
}

export default App