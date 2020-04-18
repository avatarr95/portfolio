import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import styles from '../App.module.scss';
import Gallery, { Images } from './projectImages';
import SoccerImage from '../assets/images/soccer.jpg';
import ResumeImage from '../assets/images/Hired.png';
import PythonImage from '../assets/images/python.jpg';

class Projects extends Component {
  state = { activeTab: 0, activePhoto: 0 };

  fillTheData = (projectDict) => {
    const filledData = [...projectDict].map((project) => (
      <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
        <CardTitle
          style={{
            color: '#fff',
            height: '176px',
            // backgroundImage: 'url(../assets/images./soccer.jpg) center / cover',
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
          }}
        >
          {project.name}
        </CardTitle>
        <CardText>{project.description}</CardText>
        <CardActions border style={{ textAlign: 'center' }}>
          <Button href={project.link} colored>
            GitHub
          </Button>
        </CardActions>
      </Card>
    ));
    return <div className={styles.projectsGrid}>{filledData}</div>;
  };

  changeDisplayedPhoto = (e) => {
    e.preventDefault();
    const PhotoId = e.target.getAttribute('id');

    this.setState({
      ...this.state,
      activePhoto: PhotoId,
    });

    console.log(PhotoId);
  };

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      const DjangoProjects = [
        {
          name: 'Resume Builder',
          description:
            'A resume builder to create a modern, nicely looking Resume totally for free',
          link: 'https://github.com/avatarr95/Free-Resume-Builder',
          image: ResumeImage,
        },
        {
          name: 'Social Website For Football Fans',
          description:
            'A social website with authentication, post, comment and like system implemented',
          link: 'https://github.com/avatarr95/Full-Social-Website-for-Football-Fans',
          image: SoccerImage,
        },
      ];

      const FilledData = this.fillTheData(DjangoProjects);

      return <>{FilledData}</>;
    } else if (this.state.activeTab === 1) {
      const PythonProjects = [
        {
          name: 'Instagram Bot',
          description: 'An Instagram bot build with python and selenium',
          link: 'https://github.com/avatarr95/InstagramBot',
          image: PythonImage,
        },
        {
          name: 'Vistula Suits Discount Finder',
          description:
            'A script that looks for suits on Vistula webpage and sorts them by biggest discount.',
          link: 'https://github.com/avatarr95/Vistula-Suit-Discount-Finder',
          image: PythonImage,
        },
        {
          name: 'Homebrew API data analyzer',
          description:
            'A script which analyzes the number of times a certain package has been installed with Homebrew.',
          link: 'https://github.com/avatarr95/Homebrew-API-package-analyzer',
          image: PythonImage,
        },
      ];
      const FilledData = this.fillTheData(PythonProjects);
      return <>{FilledData}</>;
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is VueJS</h1>
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Django</Tab>
          <Tab>Python</Tab>
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
          <div className={styles.gallery}>
            <h2>GALLERY</h2>
            <hr />
          </div>
          <Cell col={6} style={{ textAlign: 'center' }}>
            <Gallery changePhotoFn={this.changeDisplayedPhoto} />
          </Cell>
          <Cell col={6} style={{ textAlign: 'center' }}>
            <img style={{ maxWidth: 700, maxHeight: 500 }} src={Images[this.state.activePhoto]} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
