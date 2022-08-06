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
    style : 'text-white fw-bolder m-2'
  }

  return (
   <>
    <Router>
       <>

          <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container className=''>
              <Navbar.Brand className=''>Yusuf Firmansyah</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto w-100" id="responsive-navbar-nav">
                    <Link className={`nav-link ${customStyle?.style}`} to="/">Home</Link>
                    <Link className={`nav-link ${customStyle.style}`} to="/best-pratice">Best Practice</Link>
                    <Link className={`nav-link ${customStyle.style}`} to="/blog">Blog</Link>
                  </Nav>
              </Navbar.Collapse>
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