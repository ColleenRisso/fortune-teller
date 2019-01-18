import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {withStyles} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
  }
})

const currencies = [
  {
    value: 'USD',
    label: '$'
  }
]

export class FormIncome extends Component {
  continue = event => {
    event.preventDefault()
    this.props.nextStep() //passed from parent component (UserForm)
  }

  render() {
    const {values, handleChange, classes} = this.props
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Name"
          className={classes.textField}
          value={values.netIncome}
          onChange={handleChange('netIncome')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-uncontrolled"
          label="Uncontrolled"
          defaultValue="foo"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          error
          id="outlined-error"
          label="Error"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
          variant="outlined"
        />
        <TextField
          id="outlined-dense"
          label="Dense"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Significant Expenses"
          multiline
          rowsMax="4"
          value={values.sigExp}
          onChange={handleChange('sigExp')}
          className={classes.textField}
          margin="normal"
          helperText="signigicant expenses"
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows="4"
          defaultValue="Default Value"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-with-placeholder"
          label="With placeholder"
          placeholder="Placeholder"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Significant Income"
          value={values.sigInc}
          onChange={handleChange('sigInc')}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          className={classes.textField}
          value={values.curAmort}
          onChange={handleChange('curAmort')}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency (amortization)"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Current Depreciation"
          className={classes.textField}
          value={values.curDep}
          onChange={handleChange('curDep')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your currency (depreciation)"
          margin="normal"
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{margin: 8}}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="outlined-bare"
          className={classes.textField}
          defaultValue="Bare"
          margin="normal"
          variant="outlined"
        />
      </form>
    )
  }
}

FormIncome.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FormIncome)
