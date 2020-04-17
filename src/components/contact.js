import React, { Component } from "react";
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";
import styled from "styled-components";
import AvatarImage from "../assets/images/ym.jpg";

const Paragraph = styled.p`
    width: 75%;
    margin: auto;
    padding-top: 1em;
`

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Piotr Zawierucha</h2>
                        <img 
                        // src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        src={AvatarImage}
                        alt="avatar"
                        style={{height: '250px'}}/>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor odio at convallis pretium. Cras eget sodales justo. Vivamus blandit sed risus blandit pellentesque. Nunc erat nunc, rhoncus non lacinia finibus, pretium vel erat. Integer semper mauris placerat nisl efficitur laoreet. Proin quis dictum elit. Duis non dapibus odio, sed faucibus nunc. Maecenas tincidunt orci orci, eu porta magna fermentum id. Duis rhoncus mauris at nibh porta rhoncus. Nunc luctus tortor ante, sed imperdiet lectus vehicula nec.
                        </Paragraph>
                    </Cell>
                    <Cell col={6}>
                        <h2>
                            Contact Me
                        </h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: 30, fontFamily: "Anton"}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>123456789
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: 30, fontFamily: "Anton"}}>
                                        <i className="fa fa-fax" aria-hidden="true"/>123456789
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: 30, fontFamily: "Anton"}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>www@www.com
                                    </ListItemContent>
                                </ListItem>
                             
                            </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;