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

export class FormTax extends Component {
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
                Nondeductible and Limited Expenses
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h6" component="h6" color="secondary">
                Some expenses are limited for tax purposes:
              </Typography>
              <Typography fontSize={12} color="secondary">
                For the purposes of this projection, please enter all expenses
                at 100% and limitations will be calculated accordingly based on
                general assumptions. Consult your accountant for specific
                analysis.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <br />

        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Meals"
                helperText="Assumes the meals have a business purposes. Do not include food or drink provided to all employees such as Christmas parties or office snacks"
                className={classes.textField}
                value={values.meals}
                onChange={handleChange('meals')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Entertainment"
                className={classes.textField}
                value={values.entertainment}
                onChange={handleChange('entertainment')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Other Nondeductible Expenses"
                helperText="Expenses such as parking tickets, gifts, life insurance, disability insurance, political contributions and country club memberships"
                className={classes.textField}
                value={values.nondeductible}
                onChange={handleChange('nondeductible')}
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

FormTax.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormTax)
