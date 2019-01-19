import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
})

export class About extends Component {
  state = {expanded: false}

  handleExpandClick = () => {
    this.setState(state => ({expanded: !state.expanded}))
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <br />

        <Paper className={classes.root} elevation={1}>
          <Typography variant="h3" component="h3">
            We're bridging the gap in business income planning!
          </Typography>
          <br />
          <Typography variant="h6" component="h6">
            And making it easier to forcast your income before talking to your
            accountant about tax minimization strategies!
          </Typography>
        </Paper>

        <br />

        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/computer.jpeg"
                title="Analysis"
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
              <CardMedia
                className={classes.media}
                image="/img/calculator.jpeg"
                title="Calculator"
              />
              <CardContent>
                <Typography component="p">
                  Our projection process is broken down into simple steps, with
                  helpful hints along the way. All you need is your Balance
                  Sheet and Income Statement.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/projection.jpeg"
                title="Projection"
              />
              <CardContent>
                <Typography component="p">
                  Because our projections export to excel, it's easy to save
                  your projections, and alter them to fit any specific needs
                  your business may have.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/analysis.jpeg"
                title="Analysis"
              />
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

        <br />
        <br />

        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h5" component="h5" color="error">
                A notice regarding tax information
              </Typography>
              <br />
              <Typography component="p">
                Due to the nature of tax laws, please consult with your
                accountant before making a business decision. This app is in no
                way intended to, nor capable of, replacing the in-depth
                knowledge an accountant has of your business and the current tax
                laws.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
