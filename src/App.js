import './index.css';
import circle from './assets/images/pattern-circle.svg';
import rings from './assets/images/pattern-rings.svg';
// import coding from './assets/images/coding1.jpg';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import { useEffect } from 'react';

function App() {
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  };
  window.addEventListener('scroll', reveal);

  reveal();
  // function reveal() {
  //   var reveals = document.querySelectorAll('.reveal');
  //   for (var i = 0; i < reveals.length; i++) {
  //     var windowHeight = window.innerHeight;
  //     var elementTop = reveals[i].getBoundingClientRect().top;
  //     var elementVisible = 150;
  //     if (elementTop < windowHeight - elementVisible) {
  //       reveals[i].classList.add('active');
  //     } else {
  //       reveals[i].classList.remove('active');
  //     }
  //   }
  // }

  return (
    <Wrapper>
      <img className='rings-1' src={rings} alt='rings' />
      <img className='circle' src={circle} alt='circle' />
      <img className='rings-2' src={rings} alt='rings' />
      <img className='rings-3' src={rings} alt='rings' />
      {/* <img className='coding' src={coding} alt='laptop' /> */}
      <div className='coding'></div>
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Contact />
      {/* <Navbar /> */}
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.section`
  position: relative;
  .coding {
    position: absolute;
    z-index: -2;
    opacity: 0.3;
    /* opacity: 0.18; */
    width: 100%;
    height: 100%;
  }
  .rings-1 {
    position: absolute;
    /* width: 530px;
    height: 129px; */
    left: -100px;
    top: 133px;
    opacity: 0.5;
    z-index: -1;
    @media (max-width: 800px) {
      left: -265px;
      top: 86px;
    }
    @media (max-width: 650px) {
      left: -342px;
      top: 124px;
    }
  }
  .circle {
    position: absolute;
    /* width: 129px;
    height: 129px; */
    left: 55%;
    /* left: 48%; */
    /* top: 68.5%; */
    top: 521px;
    @media (max-width: 1000px) {
      left: 45%;
      /* top: 471px; */
      /* left: 680px;
      top: 371px; */
    }
    @media screen and (max-width: 800px) {
      /* top: 60%; */
      top: 450px;
    }
    @media (max-width: 650px) {
      left: 65%;
      /* left: 395px; */
      /* top: 46.55%; */
      top: 354px;
    }
  }
  .rings-2 {
    position: absolute;
    /* width: 530px;
    height: 129px; */
    left: 79.8%;
    top: 1077px;
    /* left: 1149px;
    top: 1077px; */
    opacity: 0.5;
    z-index: -1;
    @media (max-width: 800px) {
      left: 570px;
      top: 1047px;
    }
    @media (max-width: 650px) {
      left: 189px;
      top: 1287px;
    }
  }
  .rings-3 {
    position: absolute;
    /* width: 530px;
    height: 129px; */
    left: -205px;
    top: 85.33%;
    /* top: 3524px; */
    /* bottom: 219px; */
    opacity: 0.5;
    z-index: 10;
    @media (max-width: 800px) {
      left: -368px;
      top: 3304px;
    }
    @media (max-width: 650px) {
      /* position: relative; */
      left: -343px;
      top: 91.7%;
      /* bottom: 100px; */
    }
  }
`;
