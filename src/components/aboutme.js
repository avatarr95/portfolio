import React from 'react';
import { Grid, Cell } from 'react-mdl';
import styled from 'styled-components';
import AvatarImage from '../assets/images/ym.jpg';
import styles from '../App.module.scss';

const Paragraph = styled.p`
  width: 75%;
  margin: auto;
  padding-top: 1em;
`;

const AboutMe = () => (
  <div className={styles.contactBody}>
    <Grid className={styles.contactGrid}>
      <Cell col={12}>
        <h2>Piotr Zawierucha</h2>
        <img
          // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
          src={AvatarImage}
          alt="avatar"
          style={{ height: '250px' }}
        />
        <Paragraph>
          I am a 25 yo self taught Web Developer with the specialisation of Django and currently
          learning React. I have written a several projects such as social website for football fans
          with the registration/login, post, comment and like system using: Django, HTML5/CSS3 + CSS
          Grid, jQuery, AJAX, PostgreSQL and Python, a Resume Builder, which uses a Redis database
          and WeasyPrint to download Resume in pdf format, a couple of scripts and bots in Python
          (job projects are not included) and several React apps (such as this website :)). The code is
          open for everyone (check Github). I am interested in chess, soccer, forex, economy and
          innovation technologies, books and physiotheraphy. Feel free to ask me any questions
          (click the "Contact" tab for more).
        </Paragraph>
      </Cell>
    </Grid>
  </div>
);

export default AboutMe;
