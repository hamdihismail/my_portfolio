import styled from 'styled-components';
import { skills } from '../data';

const Skills = () => {
  return (
    <SkillsContainer className='section section-center reveal fade-bottom section-background'>
      <h2>Technologies</h2>
      {skills.map((singleSkill) => {
        const { id, skill, icon } = singleSkill;
        return (
          <div className='skill-container reveal' key={id}>
            <img className='icon' src={icon} alt={skill} />
            <p className='skill'>{skill}</p>
          </div>
        );
      })}
    </SkillsContainer>
  );
};
export default Skills;
const SkillsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  /* grid-template-columns: repeat(3, 1fr); */
  /* row-gap: 58px; */
  border-top: 1px solid var(--clr-border);
  margin-top: 5rem;
  margin-bottom: 5rem;
  /* @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  } */
  @media (max-width: 800px) {
    /* width: 708px;
    height: 451px;
    left: 30px;
    top: 660px; */
    /* row-gap: 52px; */
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
    padding-top: 1rem;

    /* width: 345px;
    height: 604px; */
    /* left: 16px; */
    /* left: 4.2%;
    top: 747px; */
    /* row-gap: 24px; */
    /* padding-top: 40px;
    padding-bottom: 40px; */
    /* border-bottom: 1px solid var(--clr-border); */
  }
  h2 {
    margin-left: 1rem;
    grid-column: 1 / 6;
    font-weight: 700;
    font-size: 88px;
    line-height: 88px;
    letter-spacing: -2.5px;
    color: var(--clr-font);
    margin-bottom: 1.5rem;
    @media screen and (max-width: 650px) {
      grid-column: 1 / 4;
      font-size: 40px;
    }
  }
  .skill-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    .skill {
      font-weight: 700;
      font-size: 1rem;
      /* font-size: 48px; */
      /* line-height: 56px; */
      letter-spacing: -1.5px;
      color: var(--clr-font);
      @media (max-width: 650px) {
        /* font-size: 32px;
        line-height: 40px;
        text-align: center;
        letter-spacing: -1px; */
      }
    }
    .icon {
      width: 80px;
      height: 80px;
    }
  }
`;
