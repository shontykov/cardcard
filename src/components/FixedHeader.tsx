import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";
import ReactGA from "react-ga";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      hide: {
        opacity: 0,
        transition: "all ease-in-out .3s"
      },
      header: {
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: 0,
        right: 0,
        opacity: 1,
        height: 100,
        width: "100%",
        boxSizing: "border-box",
        padding: "21px 52px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s"
      },
      small: {
        display: "none"
      },
      buttonOrderCard: {
        background: "#3F0259",
        minWidth: 230,
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        padding: 0,
        "&:hover": {
          backgroundColor: "#3F0259",
          opacity: 0.8
        },
        overflow: "hidden"
      }
    },
    [theme.breakpoints.down("sm")]: {
      hide: {
        display: "none",
        opacity: 0,
        transition: "all ease-in-out .3s"
      },
      small: {
        display: "none"
      },
      header: {
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: 0,
        right: 0,
        opacity: 1,
        height: 100,
        width: "100%",
        boxSizing: "border-box",
        padding: "16px 26px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s"
      },
      buttonOrderCard: {
        background: "#3F0259",
        minWidth: "auto",
        padding: "0 10px",
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#3F0259",
          opacity: 0.8
        },
        overflow: "hidden"
      },
      smallcard: {
        marginRight: 20
      }
    },
    [theme.breakpoints.down("xs")]: {
      header: {
        padding: "16px 26px",
        disaplay: "block"
      },
      logo: {
        display: "none"
      },
      small: {
        display: "block"
      },
      smallcard: {
        marginRight: 20,
        "& > img": {
          width: "100%"
        }
      }
    }
  })
);

let hide = true;

const FixedHeader = (props: any) => {
  let [hide, setHide] = useState(true);
  useEffect(() => {
    window.document.addEventListener("scroll", d => {
      const doc = document;
      const element = doc && doc.getElementById("secondHeader");
      const scrollTop = element && element.offsetTop;
      scrollTop && window.scrollY >= scrollTop
        ? setHide((hide = false))
        : setHide((hide = true));
    });
  });

  const classes = useStyles({});

  const onClickOrder = () => {
    ReactGA.event({
      category: "BccCard_order_card",
      action: "order_card"
    });
    props.scrollToOrder();
  };

  const handleLangChange = (lang: any) => {
    props.changeLang(lang)
  }

  return (
    <Grid
      container
      justify="space-between"
      alignContent="center"
      alignItems="center"
      className={hide ? classes.hide : classes.header}
    >
      <Grid item xl={6} lg={6} md={6} sm={4} xs={3}>
        <img src="green-logo.svg" className={classes.logo} />
        <img src="logo-bcc-small.svg" className={classes.small} />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={8} xs={9}>
        <Grid
          justify="flex-end"
          alignContent="center"
          alignItems="center"
          container
        >
          <Grid
            item
            xl={2}
            lg={2}
            md={2}
            sm={2}
            xs={2}
            className={classes.smallcard}
          >
            <Select
              value={props.lang}
              onChange={(e: any) => handleLangChange(e.target.value)}
            >
              <MenuItem value="ru">Рус</MenuItem>
              <MenuItem value="kz">Каз</MenuItem>
            </Select>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            md={4}
            sm={3}
            xs={3}
            className={classes.smallcard}
          >
            <img src="icon_card_small.svg" />

          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={4} xs={4}>
            <Link smooth={true} to="order">
              <Button
                variant="contained"
                className={classes.buttonOrderCard}
                onClick={() => onClickOrder()}
              >
                Заказать карту
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FixedHeader;
