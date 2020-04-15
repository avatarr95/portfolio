import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { NavLink } from 'react-router-dom';
import './App.scss';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Title" scroll>
            <Navigation>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/aboutme">About Me</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <NavLink to="/resume">Resume</NavLink>
              <NavLink to="/aboutme">About Me</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
