import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down("sm")]: {
            mainRoot: {
                backgroundColor: "#FAFAFA"
            }
        },
        [theme.breakpoints.between("sm", "xl")]: {
            fixedRoot: {
                position: 'fixed',
                bottom: -3,
                width: '100%',
                '& img': {
                    width: '100%',
                    cursor: 'pointer'
                }
            },
            fixedBtn: {
                position: 'absolute',
                margin: 'auto',
                right: 30,
                height: '55%',
                top: 0,
                bottom: 0
            },
            fixedBtnModal: {
                position: 'absolute',
                margin: 'auto',
                right: 10,
                top: 10,
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
                    width: '1000px',
                    zIndex: 102,
                }
            },
            fixedImgModal: {
                position: 'relative',
                zIndex: 103,
                opacity: 1
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
                background: '#0000002b',
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
    const [open, setOpen] = React.useState(false)
    const [closed, setClosed] = React.useState(false)

    return (
        <>
            <Grid className={`${classes.fixedRoot} ${closed ? classes.closed : ''}`}>
                <img src="bgFooterFixed.svg" onClick={() => {
                    setOpen(true)
                    setClosed(true)
                }} />
                <IconButton onClick={() => setClosed(true)} className={classes.fixedBtn}><CloseIcon /></IconButton>
            </Grid>

            <Grid className={`${classes.fixedModal} ${open ? classes.open : ''}`}>
                <div className={classes.fixedImgModal}>
                    <img src="bgModalFixed.svg" />
                    <IconButton className={classes.fixedBtnModal}><CloseIcon /></IconButton>
                </div>
                <div className={classes.drpBack} onClick={() => setOpen(false)}></div>
            </Grid>
        </>
    );
};

export default Banner;
