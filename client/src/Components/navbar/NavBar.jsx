import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Skilline</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
      </ul>
      <span class="navbar-text">
        <div className='btn-nav'>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
      </span>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar