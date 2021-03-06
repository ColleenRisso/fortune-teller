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
import IconButton from '@material-ui/core/IconButton'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import {withStyles} from '@material-ui/core/styles'
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
      tabSelected: 2
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
    return (
      <React.Fragment>
        <AppBar color="primary" position="sticky" elevation={0}>
          <Toolbar>
            <Grid container spacing={8} alignItems="center">
              <Grid item xs />
              <Grid item>
                <Typography
                  className={classes.link}
                  component="a"
                  href="https://github.com/ColleenRisso/fortune-teller"
                >
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
              {isLoggedIn ? (
                <Grid item>
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="inherit"
                    size="small"
                    onClick={this.props.handleClick}
                  >
                    Logout
                  </Button>
                </Grid>
              ) : null}
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
                {/* <Tab
                  key="Creat Graphs"
                  textColor="inherit"
                  label="Create Graphs"
                  component={Link}
                  to="/graph"
                /> */}
                <Tab
                  key="About"
                  textColor="inherit"
                  label="About"
                  component={Link}
                  to="/"
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
                  key="Sign-up"
                  textColor="inherit"
                  label="Sign-up"
                  component={Link}
                  to="/signup"
                />
                {/* <Tab
                  textColor="inherit"
                  label="Projection"
                  component={Link}
                  to="/projection"
                /> */}
                <Tab
                  textColor="inherit"
                  label="About"
                  component={Link}
                  to="/"
                />
              </Tabs>
            </div>
          )}
        </AppBar>
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
