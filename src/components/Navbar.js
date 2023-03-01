// import React, {useEffect, useState} from 'react'
import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom';



export const Navbar = (prop) => {
  // const [navBg, setnavBg] = useState('light');
  // useEffect(()=>{
  //   if (prop.mode === "light") {
  //     setnavBg("dark")
  //   } else {
  //     setnavBg("light")
  //   }
  // },[prop.mode])

  // console.log(prop.mode);
  return (

    <nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{prop.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">{prop.about}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success mx-2" type="submit">Search</button>
          </form>






          <div class="form-check form-check-inline" style={{ color: prop.mode === 'dark' ? 'white' : '#042743' }}>
  <input className="form-check-input" onClick={prop.openClick}  type="radio" name="inlineRadioOptions" id="inlineRadio1" />
  <label className="form-check-label" htmlFor="inlineRadio1">Green Mode</label>
  </div>
  <div className="form-check form-check-inline" style={{ color: prop.mode === 'dark' ? 'white' : '#042743' }}>
  <input className="form-check-input" onClick={prop.closeClick} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label className="form-check-label" htmlFor="inlineRadio2">Red Mode</label>
</div>







          <div className="form-check form-switch" style={{ color: prop.mode === 'dark' ? 'white' : '#042743' }}>
            <input className="form-check-input" onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.name}</label>
          </div>

        </div>
      </div>
    </nav>



  )
}

export default Navbar;

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired
}

Navbar.defaultProps = {
  title: ' Pathan',
  about: 'Lets go'
};
