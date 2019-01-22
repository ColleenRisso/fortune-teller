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

export class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <footer>
          <Paper elevation={1}>
            <Typography variant="body" component="h3" color="secondary">
              A Notice Regarding Tax Information
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              color="secondary"
              fontWeight="fontWeightMedium"
            >
              Due to the nature and complexity of tax laws, please consult with
              your accountant before making a business decisions. This app is in
              no way intended to, nor capable of, replacing the in-depth
              knowledge an accountant has of your business and the current tax
              laws.
            </Typography>
          </Paper>
        </footer>
      </div>
    )
  }
}

Footer.propTypes = {}

export default withStyles(styles)(Footer)
