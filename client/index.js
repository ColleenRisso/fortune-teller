import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
// import { createMuiTheme } from '@material-ui/core/styles';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
// import green from '@material-ui/core/colors/green'

// const theme = createMuiTheme({
//   palette: {
//     primary: '#33691e'
//   },
//   secondary: {
//     light: '#ff7961',
//     main: '#f44336',
//     dark: '#ba000d',
//     contrastText: '#000',
//   }
// })

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {/* <MuiThemeProvider theme={theme}> */}
      <App />
      {/* </MuiThemeProvider>, */}
    </Router>
  </Provider>,
  document.getElementById('app')
)
