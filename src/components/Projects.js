import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { projects } from '../data';

const Projects = () => {
  const [screenSize, setScreenSize] = useState(window.screen.width);
  const showOverlay = (e) => {
    e.currentTarget.querySelector('.overlay').classList.remove('hide');
    e.currentTarget.querySelector('.overlay').classList.add('show');
    // if (e.target.className === 'overlay hide') {
    //   e.target.classList.remove('hide');
    //   e.target.classList.add('show');
    // }
  };
  const hideOverlay = (e) => {
    e.currentTarget.querySelector('.overlay').classList.remove('show');
    e.currentTarget.querySelector('.overlay').classList.add('hide');
    // if (e.target.className === 'overlay show') {
    //   e.target.classList.remove('show');
    //   e.target.classList.add('hide');
    // }
  };
  useEffect(() => {
    const currentScreen = () => {
      window.addEventListener('resize', () => {
        if (screenSize === window.screen.width) return;
        else {
          setScreenSize(window.screen.width);
        }
      });
    };
    currentScreen();
  }, [screenSize]);
  return (
    <ProjectsContainer
      id='main'
      className='section section-center reveal section-background page'
    >
      <header>
        <h2>Projects</h2>
        <a href='#contact' className='contact'>
          CONTACT ME
        </a>
      </header>
      <div className='projects-container'>
        {projects.map((singleProject) => {
          const {
            id,
            image_large,
            image_small,
            name,
            tech,
            code_url: code,
            project_url: project,
          } = singleProject;
          return (
            <div
              className='single-project-container reveal'
              key={id}
              onMouseOver={showOverlay}
              onMouseLeave={hideOverlay}
            >
              <div className='single-project'>
                <div className='overlay hide'>
                  <a
                    href={project}
                    target='_blank'
                    rel='noreferrer'
                    className='view-project'
                  >
                    <span className='visually-hidden'>
                      Visit my {name} (opens on new tab)
                    </span>
                    VIEW PROJECT
                  </a>
                  <a
                    href={code}
                    target='_blank'
                    rel='noreferrer'
                    className='view-code'
                  >
                    <span className='visually-hidden'>
                      Visit my {name} (opens on new tab)
                    </span>
                    VIEW CODE
                  </a>
                </div>
                <img
                  src={screenSize < 1000 ? image_small : image_large}
                  alt={name}
                />
                <div className='project-info-container'>
                  <h3 className='project-name'>{name}</h3>
                  <p className='project-tech'>{tech}</p>
                  <div className='view-container'>
                    <a
                      href={project}
                      target='_blank'
                      rel='noreferrer'
                      className='mobile-view-project'
                    >
                      <span className='visually-hidden'>
                        Visit my {name} (opens on new tab)
                      </span>
                      VIEW PROJECT
                    </a>
                    <a
                      href={code}
                      target='_blank'
                      rel='noreferrer'
                      className='mobile-view-code'
                    >
                      <span className='visually-hidden'>
                        Visit my {name} (opens on new tab)
                      </span>
                      VIEW CODE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </ProjectsContainer>
  );
};
export default Projects;
const ProjectsContainer = styled.section`
  padding-left: 1rem;
  border-top: 1px solid var(--clr-border);
  @media screen and (max-width: 650px) {
    /* border-bottom: 1px solid var(--clr-border); */
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
    padding-right: 1.85rem;

    h2 {
      font-weight: 700;
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -2.5px;
      color: var(--clr-font);
      @media (max-width: 800px) {
        font-size: 72px;
        line-height: 72px;
        letter-spacing: -2.04545px;
      }
      @media (max-width: 650px) {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -1.13636px;
      }
    }
    h3 {
      font-size: 1.25rem;
    }
  }
  .projects-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    row-gap: 69px;
    @media (max-width: 1200px) {
      column-gap: 24px;
      row-gap: 60px;
      padding-right: 1rem;
    }
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
      row-gap: 40px;
      padding-right: 1rem;
    }
    .single-project-container {
      position: relative;
      max-width: 540px;
      overflow: hidden;
      border-radius: var(--radius);
      .overlay {
        position: absolute;
        width: 100%;
        height: 75.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #000;
        border-radius: var(--radius);
        gap: 48px;
        z-index: 10;
        transition: all 0.3s ease-in-out;
        @media (max-width: 800px) {
          display: none;
        }

        .view-project {
          width: max-content;
          color: var(--clr-font);
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: 2.28571px;
          border-bottom: 2px solid var(--clr-green);
          padding-bottom: 10px;
          opacity: 1;
          :hover {
            color: var(--clr-green-saturated);
          }
        }
        .view-code {
          width: max-content;
          color: var(--clr-font);
          text-decoration: none;
          font-weight: 700;
          font-size: 16px;
          line-height: 26px;
          letter-spacing: 2.28571px;
          border-bottom: 2px solid var(--clr-green);
          padding-bottom: 10px;
          margin-left: 18px;
          margin-right: 17px;
          opacity: 1;
          :hover {
            color: var(--clr-green-saturated);
          }
        }
      }
      .single-project {
        /* position: absolute; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        width: inherit;
        border-radius: var(--radius);
        /* height: inherit; */
        /* width: 540px;
        height: 487px; */
        /* .project-img {
          width: inherit;
          height: 400px;
          width: 540px;
          height: 400px;
        } */
        img {
          width: 100%;
          height: 100%;
          opacity: 0.6;
          border-radius: var(--radius);
        }
        .project-info-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          /* height: 67px; */
          .project-name {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: var(--clr-font);
            @media (max-width: 800px) {
              margin-bottom: 7px;
            }
          }
          .project-tech {
            font-weight: 500;
            font-size: 18px;
            line-height: 28px;
            color: var(--clr-font-body);
          }
          .view-container {
            margin-top: 20px;
            display: flex;
            gap: 30px;
          }
          .mobile-view-project {
            display: none;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 2.28571px;
            color: var(--clr-font);
            border-bottom: 2px solid var(--clr-green);
            padding-bottom: 10px;
            :hover {
              color: var(--clr-green-saturated);
            }
            @media (max-width: 800px) {
              display: block;
            }
          }
          .mobile-view-code {
            display: none;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            line-height: 26px;
            letter-spacing: 2.28571px;
            color: var(--clr-font);
            border-bottom: 2px solid var(--clr-green);
            padding-bottom: 10px;
            :hover {
              color: var(--clr-green-saturated);
            }
            @media (max-width: 800px) {
              display: block;
            }
          }
        }
      }
    }
  }
`;
