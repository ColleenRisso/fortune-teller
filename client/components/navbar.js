/* eslint-disable complexity */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import HelpIcon from '@material-ui/icons/Help'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
import {UserHome} from './user-home'
import {Login} from './auth-form'
import UserForm from './UserForm'
import Graph from './Graph'
import About from './About'
import {Link} from 'react-router-dom'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
})

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabSelected: 3
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, value) => {
    this.setState({
      tabSelected: value
    })
  }

  render() {
    const {handleClick, isLoggedIn, classes, onDrawerToggle} = this.props
    const {tabSelected} = this.state
    console.log('tabSelected', tabSelected)
    console.log('******this.props', this.props)
    return (
      <React.Fragment>
        <AppBar color="primary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={8} alignItems="center">
              <Hidden smUp>
                <Grid item>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs />
              <Grid item>
                <Typography className={classes.link} component="a" href="#">
                  Developer Code
                </Typography>
              </Grid>
              <Grid item>
                <Tooltip title="Alerts • No alters">
                  <IconButton color="inherit">
                    <NotificationsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton
                  color="inherit"
                  className={classes.iconButtonAvatar}
                >
                  <Avatar
                    className={classes.avatar}
                    src="https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1_copy_20-512.png"
                  />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          className={classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
        >
          <Toolbar>
            <Grid container alignItems="center" spacing={8}>
              <Grid item xs>
                <Typography color="inherit" variant="h1">
                  Incoming!
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="inherit"
                  size="small"
                >
                  Form Assistance
                </Button>
              </Grid>
              <Grid item>
                <Tooltip title="Help">
                  <IconButton color="inherit">
                    <HelpIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component="div"
          className={classes.secondaryBar}
          color="primary"
          position="static"
          elevation={0}
        >
          {this.handleChange}>
          {isLoggedIn ? (
            <div>
              {/* The navbar will show these links after you log in */}
              <Tabs
                value={tabSelected}
                textColor="inherit"
                onChange={this.handleChange}
              >
                <Tab
                  key="Home"
                  textColor="inherit"
                  label="Home"
                  component={Link}
                  to="/home"
                />
                <Tab
                  key="Projection"
                  textColor="inherit"
                  label="Projection"
                  component={Link}
                  to="/projection"
                />
                <Tab
                  key="Creat Graphs"
                  textColor="inherit"
                  label="Create Graphs"
                  component={Link}
                  to="/graph"
                />
                <Tab
                  key="About"
                  textColor="inherit"
                  label="About"
                  component={Link}
                  to="/about"
                />
              </Tabs>
            </div>
          ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Tabs
                value={tabSelected}
                textColor="inherit"
                onChange={this.handleChange}
              >
                <Tab
                  key="Sign-in"
                  textColor="inherit"
                  label="Sign-in"
                  component={Link}
                  to="/login"
                />
                <Tab
                  textColor="inherit"
                  label="Projection"
                  component={Link}
                  to="/projection"
                />
                <Tab
                  textColor="inherit"
                  label="Create Graphs"
                  component={Link}
                  to="/graph"
                />
                <Tab
                  textColor="inherit"
                  label="About"
                  component={Link}
                  to="/about"
                />
              </Tabs>
            </div>
          )}
        </AppBar>

        {/* These are for everyone */}
        {/* {tabSelected === 0 && !isLoggedIn ? <Login /> : null}
        {tabSelected === 1 && <UserForm />}
        {tabSelected === 2 && <Graph />}
        {tabSelected === 3 && <About />} */}
        {/* These are for logged in users (must contain duplicates*/}
        {/* {tabSelected === 0 && isLoggedIn ? <UserHome /> : null} */}
      </React.Fragment>
    )
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(Navbar)
)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired
  // onDrawerToggle: PropTypes.func.isRequired
}
