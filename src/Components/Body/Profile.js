import React, { useState, useEffect } from "react";
import $ from "jquery";

const Profile = () => {
  const [slices, setSlices] = useState([]);

  const eventHandler = {
    handlers: {
      click(e) {
        if (e.target.className.includes("navigation__item")) {
          var div = document.getElementsByClassName("navigation__item");
          for (var el of div) {
            el.classList.remove("nav__active");
          }
          e.target.classList.add("nav__active");
          $("#carrossel").animate(
            { scrollLeft: e.target.getAttribute("data-value") },
            500
          );
        }
      },
      touchend(e) {
        if (e.target.className.includes("navigation__item")) {
          var div = document.getElementsByClassName("navigation__item");
          for (var el of div) {
            el.classList.remove("nav__active");
          }
          e.target.classList.add("nav__active");
          $("#carrossel").animate(
            { scrollLeft: e.target.getAttribute("data-value") },
            500
          );
        }
      },
    },
    handleEvent(e) {
      switch (e.type) {
        case "click":
          this.handlers.click(e);
          break;
        case "touchend":
          this.handlers.touchend(e);
        default:
          break;
      }
    },
  };
  const componentDidMount = () => {
    var div = document.getElementById("carrossel").children;
    var arr = [];
    for (var slice of div) {
      arr.push({ el: slice, offsetLeft: slice.offsetLeft, active: false });
    }
    setSlices(arr);
    console.log(arr);
  };
  useEffect(componentDidMount, []);
  useEffect(() => {
    Object.keys(eventHandler.handlers).map((eventName) =>
      window.addEventListener(eventName, eventHandler)
    );
  });
  return (
    <div className="page__section">
      <div className="container flex__column align__center">
        <div className="flex__row">
          <div id="carrossel">
            <div className="flex__column">
              <div className="">
                <p className="font__ibmplexsans textcolor__white">
                  .frontend__skills &#123;&nbsp;&nbsp;&#125;
                </p>
              </div>
              <div className="skill__bar">
                <div className="html">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .html
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  80%
                </p>
              </div>
              <div className="skill__bar">
                <div className="css">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .css
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  80%
                </p>
              </div>
              <div className="skill__bar">
                <div className="javascript">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .javascript
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  60%
                </p>
              </div>
              <div className="skill__bar">
                <div className="react">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .react
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  50%
                </p>
              </div>
              <div className="skill__bar">
                <div className="vue">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .vue
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  50%
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex__column">
              <div className="">
                <p className="font__ibmplexsans textcolor__white">
                  backendSkills = (&nbsp;&nbsp;) =&gt; &#123;&nbsp;&nbsp;&#125;
                </p>
              </div>
              <div className="skill__bar">
                <div className="nodeJS">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .nodeJS
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  40%
                </p>
              </div>
              <div className="skill__bar">
                <div className="restAPI">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .restAPI
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  40%
                </p>
              </div>
              <div className="skill__bar">
                <div className="axios">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .axios
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  30%
                </p>
              </div>
              <div className="skill__bar">
                <div className="express">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    .express
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  30%
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="flex__column">
              <div className="">
                <p className="font__ibmplexsans textcolor__white">
                  Soft skills :)
                </p>
              </div>
              <div className="skill__bar">
                <div className="proatividade">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    Proatividade
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  100%
                </p>
              </div>
              <div className="skill__bar">
                <div className="teamwork">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    Teamwork
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  100%
                </p>
              </div>
              <div className="skill__bar">
                <div className="organizacao">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    Organização
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  100%
                </p>
              </div>
              <div className="skill__bar">
                <div className="foco">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    Foco
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  100%
                </p>
              </div>
              <div className="skill__bar">
                <div className="comunicacao">
                  <p className="font__ibmplexsans font__light textcolor__white">
                    Comunicação
                  </p>
                </div>
                <p className="font__ibmplexsans font__light textcolor__white">
                  80%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex__row">
          {slices.map((item, index) => {
            return (
              <div
                key={index}
                className={`navigation__item ${
                  index === 0 ? "nav__active" : ""
                }`}
                data-value={item.offsetLeft}
                data-active={`"${index === 0 ? "true" : "false"}"`}
              >
                &nbsp;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
