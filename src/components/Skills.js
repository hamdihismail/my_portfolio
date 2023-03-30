import styled from 'styled-components';
import { skills } from '../data';

const Skills = () => {
  return (
    <SkillsContainer className='section section-center'>
      {skills.map((singleSkill) => {
        const { id, skill, years } = singleSkill;
        return (
          <div className='skill-container' key={id}>
            <h2 className='skill'>{skill}</h2>
            <p className='years'>{years}</p>
          </div>
        );
      })}
    </SkillsContainer>
  );
};
export default Skills;
const SkillsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 58px;
  border-top: 1px solid var(--clr-border);
  margin-top: 5rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 800px) {
    /* width: 708px;
    height: 451px;
    left: 30px;
    top: 660px; */
    row-gap: 52px;
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    /* width: 345px;
    height: 604px; */
    /* left: 16px; */
    /* left: 4.2%;
    top: 747px; */
    row-gap: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-bottom: 1px solid var(--clr-border);
  }
  .skill {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -1.5px;
    color: var(--clr-font);
    @media (max-width: 650px) {
      font-size: 32px;
      line-height: 40px;
      text-align: center;
      letter-spacing: -1px;
    }
  }
`;
