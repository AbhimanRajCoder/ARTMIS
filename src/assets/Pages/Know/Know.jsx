import React from 'react'
import "./know.css"
import Navbar from "../Navbar/Navbar";

const Know = () => {
  return (
    <div>
<Navbar />
<div className="knowheadingdiv">
<h2 className='knowhead'>Know Your Universe</h2>
</div>

<iframe className="iframe" src="https://eyes.nasa.gov/apps/solar-system/#/story/psp_perihelion?slide=slide_2" title="W3Schools Free Online Web Tutorials"></iframe>

    </div>
  )
}

export default Know
