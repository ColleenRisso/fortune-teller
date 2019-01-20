import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

export class FormInterest extends Component {
  continue = event => {
    event.preventDefault()
    this.props.nextStep() //passed from parent component (UserForm)
  }

  back = event => {
    event.preventDefault()
    this.props.prevStep() //passed from parent component (UserForm)
  }

  render() {
    const {values, handleChange, classes} = this.props
    return (
      <div className={classes.root}>
        <br />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h5" color="primary">
                Interest
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <br />

        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-name"
                label="Interest Expense Paid"
                helperText="Enter the interest expense year-to-date"
                className={classes.textField}
                value={values.curIntExp}
                onChange={handleChange('curIntExp')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-name"
                label="Total Interest Expense"
                helperText="Enter the total interest expense due for the year, including the amounts already paid"
                className={classes.textField}
                value={values.totalIntExp}
                onChange={handleChange('totalIntExp')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-name"
                label="Interest Income Received"
                helperText="Enter the interest income year-to-date"
                className={classes.textField}
                value={values.curIntInc}
                onChange={handleChange('curIntInc')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-name"
                label="Total Interest Income"
                helperText="Enter the total interest income anticipated for the year, including the amounts already received"
                className={classes.textField}
                value={values.totalIntExp}
                onChange={handleChange('totalIntExp')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={this.back}
              >
                Previous
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.continue}
              >
                Continue
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }
}

FormInterest.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormInterest)
