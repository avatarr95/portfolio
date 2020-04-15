import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'react-mdl';
import PiotrImage from '../assets/images/Pjoter1.jpg';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const Landing = () => (
  <Wrapper>
    <Grid className="landing-grid">
      <Cell col={12}>
        <img src={PiotrImage} alt="avatar" className="avatar-img" />

        <div className="banner-text">
          <h1>Full stack web dev</h1>
          <hr />

          <p className="technologies">
            Python | Django + Rest Framework | HTML/CSS | Redis | PostgreSQL{' '}
          </p>
          <p className="basics">
            Basics: Celery | Selenium | ReactJS | jQuery | AJAX | Bootstrap | Regex{' '}
          </p>
        </div>
      </Cell>
    </Grid>
  </Wrapper>
);

export default Landing;
