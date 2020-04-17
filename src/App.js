import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { NavLink, useLocation } from 'react-router-dom';
import './App.scss';
class App extends Component {
  getLocation = () => {
    const location = useLocation();
    console.log(location.pathname);
  };

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Home" href="/" scroll>
            <Navigation>
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="/aboutme">About Me</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </Navigation>
          </Header>
          <Drawer title="Navigation">
            <Navigation>
              <NavLink exact to="/">
                Home
              </NavLink>
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
