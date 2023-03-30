import styled from 'styled-components';
import Navbar from './Navbar';

const Contact = () => {
  return (
    <ContactContainer id='contact' className='section '>
      <div className='contact-container section-center'>
        <div className='info-container'>
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form name='contact' method='POST' data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <input
            className='form'
            type='text'
            name='name'
            placeholder='NAME'
            // onChange={onNameChange}
          />
          <input
            className='form'
            type='email'
            name='email'
            placeholder='EMAIL'
            // onChange={onEmailChange}
          />
          <textarea
            className='form msg'
            name='message'
            cols='30'
            rows='10'
            placeholder='MESSAGE'
            // onChange={onMessageChange}
          ></textarea>
          <button type='submit' className='send-btn'>
            SEND MESSAGE
          </button>
        </form>
      </div>
      <Navbar />
    </ContactContainer>
  );
};
export default Contact;
const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  background: var(--clr-contact-background);
  /* padding: 81px 165px; */
  .contact-container {
    display: flex;
    gap: 18.75%;
    /* gap: 220px; */
    @media (max-width: 1180px) {
      flex-direction: column;
      justify-content: center;
      /* max-width: 768px;
      height: 806px; */
      gap: 48px;
      /* margin-left: 162px;
      border-bottom: none; */
    }
    @media (max-width: 650px) {
      /* top: 60px;
      width: 343px;
      height: 515px;
      margin-left: 0; */
    }
    .info-container {
      h1 {
        font-weight: 700;
        font-size: 88px;
        line-height: 88px;
        letter-spacing: -2.5px;
        color: var(--clr-font);
        /* @media (max-width: 1180px) {
          font-weight: 700;
          font-size: 72px;
          line-height: 72px;
          text-align: center;
          letter-spacing: -2.04545px;
        } */
        @media (max-width: 650px) {
          font-size: 40px;
          line-height: 40px;
          text-align: center;
          letter-spacing: -1.13636px;
        }
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 1px;
        color: var(--clr-font-body);
        /* @media (max-width: 1180px) {
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          text-align: center;
        } */
        @media (max-width: 650px) {
          font-size: 16px;
          line-height: 26px;
          text-align: center;
        }
      }
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 445px;
      /* height: 327px; */
      @media (max-width: 650px) {
        width: inherit;
        /* width: 343px; */
        /* height: 327px; */
      }
      .form {
        /* padding: 1rem 1.5rem; */
        width: inherit;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        :focus {
          outline: none;
          border-bottom: 1px solid var(--clr-green);
        }
      }
      input {
        /* height: 43px; */
        /* width: 443px; */
        padding-left: 24px;
        padding-bottom: 16px;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.222222px;
        color: var(--clr-font);
        opacity: 1.2;
      }
      .msg {
        /* padding-left: 24px; */
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: -0.222222px;
        color: var(--clr-font);
        opacity: 1.2;
      }
      .send-btn {
        align-self: flex-end;
        text-decoration: none;
        width: max-content;
        height: 38px;
        font-weight: 700;
        font-size: 16px;
        line-height: 26px;
        letter-spacing: 2.28571px;
        color: #ffffff;
        border-bottom: 2px solid var(--clr-green);
        :hover {
          color: var(--clr-green);
        }
      }
    }
  }
`;
