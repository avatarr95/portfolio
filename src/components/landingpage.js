import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'react-mdl';
import PiotrImage from '../assets/images/Pjoter1.jpg';
import styles from '../App.module.scss';

const Wrapper = styled.div`
  width: 100%;
  margin: auto;
`;

const Landing = () => (
  <Wrapper>
    <Grid className={styles.landingGrid}>
      <Cell col={12}>
        <img src={PiotrImage} alt="avatar" className={styles.avatarImg} />

        <div className={styles.bannerText}>
          <h1>Full Stack Web Developer</h1>
          <hr />

          <p className={styles.technologies}>
            Python | Django + Rest Framework | HTML/CSS | Redis | PostgreSQL{' '}
          </p>
          <p className={styles.basics}>
            Basics: Celery | Selenium | ReactJS | jQuery | AJAX | Bootstrap | Regex{' '}
          </p>

          <div className={styles.socialLinks}>
            {/* Linked In */}
            <a
              href="https://www.linkedin.com/in/piotrzawierucha95/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/avatarr95/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/pzawierucha"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-facebook-square" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Cell>
    </Grid>
  </Wrapper>
);

export default Landing;
