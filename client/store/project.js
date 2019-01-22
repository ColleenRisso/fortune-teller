import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_PROJECT = 'GET_PROJECT'

/**
 * INITIAL STATE
 */
//order will need to be accessed as state.project
const project = {}

/**
 * ACTION CREATORS
 */
//this action will receive a project object. We will set the project as our selected project
export const getProject = project => {
  return {
    type: GET_PROJECT,
    project
  }
}

/**
 * THUNK CREATORS
 */
//This thunk will fetch the project from the server and will use the getProject action creator to add it to the project object on state.
export const getProjectThunk = userId => {
  return async dispatch => {
    const {data} = await axios.get(`/api/project/${userId}`)
    dispatch(getProject(data))
  }
}

export const createProjectThunk = (userId, projectData) => {
  return async dispatch => {
    const {data} = await axios.post(`/api/project/${userId}`, projectData)
    dispatch(getProject(data))
  }
}

export const updateProjectThunk = (userId, projectData) => {
  return async dispatch => {
    const {data} = await axios.put(`/api/project/${userId}`, projectData)
    dispatch(getProject(data))
  }
}

/**
 * REDUCER
 */
export default function(state = project, action) {
  switch (action.type) {
    case GET_PROJECT:
      return action.project
    default:
      return state
  }
}
