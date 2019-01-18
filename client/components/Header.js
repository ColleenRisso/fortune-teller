import React from 'react'
import PropTypes from 'prop-types'
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

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabSelected: 'one'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = tabSelected => {
    this.setState({
      tabSelected: tabSelected
    })
    this.props.history.push(tabSelected)
  }

  render() {
    const {classes, onDrawerToggle} = this.props
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
                <Typography color="inherit" variant="h5">
                  Fortune Teller
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
          <Tabs value={0} textColor="inherit">
            <Tab textColor="inherit" label="Sign-in" />
            <Tab textColor="inherit" label="Project Income" />
            <Tab textColor="inherit" label="Graphs" />
            <Tab textColor="inherit" label="Quick Tax Info" />
            <Tab textColor="inherit" label="About This App" />
          </Tabs>
        </AppBar>
      </React.Fragment>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
  //CONSIDER PUTTING THIS BACK TO REQUIRED
  //   onDrawerToggle: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)