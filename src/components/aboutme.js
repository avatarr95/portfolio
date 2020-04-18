import React from "react";
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";
import styled from "styled-components";
import AvatarImage from "../assets/images/ym.jpg";
import styles from "../App.module.scss";

const Paragraph = styled.p`
    width: 75%;
    margin: auto;
    padding-top: 1em;
`

const AboutMe = () => (
    <div className={styles.contactBody}>
    <Grid className={styles.contactGrid}>
        <Cell col={12}>
            <h2>Piotr Zawierucha</h2>
            <img 
            // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            src={AvatarImage}
            alt="avatar"
            style={{height: '250px'}}/>
            <Paragraph>
                I am a 25 yo. Full Stack Web Developer although I graduated from Financial Analysis (Masters). My goal is to learn as much about Django and React as I can to create and deploy my own full stack applications.
                I have written a social website for football fans with the registration/login, post, comment and like system in: Django, HTML5/CSS3 + CSS Grid, jQuery, AJAX, PostgreSQL and Python.
                The second project is a Resume Builder, which uses a Redis database and WeasyPrint and is completely for free. The code is open for everyone (check Github).
                I am interested in chess, soccer, forex, economy and innovation technologies, books and physiotheraphy. Feel free to ask me any questions (click the "Contact" tab for more).
            </Paragraph>
        </Cell>
    </Grid>
    </div>
)

export default AboutMe;