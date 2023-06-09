import React from 'react';
import styled from 'styled-components';

import pdf from '../assets/files/CV.pdf'

import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-sec-img.jpg';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .about__link {
    font-size: 3rem;
    strong {
      :hover {
        color: var(--deep-dark);
      }
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 5rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__items {
      margin-top: 10rem;
    }
    .about__info__item {
      margin-bottom: 5rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__link {
      font-size: 2.8rem;
    }
  }
`;
const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
)

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Andrii Tykhoniuk</span>
              </p>
              <h2 className="about__heading">A Front-end Developer</h2>
              <div className="about__info">
                <PText>
                  ... I’m from Ukraine. Now I am in Wroclaw. I have been living here for 4 years.I’m a professional results-oriented Front-end developer, with a successful record of cross-browser semantic adaptive layout. Flexibility is one of my main features that is why I can adapt to any working conditions. I have more than 2 years of experience, creating responsive websites and applications using HTML, CSS, JavaScript, REACT, REDUX, TypeScript, Bootstrap, and Docker.I am a quiet, active, open, and motivated individual, due to my strong analytical and critical thinking I can find simple solutions to complex problems. I have a high level of self-organization and self-development. I know how to find a common language with different people, and I am not afraid to take responsibility. I believe that our whole life is a <b>constant continuous development</b>.Therefore I made my choice.
                  <br/>And you ? <br/><br/>
                  To find more information <Emoji label="cool" symbol="👇" />
                </PText>
              </div>
              <a href={pdf} target="_blank" className='about__link'><strong>Download CV</strong></a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="Varsity"
                items= {['Igor Sikorsky Kyiv Polytechnic Institute', "Master's degree", 'Automation and Computer-integrated Technologies']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Technologies"
                items={['HTML', 'CSS', 'SASS/SCSS/LESS', 'REACT', 'REDUX', 'AJAX', 'AXIOS', 'API', 'REDUX-THUNK', 'REDUX-TOOLKIT', 'REACT-ROUTER']}
              />
              <AboutInfoItem
                title="Tools"
                items={['WEBPACK', 'GULP', 'GIT', 'NPM', 'PHOTOSHOP', 'FIGMA', 'DEVTOOLS', 'BOOTSTRAP', 'JQUERY']}
              />
              <AboutInfoItem
                title="Languages"
                items={['JavaScript', 'TypeScript']}
              />
            </div>
          </div>
        </div>
      </AboutPageStyles>
    </>
  );
}
