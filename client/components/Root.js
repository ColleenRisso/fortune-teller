import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    minWidth: 275
  }
})

export class Root extends Component {
  render() {
    const {classes} = this.props
    return (
      <Paper>
        <br />
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h3" component="h3">
            We're bridging the gap in business income planning!
          </Typography>
          <Typography component="h6">
            And making it easier to forcast your income before talking to your
            accountant about tax minimization strategies!
          </Typography>
        </Paper>
        <br />
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography component="p">
                    Our goal is to make your data easy to visualize, so you can
                    easily understand what your numbers are indicating and make
                    decisions with your accounant's assitance.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography component="p">
                    Our projection process is broken down into simple steps,with
                    helpful hints along the way. All you need is your most
                    recently reconciled Income Statement.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography component="p">
                    Because our projections export to excel, it's easy to save
                    your projections, alter them to fit any specific needs your
                    business may have, and make a new one at any time.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography component="p">
                    Communicate more effectively with your accountant, having a
                    better idea of where you projected taxable net income is
                    likely to be before their tax saving strategies.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    )
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Root)
