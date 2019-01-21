import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getProjectThunk,
  createProjectThunk,
  updateProjectThunk
} from '../store/project'

export class Projection extends Component {
  componentDidMount() {
    // this.props.getProject(this.props.user.id)
  }

  render() {
    console.log('********this.props', this.props)
    return (
      <div>
        <h1>Your Projection</h1>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    project: state.project
  }
}

const mapDispatchToProps = {
  getProject: getProjectThunk, //takes a userId
  createProject: createProjectThunk, //takes a userId
  updateProject: updateProjectThunk //takes a userId
}

export default connect(mapStateToProps, mapDispatchToProps)(Projection)
