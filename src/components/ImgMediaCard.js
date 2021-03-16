import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
const useStyles = theme=>({
  root: {
    maxWidth: 345,
    position: "relative",
    padding: 3
  },
});

class ImgMediaCard extends Component {
  render(){
    const { classes } = this.props;
  return (
    
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image= {this.props.name}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.text}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}}
ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(ImgMediaCard);