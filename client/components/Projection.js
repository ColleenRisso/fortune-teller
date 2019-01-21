import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getProjectThunk,
  createProjectThunk,
  updateProjectThunk
} from '../store/project'
import Axios from 'axios'

export class Projection extends Component {
  constructor() {
    super()
    this.state = {
      projectionData: {}
    }
  }

  componentDidMount() {
    const project = this.props.getProject(this.props.user.id)
    this.setState({
      projectionData: project
    })
  }

  render() {
    console.log('********this.props', this.props)
    return (
      <div>
        <h1>Your Projection Speaking!</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.email,
    project: state.project
  }
}

const mapDispatchToProps = {
  getProject: getProjectThunk, //takes a userId
  createProject: createProjectThunk, //takes a userId
  updateProject: updateProjectThunk //takes a userId
}

export default connect(mapStateToProps, mapDispatchToProps)(Projection)
