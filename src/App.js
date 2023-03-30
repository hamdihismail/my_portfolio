import './index.css';
import circle from './assets/images/pattern-circle.svg';
import rings from './assets/images/pattern-rings.svg';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Wrapper>
      <img className='rings-1' src={rings} alt='rings' />
      <img className='circle' src={circle} alt='circle' />
      <img className='rings-2' src={rings} alt='rings' />
      <img className='rings-3' src={rings} alt='rings' />
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
