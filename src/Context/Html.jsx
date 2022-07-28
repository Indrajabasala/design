import React from 'react';
// import './Html.css'
function Head() {
    return(
        <>
        {/* <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div style={{paddingLeft:"16px"}}>
          <h2>Top Navigation Example</h2>
          <p>Some content..</p>
        </div> */}


<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
   <a n="navbar-brand" href="#">
    <img src="bird.jpg" alt="logo" style={{width:"40px"}}/>
  </a>
  
   <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="#">Link 1</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 2</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Link 3</a>
    </li>
  </ul>
</nav>

<div className="container-fluid">
  <h3>Brand / Logo</h3>
  <p>When using the .navbar-brand class on images, Bootstrap 4 will automatically style the image to fit the navbar.</p>
</div>
        
        </>
    )
}
export default Head