import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
  getProjectThunk,
  createProjectThunk,
  updateProjectThunk
} from '../store/project'
import {Link} from 'react-router-dom'
import {Projection} from './Projection'

export class UserHome extends Component {
  constructor() {
    super()
    this.state = {
      showProjection: false,
      projection: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const project = await this.props.get(this.props.id)
    this.setState({
      ...this.state,
      projection: this.props.project
    })
  }

  //this will show or hide a campus, pending on if clicked
  handleClick() {
    return this.setState({
      showProjection: !this.state.showProjection
    })
  }

  render() {
    console.log('********this.props', this.props)
    console.log('*****this.state', this.state)
    const {email, id, get, create, update, project} = this.props
    return (
      <div>
        <h2>Welcome, {email}</h2>
        <br />
        <br />
        <h3>Your current projection</h3>
        netIncome: 0, currentMonth: 0, curBonus: 0, totalBonus: 0, curDep: 0,
        curAmort: 0, totalDep: 0, totalAmort: 0, curIntExp: 0, totalIntExp: 0,
        curIntInc: 0, totalIntInc: 0, curStateTaxes: 0, totalStateTaxes: 0,
        curFedTaxes: 0, totalFedTaxes: 0, meals: 0, entertainment: 0,
        nondeductible: 0, penalty: 0, sigExp: 0, sigInc: 0, retirement: 0,
        otherEmp: 0
        {/* Feature to be added later */}
        {/* {this.state.showProjection
          ? <Projection id={id} get={get} create={create} update={update} project={project}/>
          : <button type="button" onClick={this.handleClick}>My Projection</button>
        } */}
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
