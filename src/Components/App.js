import React, { useState, useEffect } from "react";
import Start from "./Body/Start";
import Profile from "./Body/Profile";
import Contact from "./Body/Contact";
import Projects from "./Body/Projects";
import axios from "axios"
import $ from 'jquery'
import "../scss/main.scss";
import "../scss/grid.scss";
import "../scss/typography.scss";
import "../scss/misc.scss";


function App() {
  var arr = []
  var coordinates = {}
  // const [coordinates, setCoordinate] = useState({})
  var previous = -1, current = 0, next = 1, scrolled = false


  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }
  async function showPosition(position) {
    coordinates = await { latitude: position.coords.latitude, longitude: position.coords.longitude, accessAt: new Date() }
    saveUserSession()
  }

  async function saveUserSession() {
    if (localStorage.getItem("sessionID")) {
      var res = await axios.put(`http://localhost:4000/session/user/${localStorage.getItem('sessionID')}`, coordinates)
    } else {
      var res = await axios.post("http://localhost:4000/session/user", coordinates)
      localStorage.setItem("sessionID", res.data.user._id)
    }
  }



  const eventHandler = {
    handlers: {
      wheel(e) {
        if (!scrolled) {
          scrolled = true
          // Scroll down
          if (e.deltaY > 0 && current < arr.length - 1) {
            $("html, body,#root__app").animate({ scrollTop: arr[next].offsetTop }, 1000)
            current += 1
          }
          //Scroll up
          if (e.deltaY < 0 && current > 0) {
            $("html, body,#root__app").animate({ scrollTop: arr[previous].offsetTop }, 1000)
            current -= 1
          }
          setTimeout(() => { scrolled = false }, 2000)
          next = current + 1
          previous = current - 1
        }
      },
      touchend(e) {
        if (e.changedTouches[0].pageY > e.view.innerHeight / arr.length && current < arr.length - 1) {
          $("html, body,#root__app").animate({ scrollTop: arr[next].offsetTop }, 1000)
          current += 1
        }
        if (e.changedTouches[0].pageY < e.view.innerHeight / arr.length && current > 0) {
          $("html, body,#root__app").animate({ scrollTop: arr[previous].offsetTop }, 1000)
          current -= 1
        }
        next = current + 1
        previous = current - 1
      },
      default(e) {
        console.log("unhandled event: %s", e.type);
      }
    },
    handleEvent(e) {
      switch (e.type) {
        case "wheel":
          this.handlers.wheel(e);
          break;
        case "touchend":
          if (e.target.className.includes("container")) { this.handlers.touchend(e) }
          break
        default:
          this.handlers.default(e);
      }
    }
  }





  useEffect(() => {
    Object.keys(eventHandler.handlers)
      .map(eventName => window.addEventListener(eventName, eventHandler))
    var div = document.getElementById("root__app").children
    for (var slice of div) {
      arr.push({ el: slice, offsetTop: slice.offsetTop, visited: false })
    }
    getLocation()
  }, [coordinates])
  return (
    <div className="app__root" id="root__app">
      <Start />
      <Profile />
      <Projects />
      <Contact />
    </div>
  );

}
export default App;
