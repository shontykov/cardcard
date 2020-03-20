import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down("sm")]: {
            root: {
                padding: paddingDownSm
            },
            fixedRoot: {
                width: '100%',
                cursor: 'pointer',
                marginBottom: 16,
                marginRight: 16,
                '& img': {
                    width: '300px',
                }
            },
            mainTitle: {
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "26px",
                color: "#141414",
                marginBottom: 24
            },
            bannerMain: {
                flexWrap: 'nowrap',
                overflowX: 'auto',
                justifyContent: 'space-between',
                width: '100%'
            },
            modalClose: {
                position: 'relative',
                width: '100%',
                zIndex: 1000,
            },
            modalMain: {
                zIndex: 1000,
                borderRadius: 8,
                background: 'white',
                height: 400,
                position: 'relative',
                overflowY: 'auto',
                overflowX: 'hidden'
            },
            notScroll: {
                overflowY: 'hidden',
                overflowX: 'hidden',
                height: '100%'
            },
            fixedBtn: {
                position: 'absolute',
                margin: 'auto',
                right: 30,
                height: 48,
                top: 0,
                width: 48,
                bottom: 0
            },
            fixedBtnModal: {
                position: 'absolute',
                margin: 'auto',
                right: 0,
                color: 'white',
                zIndex: 1001,
                top: -48,
            },
            fixedModal: {
                display: 'none',
                position: 'fixed',
                margin: 'auto',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 1,
                transition: '.3s',
                '& img': {
                    zIndex: 102,
                    width: '100%',
                }
            },
            fixedImgModal: {
                zIndex: 103,
                opacity: 1,
                '& img:first-child': {
                    display: 'none'
                }
            },
            modalTitle: {
                padding: '20px 16px',
                '& h3': {
                    marginTop: 0,
                    fontSize: 20,
                    color: '#141414',
                },
                '& p': {
                    fontSize: 14,
                    margin: '8px 0 16px 0'
                },
                '& h4': {
                    fontSize: 12,
                    margin: '0'
                }
            },
            chooseTitle: {
                marginTop: 24,
                '& span': {
                    display: 'block',
                    fontWeight: 'normal',
                    fontSize: '14px',
                    color: '#141414',
                    paddingLeft: 26,
                    lineHeight: '24px',
                    position: 'relative',
                    marginBottom: 4,
                    '&:before': {
                        content: "' '",
                        position: 'absolute',
                        margin: 'auto',
                        top: 10,
                        left: 8,
                        width: 4,
                        background: '#FF6056',
                        height: 4,
                        borderRadius: '50%'
                    }
                }
            },
            open: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                transition: '.3s',
                padding: '0 10px'
            },
            drpBack: {
                width: '100%',
                height: '100%',
                background: '#00000099',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 100,
                cursor: 'pointer'
            },
            closed: {
                display: 'none'
            }
        },
        [theme.breakpoints.between("sm", "xl")]: {
            ...rootSmXl,
            fixedRoot: {
                width: '32%',
                cursor: 'pointer',
                '& img': {
                    width: '100%',
                }
            },
            mainTitle: {
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "40px",
                color: "#141414",
                marginBottom: 24
            },
            bannerMain: {
                justifyContent: 'space-between',
                flexWrap: 'nowrap'
            },
            modalClose: {
                position: 'relative',
                width: '55%',
                padding: '48px 0px',
                background: 'white',
                zIndex: 1000,
                borderRadius: 8
            },
            modalMain: {
                zIndex: 1000,
                background: 'white',
                height: 450,
                position: 'relative',
                padding: '20px 40px',
                overflowY: 'auto',
                overflowX: 'hidden'
            },
            notScroll: {
                overflowY: 'hidden',
                overflowX: 'hidden',
                height: '100%'
            },
            fixedBtn: {
                position: 'absolute',
                margin: 'auto',
                right: 30,
                height: 48,
                top: 0,
                width: 48,
                bottom: 0
            },
            fixedBtnModal: {
                position: 'absolute',
                margin: 'auto',
                right: 0,
                zIndex: 1001,
                top: 0,
            },
            fixedModal: {
                display: 'none',
                position: 'fixed',
                margin: 'auto',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                opacity: 1,
                transition: '.3s',
                '& img': {
                    zIndex: 102,
                    width: '100%',
                }
            },
            fixedImgModal: {
                zIndex: 103,
                opacity: 1,
                '& img:last-child': {
                    display: 'none'
                }
            },
            modalTitle: {
                '& h3': {
                    marginTop: 0,
                    fontSize: 24,
                    color: '#141414',
                },
                '& p': {
                    margin: '8px 0 16px 0'
                },
                '& h4': {
                    fontSize: 14,
                    margin: '0'
                }
            },
            chooseTitle: {
                marginTop: 24,
                '& span': {
                    display: 'block',
                    fontWeight: 'normal',
                    fontSize: '14px',
                    color: '#141414',
                    paddingLeft: 26,
                    lineHeight: '24px',
                    position: 'relative',
                    marginBottom: 4,
                    '&:before': {
                        content: "' '",
                        position: 'absolute',
                        margin: 'auto',
                        top: 0,
                        bottom: 0,
                        left: 8,
                        width: 4,
                        background: '#FF6056',
                        height: 4,
                        borderRadius: '50%'
                    }
                }
            },
            open: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                transition: '.3s',
            },
            drpBack: {
                width: '100%',
                height: '100%',
                background: '#00000099',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 100,
                cursor: 'pointer'
            },
            closed: {
                display: 'none'
            }
        }
    })
);

const Banner = () => {
    const classes = useStyles({});
    const { t } = useTranslation();
    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [open3, setOpen3] = React.useState(false)
    const [closed, setClosed] = React.useState(false)

    return (
        <Grid container className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.mainTitle}>
                    {t("banners.mainTitle")}
                </Typography>
            </Grid>
            <Grid container className={classes.bannerMain}>
                <Grid className={classes.fixedRoot}>

                    <img src="bannerMain-1.svg" onClick={() => {
                        setOpen2(true)
                    }} />

                </Grid>

                <Grid className={classes.fixedRoot}>

                    <img src="bannerMain-2.svg" onClick={() => {
                        setOpen(true)
                    }} />

                </Grid>

                <Grid className={classes.fixedRoot}>

                    <img src="bannerMain-3.svg" onClick={() => {
                        setOpen3(true)
                    }} />

                </Grid>

                <Grid className={`${classes.fixedModal} ${open ? classes.open : ''}`}>


                    <Grid className={classes.modalClose}>
                        <IconButton className={classes.fixedBtnModal} onClick={() => setOpen(false)}><CloseIcon /></IconButton>
                        <Grid className={`${classes.modalMain} ${classes.notScroll}`}>
                            <div className={classes.fixedImgModal}>
                                <img src="bgModalFixed.svg" />
                                <img src="bannerMainMob-2.svg" />
                            </div>
                            <Grid className={classes.modalTitle}>
                                <Typography className={classes.chooseTitle}>
                                    <span>{t("bannersSecond.desc")}</span>
                                    <span>{t("bannersSecond.desc-2")}</span>
                                    <span>{t("bannersSecond.desc-3")}</span>
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>


                    <div className={classes.drpBack} onClick={() => setOpen(false)}></div>
                </Grid>

                <Grid className={`${classes.fixedModal} ${open2 ? classes.open : ''}`}>


                    <Grid className={classes.modalClose}>
                        <IconButton className={classes.fixedBtnModal} onClick={() => setOpen2(false)}><CloseIcon /></IconButton>
                        <Grid className={classes.modalMain}>
                            <Grid className={classes.modalTitle}>
                                <h3>{t("bannersFirst.mainTitle")}</h3>
                                <h4>{t("bannersFirst.text-main")}</h4>
                                <p>{t("bannersFirst.text-desc")}</p>
                                <h4>{t("bannersFirst.text-main-1")}</h4>
                                <p>{t("bannersFirst.text-desc-1")}</p>

                                <h4>{t("bannersFirst.text-main-2")}</h4>
                                <p>{t("bannersFirst.text-desc-2")}</p>

                                <h4>{t("bannersFirst.text-main-3")}</h4>
                                <p>{t("bannersFirst.text-desc-3")}</p>

                                <h4>{t("bannersFirst.text-main-4")}</h4>
                                <p>{t("bannersFirst.text-desc-4")}</p>

                                <h4>{t("bannersFirst.text-main-5")}</h4>
                                <p>{t("bannersFirst.text-desc-5")}</p>
                                <p>{t("bannersFirst.text-desc-6")}</p>

                                <h4>{t("bannersFirst.text-main-123")}</h4>
                                <p>{t("bannersFirst.text-desc-123")}</p>
                                <h4>{t("bannersFirst.text-main-6")}</h4>
                                <p>{t("bannersFirst.text-desc-7")}</p>
                                <p>{t("bannersFirst.text-desc-8")}</p>
                                <p>{t("bannersFirst.text-desc-81")}</p>

                                <h4>{t("bannersFirst.text-main-7")}</h4>
                                <p>{t("bannersFirst.text-desc-9")}</p>
                                <p>{t("bannersFirst.text-desc-10")}</p>

                                <h4>{t("bannersFirst.text-main-8")}</h4>
                                <p>{t("bannersFirst.text-desc-11")}</p>
                                <p>{t("bannersFirst.text-desc-12")}</p>

                                <h4>{t("bannersFirst.text-main-9")}</h4>
                                <p>{t("bannersFirst.text-desc-13")}</p>
                                <p>{t("bannersFirst.text-desc-14")}</p>
                                <p>{t("bannersFirst.text-desc-15")} <a target="_blank" href="https://www.bcc.kz/">www.bcc.kz</a></p>

                                <h4>{t("bannersFirst.text-main-10")}</h4>
                                <p>{t("bannersFirst.text-desc-16")}</p>
                                <p>{t("bannersFirst.text-desc-17")}</p>

                                <h4>{t("bannersFirst.text-main-11")}</h4>
                                <p>{t("bannersFirst.text-desc-18")}</p>
                                <p>{t("bannersFirst.text-desc-19")}</p>
                            </Grid>

                        </Grid>

                    </Grid>


                    <div className={classes.drpBack} onClick={() => setOpen2(false)}></div>
                </Grid>

                <Grid className={`${classes.fixedModal} ${open3 ? classes.open : ''}`}>


                    <Grid className={classes.modalClose}>
                        <IconButton className={classes.fixedBtnModal} onClick={() => setOpen3(false)}><CloseIcon /></IconButton>
                        <Grid className={classes.modalMain}>
                            <Grid className={classes.modalTitle}>
                                <h3>{t("banners.text_0")}</h3>
                                <p>{t("banners.text_1")}</p>
                                <p>{t("banners.text_2")}</p>
                                <p>{t("banners.text_3")}</p>
                                <p>{t("banners.text_4")}</p>
                                <p>{t("banners.text_5")}</p>
                                <p>{t("banners.text_6")}</p>
                                <p>{t("banners.text_7")}</p>
                                <p>{t("banners.text_8")}</p>
                                <p>{t("banners.text_9")}</p>
                            </Grid>

                        </Grid>

                    </Grid>


                    <div className={classes.drpBack} onClick={() => setOpen3(false)}></div>
                </Grid>




            </Grid>
        </Grid >
    );
};

export default Banner;
