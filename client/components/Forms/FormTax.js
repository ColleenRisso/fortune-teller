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
          <Grid item xs={12} sm={6} md={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h5" color="primary">
                Federal & State Taxes
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

          <Grid item xs={6} />
        </Grid>
        <br />

        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={6}>
              <TextField
                id="outlined-name"
                label="Federal Taxes Paid"
                helperText="Exclude any late interest and penalties"
                className={classes.textField}
                value={values.curFedTaxes}
                onChange={handleChange('curFedTaxes')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-name"
                label="State Taxes Paid"
                helperText="Include and LLC fees, exclude any late interest and penalties"
                className={classes.textField}
                value={values.curStateTaxes}
                onChange={handleChange('curStateTaxes')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Total Federal Tax Liability"
                helperText="Total federal tax liability for the current year. Do not includes any late fees or penalties"
                className={classes.textField}
                value={values.totalFedTaxes}
                onChange={handleChange('totalFedTaxes')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Total State Tax Liability"
                helperText="Total state tax liability for the current year, including the LLC fees. Do not includes any late fees or penalties"
                className={classes.textField}
                value={values.totalStateTaxes}
                onChange={handleChange('totalStateTaxes')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="outlined-name"
                label="Penalties and Interest"
                helperText="Only include penalties and interest paid to date for tax returns"
                className={classes.textField}
                value={values.penalty}
                onChange={handleChange('penalty')}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper className={classes.root} elevation={1}>
                <Typography
                  variant="subtitle2"
                  component="h6"
                  color="secondary"
                >
                  Please note that for this section recommendations may have
                  been made with your most recently filed tax returns. Consult
                  your accountant if you are not certain.
                </Typography>
              </Paper>
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
