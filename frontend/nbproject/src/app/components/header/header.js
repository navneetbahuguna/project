import React, { Component, Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
// import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Form from "../registration/form";
// import Form from "../Registration/Forms/registraion";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    background: "#8BC34A",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    textTransform: "none",
  },
});
class header extends Component {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Grid container direction="row">
              <Grid item md={4} style={{ display: "flex" }}>
                {/* <img src={Logo} height={50} width={50} /> */}
                <Typography variant="h6" className={classes.title}>
                  Physiotherapy Center
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Button
                color="inherit"
                onClick={this.handleOpen}
                className={classes.button}
              >
                Registration
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
        <Form open={this.state.open} onClose={this.handleClose} />
      </Fragment>
    );
  }
}
export default withStyles(styles)(header);
