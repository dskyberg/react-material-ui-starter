import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = theme => ({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20,
    },
});

@hot(module)
@withRoot
@withStyles(styles)
export default class App extends Component{
  render(){
    const { classes } = this.props;
    return(
        <React.Fragment>
            <div className={classes.root}>
                 <h1> Hello, World! </h1>
            </div>
        </React.Fragment>
    );
  }
}

