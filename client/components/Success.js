import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

export class Success extends Component {
  back = event => {
    event.preventDefault()
    this.props.prevStep() //passed from parent component (UserForm)
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <br />
        <br />

        <Paper className={classes.root} elevation={1}>
          <Typography variant="h4" component="h4">
            Your projection has been created!
          </Typography>
          <br />
          <Typography variant="h6" component="h6">
            You can now export your projection as an Excel file for your
            personal use.
          </Typography>
        </Paper>

        <br />
        <br />

        <Grid container spacing={24}>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={this.back}
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              // onClick={this.continue} //this needs to export Excel using sheet.js
            >
              Export My Projection
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Success.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Success)
