import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="inner">
        <div className="brand">
          <img src="/src/assets/logo-temp.png" alt="ABC Uniformes" className="logo" />
          <span className="brand-text">ABC Uniformes</span>
        </div>
        <button className={'hamburger '+(open?'is-open':'')} aria-label="Menu" onClick={()=>setOpen(!open)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={(open?'nav open':'nav')}>
          <Link to="/" onClick={()=>setOpen(false)}>Inicio</Link>
          <Link to="/colegios" onClick={()=>setOpen(false)}>Colegios</Link>
          <Link to="/empresas" onClick={()=>setOpen(false)}>Empresas</Link>
          <Link to="/particulares" onClick={()=>setOpen(false)}>Particulares</Link>
          <a href="#contacto" onClick={()=>setOpen(false)} className="contact-link">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
