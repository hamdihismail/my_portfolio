import styled from 'styled-components';
import { social } from '../data';
import logoBig from '../assets/images/HI_resized.svg';
// import logoSmall from '../assets/images/HI_mobile.png';

const Navbar = () => {
  return (
    <NavContainer className='section-center'>
      {/* <h3 className='nav-header'>hamdiIsmail</h3> */}
      <img src={logoBig} className='logo' alt='logo'></img>
      <div className='icon-container'>
        {social.map((i) => {
          const { icon, id, url, name } = i;
          return (
            <a
              className='icon'
              target='_blank'
              rel='noreferrer'
              alt={name}
              key={id}
              href={url}
            >
              <span className='visually-hidden'>
                Visit my {name} (opens on new tab)
              </span>
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
  img {
    width: 200px;
    height: 150px;
  }
  .icon-container {
    display: flex;
    gap: 1rem;

    .icon {
      width: 24px;
      height: 24px;
    }
  }
`;
