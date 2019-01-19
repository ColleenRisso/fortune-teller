import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import Grid from '@material-ui/core/Grid'

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
        <h1>What this app is about</h1>
        <Grid container spacing={12}>
          <Grid item sm={12} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/analysis.jpeg"
                title="Analysis"
              />
              <CardContent>
                <Typography component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/calculator.jpeg"
                title="Calculator"
              />
              <CardContent>
                <Typography component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm={12} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/projection.jpeg"
                title="Projection"
              />
              <CardContent>
                <Typography component="p">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
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
