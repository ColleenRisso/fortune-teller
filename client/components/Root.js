import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

export class Root extends Component {
  render() {
    const {classes} = this.props
    return (
      <Paper>
        <br />
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h3" component="h3">
            We're bridging the gap in business income planning!
          </Typography>
          <Typography component="h6">
            And making it easier to forcast your income before talking to your
            accountant about tax minimization strategies!
          </Typography>
        </Paper>
        <br />
      </Paper>
    )
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Root)
