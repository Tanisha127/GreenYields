import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
      <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor:'#FFF'}}>
        <div class="container p-2">
          <Link class="navbar-brand" to="/home">
            <img src='media/images/logo.png' alt='logo' style={{ width: "25%" ,borderRadius:"1rem"}} />Green Yields
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" to="/home">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/problem">Problem</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/wizard">Wizard</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/stories">Stories</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/impact">Impact</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/knowledge">Knowledge</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/partners">Partners</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/carbon">Carbon</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/contact">Contact</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/"><i class="fa fa-bars" aria-hidden="true"></i></Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;

