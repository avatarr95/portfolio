import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
  state = {
    activeTab: 0,
  };
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Django</Tab>
          <Tab>Python</Tab>
          <Tab>React</Tab>
        </Tabs>

        <section className="projects-grid">{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default Projects;
