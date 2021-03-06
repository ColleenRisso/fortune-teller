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

export class FormIncome extends Component {
  continue = event => {
    event.preventDefault()
    this.props.nextStep() //passed from parent component (UserForm)
  }

  render() {
    const {values, handleChange, classes} = this.props
    return (
      <div className={classes.root}>
        <br />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h5" color="primary">
                Income Information
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="subtitle1" component="h6" color="secondary">
                Enter information to the nearest dollar amount, as positive
                numbers without commas.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <br />

        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-required"
                label="Month of Financials"
                helperText="The month for which the financials have been prepared. For example, for April enter a 4."
                error={!!(values.currentMonth < 1 || values.currentMonth > 12)}
                className={classes.textField}
                value={values.currentMonth}
                onChange={handleChange('currentMonth')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="outlined-required"
                label="Year-To-Date Net Income"
                helperText="Zero is a valid number, but must be confirmed"
                className={classes.textField}
                value={values.netIncome}
                error={!values.netIncome}
                onChange={handleChange('netIncome')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Significant Income"
                className={classes.textField}
                value={values.sigInc}
                helperText="Any income earned or received that would not represent the normal course of business if annualized"
                onChange={handleChange('sigInc')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Significant Expenses"
                className={classes.textField}
                value={values.sigExp}
                helperText="Any expenses paid that would not represent the normal course of business if annualized"
                onChange={handleChange('sigExp')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.continue}
          >
            Continue
          </Button>
        </form>
      </div>
    )
  }
}

FormIncome.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormIncome)
