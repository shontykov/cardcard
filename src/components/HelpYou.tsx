import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm } from "./helper/DefaultStyle";
import { PhoneAndroid, Call } from "@material-ui/icons";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm,
        backgroundColor: "#FAFAFA"
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      },
      paper: {
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        borderRadius: 8,
        padding: 10,
        width: 188,
        height: 56,
        marginLeft: 10,
        marginRight: 10
      },
      ourSpec: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#5B5B5B"
      },
      freeCall: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        color: "#141414"
      },
      phone: {
        fonStyle: "normal",
        fontWeight: "bold",
        fontSize: 14
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        backgroundColor: "#FAFAFA"
      },
      root: {
        padding: "72px 52px 72px 52px",
        maxWidth: 1280,
        margin: "auto"
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      },
      paper: {
        backgroundColor: "white",
        borderRadius: 8,
        border: "1px solid #E8E8E8",
        padding: 20,
        width: 376,
        height: 112,
        marginLeft: 10,
        marginRight: 10
      },
      ourSpec: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B"
      },
      freeCall: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414"
      },
      phone: {
        fonStyle: "normal",
        fontWeight: "bold",
        fontSize: 28
      }
    }
  })
);

const HelpYou = () => {
  const classes = useStyles({});

  const onClickCall505 = () => {
    ReactGA.event({
      category: "BccCard",
      action: "call_505"
    });
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root} spacing={4} justify="center">
        <Grid item onClick={() => onClickCall505()} className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
              <Typography className={classes.freeCall}>
                <Call className={classes.freeCall} />
              </Typography>
            </Grid>
            <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
              <Typography className={classes.freeCall}>505</Typography>
              <Typography className={classes.ourSpec}>
                Бесплатно с мобильного
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paper}>
          <Typography className={classes.phone}>
            <PhoneAndroid className={classes.phone} /> 8 (727) 244 30 30
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HelpYou;
