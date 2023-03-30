import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer className='header-flex section section-center'>
      <div className='text-container'>
        <h1 className='header-intro'>
          Nice to meet you! I’m <span className='underline'>Hamdi Ismail</span>.
        </h1>
        <p className='header-text'>
          Based in Canada, I’m a software developer passionate about building
          accessible web apps that users love.
        </p>
        <a href='#contact' className='contact'>
          CONTACT ME
        </a>
      </div>
      <img className='profile-img' alt='profile' />
    </HeaderContainer>
  );
};
export default Header;
const HeaderContainer = styled.main`
  display: flex;
  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: center;
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
    @media (max-width: 800px) {
      font-size: 72px;
      line-height: 72px;
      letter-spacing: -2.04545px;
      margin-bottom: 60px;
    }
    @media (max-width: 650px) {
      font-weight: 700;
      font-size: 40px;
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
    font-weight: 500;
    font-size: 18px;
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
`;
