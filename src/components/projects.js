import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';
import styles from '../App.module.scss';
import Gallery, { Images } from './projectImages';
import SoccerImage from '../assets/images/soccer.jpg';
import ResumeImage from '../assets/images/Hired.png';
import PythonImage from '../assets/images/python.jpg';
import ReduxImage from '../assets/images/redux.jpg';
import ReactImage from '../assets/images/react_logo.jpg';
import BlogImage from '../assets/images/blog.jpg';
import EbarterImage from '../assets/images/ebarter.jpg';

class Projects extends Component {
  state = { activeTab: 0, activePhoto: 0 };

  fillTheData = (projectDict) => {
    const filledData = [...projectDict].map((project) => (
      <Card shadow={5} style={{ minWidth: '450', margin: 'auto', width: 350 }}>
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
  };

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      const DjangoProjects = [
        {
          name: 'eBarter',
          description: 'An OLX like marketplace for barter transactions',
          link: 'https://github.com/avatarr95/ebarter',
          image: EbarterImage,
        },
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
        {
          name: 'Simple Blog',
          description: 'A simple blog build with Django, Python, HTML/CSS',
          link: 'https://github.com/avatarr95/SimpleBlog/',
          image: BlogImage,
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
      const ReactProjects = [
        {
          name: 'This website',
          description: 'The website you are currently on',
          link: 'https://github.com/avatarr95/portfolio',
          image: ReactImage,
        },
        {
          name: 'React/Redux Notes',
          description: 'A simple project which allows you to add and remove your notes',
          link: 'https://github.com/avatarr95/ReduxNotes',
          image: ReduxImage,
        },
      ];

      const FilledData = this.fillTheData(ReactProjects);
      return <>{FilledData}</>;
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
            <img
              style={{ maxWidth: 700, maxHeight: 500 }}
              src={Images[this.state.activePhoto]}
              alt="images"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
