import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
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
    const {
      classes,
      values: {
        netIncome,
        curBonus,
        totalBonus,
        curDep,
        curAmort,
        totalDep,
        totalAmort,
        curIntExp,
        totalIntExp,
        curIntInc,
        totalIntInc,
        curStateTaxes,
        totalStateTaxes,
        curFedTaxes,
        totalFedTaxes,
        meals,
        entertainment,
        nondeductible,
        penalty,
        sigExp,
        sigInc,
        retirement,
        otherEmp
      }
    } = this.props
    return (
      <div className={classes.root}>
        <br />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h5" color="primary">
                Confirm Your Information
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <br />

        <div className={classes.demo}>
          <List>
            <ListItem>
              <ListItemText primary="Net Income" secondary={netIncome} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Significant Income" secondary={sigInc} />
            </ListItem>

            <ListItem>
              <ListItemText primary="Significant Expenses" secondary={sigExp} />
            </ListItem>
          </List>
        </div>

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
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

FormTax.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormTax)
