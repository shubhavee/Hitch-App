import {
  Typography,
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  ButtonGroup
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './User.css';
import './network.png';
import Image from 'react-bootstrap/Image';

import React from 'react';

export default class User extends React.Component {

  state = {
    user: [],
    location: [],
  }

  componentDidMount () {
    const { id } = this.props.match.params

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then((user) => {
        this.setState(() => ({
          user: user,
          location: user.address,
        }));
        console.log(user);
      })
  }

  render(){

  let address;

  if (this.state.location.street){
    address = `${this.state.location.street}, ${this.state.location.city}, ${this.state.location.state}, ${this.state.location.postcode}`
  } else {
    address = '';
  }

  return (
    <div className="User" id="network_background">
        <div id="status_bar">

        <div style={{display: 'flex', alignItems: 'center', position: 'relative'}}>
        <Image id="profile_photo" src={require('./profile_photo.png')} alt="photo:/"/>
          <div>
            <Typography variant="h4" component="h2">
              {this.state.user.name}
            </Typography>
          </div>
          <div style={{position: 'absolute', right: 30}}>
            <ButtonGroup
              variant="contained"
              aria-label="full-width contained primary button group">
              <Button id="status_button" className='btn purple lighten-0 z-depth-0'>Settings</Button>
              <Button id="status_button" className='btn purple lighten-0 z-depth-0'>Followers</Button>
              <Button id="status_button" className='btn purple lighten-0 z-depth-0'>Following</Button>
            </ButtonGroup>
          </div>
        </div>

        <Divider id="divider_one"/>

        </div>

        <div id="contact_info_block">
        <Typography variant="h5" component="h2" style={{margin: '20px'}}>
          Contact info
        </Typography>
        <Divider id="divider_two" style={{margin: '0 20px'}} />
        <Grid container spacing={2}>
          <Grid item xs>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Phone number"
                  secondary={this.state.user.phone}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIphoneIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Mobile number"
                  secondary={this.state.user.cell}
                />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs>
            <List>
              <ListItem>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Address"
                  secondary={address}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Email address"
                  secondary={this.state.user.email}
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        </div>
    </div>
  );
}
}
