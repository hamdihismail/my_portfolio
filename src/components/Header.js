import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer className='header-flex section section-center section-background'>
      <div className='text-container'>
        <header>
          <h1 title='Hamdi’s Portfolio Website' className='header-intro'>
            Nice to meet you! I’m{' '}
            <span className='underline'>Hamdi Ismail</span>.
          </h1>
        </header>
        <p className='header-text'>
          Based in Canada, I’m a software developer passionate about building
          accessible web apps that users love.
        </p>
        <div className='contact-container'>
          <p className='lets-work'>Let’s Work Together !</p>
          <a href='#contact' className='contact'>
            CONTACT ME
          </a>
        </div>
      </div>
      <img className='profile-img' alt='profile' />
    </HeaderContainer>
  );
};
export default Header;
const HeaderContainer = styled.main`
  display: flex;
  padding-left: 1rem;
  border-top: 1px solid var(--clr-border);
  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: center;
    border-bottom: 1px solid var(--clr-border);
    padding: 1rem;
  }
  .header-flex.section.section-center {
    @media screen and (max-width: 650px) {
      padding: 1rem 0 !important;
    }
  }
  .text-container {
    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .header-intro {
    font-weight: 700;
    font-size: 88px;
    line-height: 88px;
    letter-spacing: -2.5px;
    color: var(--clr-font);
    margin-bottom: 43px;
    @media (max-width: 1000px) {
      font-size: 72px;
      line-height: 72px;
      letter-spacing: -2.04545px;
      margin-bottom: 60px;
    }
    @media (max-width: 650px) {
      font-weight: 700;
      font-size: 35px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -1.13636px;
      margin-bottom: 24px;
    }
    .underline {
      border-bottom: 7px solid var(--clr-green);
      @media (max-width: 650px) {
        border-bottom: 4px solid var(--clr-green);
      }
    }
  }
  .header-text {
    max-width: 445px;
    font-weight: 600;
    font-size: 18px;
    /* font-size: 1.5rem; */
    line-height: 28px;
    color: var(--clr-font-body);
    margin-bottom: 66px;
    @media (max-width: 800px) {
      margin-bottom: 34px;
    }
    @media (max-width: 650px) {
      font-weight: 500;
      font-size: 16px;
      line-height: 26px;
      text-align: center;
      margin-bottom: 24px;
    }
  }
  .profile-img {
    flex-shrink: 0;
    width: 445px;
    height: 450px;
    border-radius: 50%;
    opacity: 0.6;

    @media (max-width: 800px) {
      width: 330px;
      height: 330px;
    }
  }
  .contact-container {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    @media screen and (max-width: 650px) {
      align-items: center;
    }
    .lets-work {
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
      color: var(--clr-font-body);
      @media (max-width: 650px) {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;
