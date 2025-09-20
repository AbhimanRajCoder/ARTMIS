import React from 'react'
import nasa from '/images/nasaspace.png'
import Navbar from "../Navbar/Navbar";
import blackhole from '/images/image.png'
import wormhole from '/images/wormhole.png'
import nasarover from '/images/nasarover.png'

import './Blogs.css'

const Blogs = () => {
  return (
<>
<Navbar />

<div classNameName="blogssection">

<div className="headingdiv">
<h2 className='bloghead'>Blogs</h2>
</div>


<div className="blogscards-section">

    
<div className="blog-cards">
<img className="blog-img" src={nasa} alt="Blog Image" />
<div className="blog-card-content">
<h2 className="blog-card-title">NASA Selects Blue Origin to Deliver VIPER Rover</h2>
<p className="blog-card-description">As part of the agency’s Artemis campaign, NASA has awarded Blue Origin of Kent, Washington, a CLPS (Commercial Lunar Payload Services) task order with an option to deliver a rover to the Moon’s South Pole region. </p>
<a href="https://www.nasa.gov/news-release/nasa-selects-blue-origin-to-deliver-viper-rover-to-moons-south-pole/" className="blog-card-link" target='_blank'> Read More </a>
</div>
</div>

<div className="blog-cards">
<img className="blog-img" src={blackhole} alt="Blog Image" />
<div className="blog-card-content">
<h2 className="blog-card-title">Black Hole Basics</h2>
<p className="blog-card-description">Black holes are among the most mysterious cosmic objects, much studied but not fully understood. These objects aren’t really holes. They’re huge concentrations of matter packed into very tiny spaces. A black hole is so dense that gravity just beneath its surface, the event horizon, is strong enough that nothing – not even light – can escape. </p>
<a href="https://science.nasa.gov/universe/black-holes/" className="blog-card-link" target='_blank'> Read More </a>
</div>
</div>

<div className="blog-cards">
<img className="blog-img" src={wormhole} alt="Blog Image" />
<div className="blog-card-content">
<h2 className="blog-card-title">What are wormholes?</h2>
<p className="blog-card-description">A wormhole is thought to be essentially a tunnel from one place in space to another. When you have a massive object in spacetime, it basically creates a curvature of the spacetime in the nearby region. </p>
<a href="https://www.space.com/20881-wormholes.html" className="blog-card-link" target='_blank'> Read More </a>
</div>
</div>

<div className="blog-cards">
<img className="blog-img" src={nasarover} alt="Blog Image" />
<div className="blog-card-content">
<h2 className="blog-card-title">NASA Readies Orion Spacecraft to Receive Wings</h2>
<p className="blog-card-description">Technicians have moved NASAs Artemis II Orion spacecraft out of its assembly stand in preparation for the upcoming installation of its four solar array wings and spacecraft adapter jettison fairings that encapsulate its service module.</p>
<a href="https://www.nasa.gov/blogs/orion/2025/02/25/nasa-readies-orion-spacecraft-to-receive-wings/" className="blog-card-link" target='_blank'> Read More </a>
</div>
</div>
</div>





</div>
</>
  )
}

export default Blogs
