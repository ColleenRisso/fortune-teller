import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  card: {
    minWidth: 275
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
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
          <br />
          <Typography variant="h5" component="h3">
            And making it easier to forcast your income before talking to your
            accountant about tax minimization strategies!
          </Typography>
        </Paper>
        <br />
        <Paper className={classes.root} elevation={1}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image="/img/computer.jpeg"
                  title="Computer"
                />
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
                  <CardMedia
                    className={classes.media}
                    image="/img/calculator.jpeg"
                    title="Calculator"
                  />
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
                  <CardMedia
                    className={classes.media}
                    image="/img/projection.jpeg"
                    title="Projection"
                  />
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
                  <CardMedia
                    className={classes.media}
                    image="/img/analysis.jpeg"
                    title="Analysis"
                  />
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

        <br />
        <br />

        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h3" color="secondary">
                A notice regarding tax information
              </Typography>
              <Typography
                variant="body"
                component="h5"
                color="secondary"
                fontWeight="fontWeightMedium"
              >
                Due to the nature and complexity of tax laws, please consult
                with your accountant before making a business decisions. This
                app is in no way intended to, nor capable of, replacing the
                in-depth knowledge an accountant has of your business and the
                current tax laws.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

Root.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Root)
