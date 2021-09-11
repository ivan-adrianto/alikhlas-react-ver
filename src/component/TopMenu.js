import React from 'react';
import './TopMenu.css'

function TopMenu(props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <a className="navbar-brand" href="#home">
            <p>AL-IKHLAS</p>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#programs">Program <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#tentang-kami">Tentang Kami</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#updates">Updates</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#donasi">Donasi</a>
                </li>
            </ul>
        </div>
        <div class="text-white">
          <a href="" className="mr-2">
                <i className="fas fa-phone"></i>
                <div className="d-none d-xl-inline">+62812345678</div>
                </a>
          <a href="">
          <i class="fas fa-envelope"></i>
          <div class="d-none d-xl-inline">info@al-ikhlas.or.id</div>
          </a>
        </div>
        </nav>
      </div>
    );
}

export default TopMenu;