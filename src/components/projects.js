import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';


class Projects extends Component {
  state= { activeTab: 0 };

  toggleCategories = () => {

    if(this.state.activeTab === 0){
      const Projects = [
        {
          name: "Resume Builder",
          description: "A resume builder to create a modern, nicely looking Resume totally for free",
          link: "https://github.com/avatarr95/Free-Resume-Builder",
          imgLink: ""       
        },
        {
          name: "Social Website For Football Fans",
          description: "A social website with authentication, post, comment and like system implemented",
          link: "https://github.com/avatarr95/Full-Social-Website-for-Football-Fans",
          imgLink: ""        
        },
    ]
        
      return(
        <div className="projects-grid">
          {Projects.map(project => (
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >
                {project.name}
              </CardTitle>
              <CardText>
                {project.description}
              </CardText>
              <CardActions border style={{textAlign: "center"}}>
                <Button href={project.link} colored>GitHub</Button>
              </CardActions>
           </Card>
          ))}
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is </h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } 

  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Django</Tab>
          <Tab>Python</Tab>
          <Tab>React</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;