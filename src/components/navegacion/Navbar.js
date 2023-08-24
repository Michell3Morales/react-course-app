import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=> {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <Link to='/'>
    <imag src = './Logo1.png' width='10' />
   </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <Link className="nav-link" to='/'>test commit</Link></li>
          <li className="nav-item">
          <Link className="nav-link" to='/combos'>Combos</Link></li>
          <li className="nav-item">
          <Link className="nav-link" to='/'>Lugares cerca de ti</Link></li>
      </ul>
      <form className="d-flex">
      <input type="search " placeholder="Que deseas comer hoy?" aria-label="Que deseas comer hoy?" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
