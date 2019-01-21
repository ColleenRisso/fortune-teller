import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

export class UserHome extends Component {
  render() {
    const {email} = this.props
    console.log('*****', email)
    console.log('PROPS', this.props)
    return (
      <div>
        <h3>Welcome, {email}</h3>

        <Link to="my-projection">
          <button type="button">My Projection</button>
        </Link>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
