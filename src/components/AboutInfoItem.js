import React from 'react';
import styled from 'styled-components';
import PText from './PText';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  gap: 5rem;
  margin-top: 5rem;
  .title {
    font-size: 2.4rem;
  }
  .items {
    padding: 5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    left: 18rem;
    position: absolute;
  }
  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;

    :hover {
      opacity: .9;
      transition: all .3s;
    }
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    .items {
      position: initial;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

export default function AboutInfoItem({
  title = 'Title',
  items = ['HTML', 'CSS'],
}) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <PText className='tech'>{item}</PText>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}
