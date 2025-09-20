import React from "react";

import "./Home.css";
import Navbar from "../Navbar/Navbar";
import vid1 from '/videos/vid1.mp4'
import img1 from '/images/img1.png'
import blackhole from '/images/image.png'
import wormhole from '/images/wormhole.png'
import nasa from '/images/nasaspace.png'
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
<Navbar />
<div className="herosection">

<div className="overlay">
<h1 className="heading1">Welcome to ARTMIS</h1>
</div>

<div className="video-section">
<video className="banner-video" autoPlay loop muted>
<source src={vid1} type="video/mp4" />
</video>
</div>


      <div className="cardssection">
        <div className="uppersection">
          <div className="cards">
            <img src={img1} class="cardsimg" />
            <p className="ptext" >NASA Artemis II Moon Rocket</p>
            <a href="/blogs" className="home-blog-link" target='_blank'> Read More </a>
          </div>
        </div>

        <div className="middlesection">
          
          <div className="cards">
            <img src={blackhole} class="cardsimg" />
            <p className="ptext" >Black Hole Basics</p>
            <a href="/blogs" className="home-blog-link" target='_blank'> Read More </a>

          </div>
          <div className="brand-cards">
            <h3 className="brands-heading">ARTMIS</h3>
            <h1 className="pheading">BLOG OF THE DAY</h1>
          </div>
          <div className="cards">
            <img src={wormhole} class="cardsimg" />
               <p className="ptext" >What are wormholes?</p>
               <a href="/blogs" className="home-blog-link" target='_blank'> Read More </a>
          </div>
        </div>

        <div className="uppersection">
          <div className="cards">
            <img src={nasa} class="cardsimg" />
               <p className="ptext" >NASA Selects Blue Origin </p>
               <a href="/blogs" className="home-blog-link" target='_blank'> Read More </a>
          </div>
        </div>
      </div>
</div>

<Footer />
    </>
  );
};

export default Home;
