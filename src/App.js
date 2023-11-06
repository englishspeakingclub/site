import logo from './img/logo.svg';
import nest from './img/logo-nestle.svg';
import hero from './img/hero-image.png';
import pre from './img/preloader.svg';
import './App.css';
import activitiesList from './activities-list.json';
import React, { useEffect, useState } from 'react';

function getRandomActivity() {
  const randomIndex = Math.floor(Math.random() * activitiesList.length);
  return activitiesList[randomIndex];
}

function App() {
  const [randomActivity, setRandomActivity] = useState(null);

  useEffect(() => {
    const startButton = document.querySelector(".btn");
    const heroSection = document.querySelector(".hero");
    const contentDiv = document.querySelector(".content");
    const preloader = document.querySelector(".preloader");
    const btnTextBefore = startButton.querySelector(".btn__text--before");
    const btnTextAfter = startButton.querySelector(".btn__text--after");
    const preloaderImg = document.querySelector(".preloader__img");

    startButton.addEventListener("click", function () {
      startButton.disabled = true;
      btnTextBefore.style.display = "none";
      btnTextAfter.style.display = "inline";
      heroSection.classList.add("collapsed");
      contentDiv.classList.remove("hidden");

      setRandomActivity(getRandomActivity());
    });

    preloaderImg.addEventListener("animationend", function () {
      preloader.remove();
    });

    setRandomActivity(getRandomActivity());

  }, []);

  const resetRandomActivity = () => {
    setRandomActivity(getRandomActivity());
  };

  return (
 <div className="App">
    <div class="wrapper">
        <header class="header">
            <div class="logo__inner --top">
                <img src={logo} alt="logo" class="logo__img"/>
            </div>
            <h1>English Speaking Club</h1>
        </header>
        <main class="main">
            <section class="hero">
                <div class="hero__text">
                    <h2>Join Us for Engaging Discussions and Improve Your Speaking Abilities</h2>
                    <p>Looking to boost your communication skills? Join English Speaking Club and learn to articulate
                        ideas
                        effectively while engaging in dynamic conversations.</p>
                </div>
                <div class="hero__img">
                    <img src={hero} alt="English Speaking Club" class="hero__img-item"/>
                </div>
            </section>
            <div class="start__button">
                <button class="btn" id="startButton">
                    <span class="btn__text--before">Start</span>
                    <span class="btn__text--after">Today
                        is...</span>
                </button>
            </div>
            <div class="content hidden">
              <div className="content__inner">
              <div className="preloader">
            <img src={pre} alt="preloader" className="preloader__img" />
                </div>
                  {randomActivity && (
                  <>
                  <h2>{randomActivity.name}</h2>
                  <p>{randomActivity.description}</p>
                  <a href={randomActivity.link} target="_blank">{randomActivity.linkname}</a>
                  <ol>
                    <li>{randomActivity.listitem1}</li>
                    <li>{randomActivity.listitem2}</li>
                    <li>{randomActivity.listitem3}</li>
                    <li>{randomActivity.listitem4}</li>
                    <li>{randomActivity.listitem5}</li>
                  </ol>
                  </>
                  )}
              </div>
              <button className="btn btn__reset" onClick={resetRandomActivity}>
                Try again
              </button>
            </div>
        </main>
        <footer class="footer">
            <div class="logo__inner --bottom">
                <img class="logo__img" src={nest}  alt="nestle"/>
            </div>
        </footer>
    </div>
      </div>
  );
}

export default App;

