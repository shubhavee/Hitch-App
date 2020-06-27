<Grid container spacing={1}>
  <Grid item xs>
    <List>
      <ListItem>
      <Image id="profile_photo" src={require('./profile_photo.png')} alt="photo:/"/>
        <div>
          <Typography variant="h4" component="h2">
            {this.state.user.name}
          </Typography>
        </div>
      </ListItem>
    </List>
  </Grid>

    <Grid item xs>
      <List>
        <ListItem>
        <div style={{position: 'absolute', right: 30}}>
          <ButtonGroup
            variant="contained"
            aria-label="full-width contained primary button group">
            <Button id="status_button" className='btn purple lighten-0 z-depth-0'>Settings</Button>
            <Button id="status_button" className='btn purple lighten-0 z-depth-0'>Followers</Button>
            <Button id="status_button" className='btn purple lighten-0 z-depth-0'>Following</Button>
          </ButtonGroup>
        </div>
        </ListItem>
      </List>
    </Grid>
  </Grid>
