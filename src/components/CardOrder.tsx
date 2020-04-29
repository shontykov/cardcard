import React from "react";
import { Grid, Typography, MenuItem } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from "react-ga";
import api from "../api/Api";
import MaskedInput from "react-maskedinput";
import ym from "react-yandex-metrika";
import { getByDisplayValue } from "@testing-library/react";
import { useTranslation } from "react-i18next";

const CityList = require("../city_list.json");

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        marginTop: "8px",
        padding: "36px 20px 36px 20px",
        alignItems: "center",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      paper: {
        padding: "22px 16px 22px 16px",
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        boxSizing: "border-box",
        borderRadius: 8,
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "20px",
      },
      formControlCheckBox: {
        marginTop: "20px",
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "black",
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
      },
      submit: {
        background: "#3F0259",
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 500,
        fontStyle: "normal",
        boxShadow: "none",
        textTransform: "none",
        height: 40,
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF",
        },
        "&:disabled": {
          backgroundColor: "#3F0259",
          opacity: 0.4,
          boxShadow: "none",
          color: "#FFFFFF",
        },
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        padding: "64px 252px 64px 252px",
        maxWidth: 1280,
        margin: "auto",
      },
      paper: {
        padding: "45px 72px 45px 72px",
        background: "#FFFFFF",
        border: "2px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "8px",
      },
      icon: {
        width: "18px",
        height: "19px",
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "40px",
        marginBottom: "27px",
      },
      formControlCheckBox: {
        marginTop: "25px",
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
      },
      submit: {
        background: "#3F0259",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        boxShadow: "none",
        height: "62px",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF",
        },
        "&:disabled": {
          backgroundColor: "#3F0259",
          opacity: 0.6,
          boxShadow: "none",
          color: "#FFFFFF",
        },
      },
    },
  })
);

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask="1(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

function getUrlParameter(name: string) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const CardOrder = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [city, setCity] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: "BccCard_kartakarta_Apply_Success",
      action: "kartakarta_Apply_Success",
    });

    const time: any = new Date();
    let itemsArrayHelp: any = [];
    itemsArrayHelp.push(["11111111111", time]);

    let itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items")!)
      : [itemsArrayHelp];

    for (let i = itemsArray.length - 1; i >= 0; i--) {
      if (itemsArray[i][0] === phoneNumber) {
        if (Date.parse(time) - Date.parse(itemsArray[i][1]) < 1000 * 60 * 15) {
          props.snackUp(t("block_9.snack_bar_repeat"));
          return;
        }
      }
    }

    itemsArray.push([phoneNumber, time]);
    localStorage.setItem("items", JSON.stringify(itemsArray));

    if (
      time.getDay() >= 1 &&
      time.getDay() <= 5 &&
      (time.getHours() >= 9 || time.getHours() < 21)
    ) {
      props.snackUp(t("block_9.snack_bar_week"));
    } else if (
      (time.getDay() === 6 || time.getDay() === 0) &&
      (time.getHours() >= 11 || time.getHours() < 20)
    ) {
      props.snackUp(t("block_9.snack_bar_week"));
    } else {
      props.snackUp(t("block_9.snack_bar_week_end"));
    }

    setTimeout(() => {
      if (phoneNumber && setPhoneNumber) {
        const formData = new FormData();

        formData.append("TELEPHONE", phoneNumber);
        formData.append("NAME", fio);
        formData.append("SYSTEM_TITLE", "#картакарта");
        formData.append("SYSTEM_POST_EVENT", "NEW_USER");
        formData.append("SYSTEM_LINK", "https://www.bcc.kz/kartakarta");
        formData.append("SYSTEM_IBLOCK_ID", "143");
        formData.append("SYSTEM_NAME_ELEMENT", "NAME");
        formData.append("SYSTEM_STATUS", "2901640");
        formData.append("SYSTEM_LID", "S1");
        formData.append("BCC_KEY", "1v5df35v");
        formData.append("utm_source", getUrlParameter("utm_source"));
        formData.append("utm_medium", getUrlParameter("utm_medium"));
        formData.append("utm_campaign", getUrlParameter("utm_campaign"));
        formData.append("utm_term", getUrlParameter("utm_term"));
        formData.append("utm_content", getUrlParameter("utm_content"));

        const response = fetch(
          `https://www.bcc.kz/local/tmpl/ajax/iblock_save.php`,
          {
            method: "POST",
            body: formData,
          }
        );
        // axios.post(`https://www.bcc.kz/local/tmpl/ajax/iblock_save.php`, {
        //   TELEPHONE: phoneNumber,
        //   NAME: fio,
        //   SYSTEM_TITLE: "#картакарта",
        //   SYSTEM_POST_EVENT: "NEW_USER",
        //   SYSTEM_LINK: "https://www.bcc.kz/kartakarta",
        //   SYSTEM_IBLOCK_ID: 143,
        //   SYSTEM_NAME_ELEMENT: "NAME",
        //   SYSTEM_STATUS: "2901640",
        //   SYSTEM_LID: "S1",
        //   BCC_KEY: "1v5df35v",
        //   utm_source: "utm_source",
        //   utm_medium: "utm_medium",
        //   utm_campaign: "utm_campaign",
        //   utm_term: "utm_term",
        //   utm_content: "utm_content"
        // })
        //   .then(r => r.data);
      }
      api.card
        .order({ fio, phoneNumber, city })
        .then((m) => {
          setFio("");
          setPhoneNumber("");
        })
        .catch((e) => console.warn(e));
    }, 2000);
    ym("reachGoal", "send_mess");
  };

  const handleCityChange = (city: string) => {
    setCity(city);
  };
  const classes = useStyles({});
  const { t } = useTranslation();

  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const isValid = () =>
    fio.length > 1 &&
    city.length > 1 &&
    phoneNumber.replace("_", "").length === 16 &&
    agree;

  return (
    <Grid
      ref={props.refProp}
      id="order"
      container
      className={classes.root}
      spacing={4}
      direction="column"
      justify="center"
    >
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.box}>
          {t("block_6.title_main")} <br />
          {t("block_6.title_main_2")}
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label={t("block_6.name_main")}
            name="name"
            value={fio}
            onChange={(e: any) => setFio(e.target.value)}
          />
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            fullWidth
            id="phone"
            name="phone"
            value={phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
            label={t("block_6.phone_main")}
            InputProps={{
              inputComponent: TextMaskCustom as any,
            }}
          />
          <TextField
            fullWidth={true}
            label={t("block_6.city")}
            id="city"
            name="city"
            value={city}
            onChange={(e: any) => handleCityChange(e.target.value)}
            variant="outlined"
            margin="normal"
            select
          >
            {CityList.map((c: any) => {
              return (
                <MenuItem key={c.code} value={c.code}>
                  {c.value}
                </MenuItem>
              );
            })}
          </TextField>
          <FormControlLabel
            className={classes.formControlCheckBox}
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
            }
            label={
              <Typography className={classes.checkBoxLabel}>
                {t("block_6.checkbox_desc")}
              </Typography>
            }
          />
          <Grid container style={{ marginTop: "15px" }} spacing={4}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xl={false}
                  lg={false}
                  md={false}
                  sm={false}
                  xs={false}
                >
                  <img
                    src="card_order_security.svg"
                    className={classes.icon}
                    alt="order_security"
                  />
                </Grid>
                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                  <Typography className={classes.garant}>
                    {t("block_6.subtitle_desc")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                disabled={!isValid()}
              >
                {t("block_6.button_main")}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default CardOrder;
