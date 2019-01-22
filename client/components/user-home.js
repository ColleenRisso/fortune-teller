import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  getProjectThunk,
  createProjectThunk,
  updateProjectThunk
} from '../store/project'
import {me, logout} from '../store'
import {Link} from 'react-router-dom'
import {Projection} from './Projection'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

export class UserHome extends Component {
  async componentDidMount() {
    await this.props.loadInitialData()
    await this.props.get(this.props.id)
  }

  render() {
    const {email} = this.props
    return (
      <div>
        <Paper>
          <br />
          <Paper>
            <Typography color="primary" variant="h3" component="h3">
              Welcome, {email}
            </Typography>
          </Paper>
          <br />
          <br />
          {this.props.project ? (
            <Projection project={this.props.project} />
          ) : (
            <div>
              <h3>You have not yet created a projection</h3>
              <Link to="/projection">
                <button type="button">Create A Projection</button>
              </Link>
            </div>
          )}
        </Paper>

        {/* <button type="button" onClick={this.props.handleClick()}>
          Logout
        </button> */}
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    id: state.user.id,
    project: state.project
  }
}

const mapDispatch = {
  loadInitialData: me,
  handleClick: logout,
  get: getProjectThunk, //takes a userId
  create: createProjectThunk, //takes a userId
  update: updateProjectThunk //takes a userId
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
