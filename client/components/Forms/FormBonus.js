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

export class FormBonus extends Component {
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
          <Grid item xs={12} sm={6} md={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h5" color="primary">
                Employee, Bonuses & Retirement
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="subtitle1" component="h6" color="secondary">
                Enter information to the nearest dollar amount, as positive
                numbers.
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
                label="Bonuses Paid To Date"
                className={classes.textField}
                value={values.curBonus}
                onChange={handleChange('curBonus')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-name"
                label="Additional Bonuses Anticipated"
                className={classes.textField}
                value={values.totalBonus}
                helperText="Enter the total bonuses anticipate to be issued for the remainder of the year"
                onChange={handleChange('totalBonus')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-name"
                label="Year-End Retirement Contributions"
                className={classes.textField}
                value={values.retirement}
                helperText="Expected year-end contributions to retirement plans"
                onChange={handleChange('retirement')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-name"
                label="Other Anticipated Expenses"
                className={classes.textField}
                value={values.otherEmp}
                helperText="Other significant expenditures anticipated for the remainder of the year related to employment or retirement"
                onChange={handleChange('otherEmp')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
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

FormBonus.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormBonus)
