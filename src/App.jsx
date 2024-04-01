import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar */}
      <div class="navbar">
        <span>
          <h1 id="navhead">Mʏ Pᴏʀᴛꜰᴏʟɪᴏ</h1>
        </span>

        <div id="navbuttons">
          <a id="navbutton" href="">Home</a>
          <a id="navbutton" href="">Experience</a>
          <a id="navbutton" href="">Contact Me</a>
        </div>
      </div>

      {/* Banner */}
      <div class="banner">
        <img id="profile" src="https://img.freepik.com/premium-photo/cat-wearing-suit_838395-220.jpg?size=626&ext=jpg" />
        <div id="introbox">
          <h2 id="intro">Hello, I'm Paul!</h2>
          <p id="desc">This is my portfolio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula aliquam venenatis. Integer eget malesuada felis. Praesent fermentum fringilla neque, hendrerit tempor odio dapibus quis. Fusce pharetra laoreet convallis. Donec turpis metus, posuere pellentesque volutpat in, suscipit sit amet sem. Nam non lacus nibh.</p>
        </div>
      </div>

      {/* Cards */}
      <div class="cardcontainer">
        <div id="card">
          <img id="cardimg" src="https://media.istockphoto.com/id/533534121/photo/university-of-sydney.jpg?s=612x612&w=0&k=20&c=Br3HNKWNtJTAcKJGZO8c6-TY3IrBElzj9xQ6wyQ5SrY=" />
          <h2 id="place">Lorem University</h2>
          <p id="carddesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula aliquam venenatis. Integer eget malesuada felis.</p>
        </div>
        <div id="card">
          <img id="cardimg" src="https://media.istockphoto.com/id/533534121/photo/university-of-sydney.jpg?s=612x612&w=0&k=20&c=Br3HNKWNtJTAcKJGZO8c6-TY3IrBElzj9xQ6wyQ5SrY=" />
          <h2 id="place">Ipsum Institute</h2>
          <p id="carddesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula aliquam venenatis. Integer eget malesuada felis.</p>
        </div>
        <div id="card">
          <img id="cardimg" src="https://media.istockphoto.com/id/533534121/photo/university-of-sydney.jpg?s=612x612&w=0&k=20&c=Br3HNKWNtJTAcKJGZO8c6-TY3IrBElzj9xQ6wyQ5SrY=" />
          <h2 id="place">Dolor Inc.</h2>
          <p id="carddesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula aliquam venenatis. Integer eget malesuada felis.</p>
        </div>
      </div>

      {/* Contact Form */}
      <div class="contact">
        
      </div>
    </>
  )
}

export default App
