import styled from 'styled-components';
import { social } from '../data';
import logoBig from '../assets/images/HI_resized.png';
// import logoSmall from '../assets/images/HI_mobile.png';

const Navbar = () => {
  return (
    <NavContainer className='section-center'>
      {/* <h3 className='nav-header'>hamdiIsmail</h3> */}
      <img src={logoBig} className='logo' alt='logo'></img>
      <div className='icon-container'>
        {social.map((i) => {
          const { icon, id, url } = i;
          return (
            <a
              className='icon'
              target='_blank'
              rel='noreferrer'
              key={id}
              href={url}
            >
              {icon}
            </a>
          );
        })}
      </div>
    </NavContainer>
  );
};
export default Navbar;
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-container {
    display: flex;
    gap: 1rem;

    .icon {
      width: 24px;
      height: 24px;
    }
  }
`;
