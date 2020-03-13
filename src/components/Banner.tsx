import React from "react";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import CloseIcon from '@material-ui/icons/Close';

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
                '& img': {
                    width: '100%',
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
                justifyContent: 'space-between'
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
                width: '45%',
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
                justifyContent: 'space-between'
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
                overflowX: 'hidden'
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
    const [open, setOpen] = React.useState(false)
    const [open2, setOpen2] = React.useState(false)
    const [closed, setClosed] = React.useState(false)

    return (
        <Grid container className={classes.root}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.mainTitle}>
                    Новости и акции
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
                                    <span>Выбери категорию Рахмет в приложении StarBanking</span>
                                    <span>Привяжи #картакарта в приложении Рахмет</span>
                                    <span>Покупай и получай 5% кэшбэк по #картакарта дополнительно к кэшбэку от Рахмет</span>
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
                                <h3>#картакарта на 1 000 000</h3>
                                <h4>Срок проведения акции</h4>
                                <p>С 01.03.2020 г. по 31.03.2020 г.</p>
                                <h4>Участники акции</h4>
                                <p>Клиенты, оформившие #картакарта в период Акции и совершившие покупку(-и) в POS/Internet на общую сумму не менее 10 000 тенге в течение 3-х календарных дней с даты получения карты</p>

                                <h4>География проведения</h4>
                                <p>Филиальная сеть Банка ЦентрКредит</p>

                                <h4>Продукты</h4>
                                <p>«Кредитная карта #картакарта» по действующим условиям</p>

                                <h4>Условия</h4>
                                <p>Приз: 1 000 000 тенге на каждого победителя. В рамках Акции -   19 победителей в каждом филиале.</p>
                                <h4>Условия Акции:</h4>
                                <p>1. Оформить #картакарта с 01.03.2020 г. по 31.03.2020 г. и с даты получения карты в течение 3-х календарных дней провести по карте покупку(-и) в POS/Internet на общую сумму не менее 10 000 тенге.</p>
                                <p>2. Определение победителей 07.04.2020 г.</p>
                                <h4>Территория проведения Акции: Филиальная сеть Банка ЦентрКредит Правила Акции для клиентов Банка:</h4>
                                <p>1. Клиенты Банка, оформившие #картакарта в период Акции, и совершившие в течение 3-х календарных дней с даты получения карты покупку(-и) в POS/Internet на общую сумму не менее 10 000 тенге, становятся участниками Акции.</p>
                                <p>2. В случае отмены покупки клиентом в период Акции и подведения итогов, такая покупка не засчитывается за выполнение условия Акции. 3. На момент определения победителей #картакарта должна быть действующей (незакрытой).</p>
                                <h4>Не признаются участниками Акции и не имеют права принимать в ней участие:</h4>
                                <p>1. Нерезиденты РК</p>
                                <p>2. Сотрудники и аффилированные лица Банка ЦентрКредит</p>
                                <h4>Как определяются победители:</h4>
                                <p>Победитель будет выбран по номеру договора генератором случайных чисел.</p>
                                <p>Розыгрыш будет проведен в режиме онлайн-трансляции в социальных сетях Инстаграм и Фейсбук.</p>
                                <h4>Особые условия:</h4>
                                <p>1. Организаторы Акции вправе переиграть процесс определения победителя, если выявленный победитель не выйдет на связь с менеджерами Банка в течение 24 часов после окончания конкурса.</p>
                                <p>2. Денежный выигрыш зачисляется на депозит клиента в Банке ЦентрКредит (действующий с возможностью пополнения/новый).</p>
                                <p>3. В течение периода проведения Акции Организатор вправе вносить изменения в настоящие Правила в одностороннем порядке; в случае внесения изменений и/или дополнений в настоящие Правила распространяет информацию о внесенных изменениях на сайте Банка <a target="_blank" href="https://www.bcc.kz/">www.bcc.kz</a></p>
                                <h4>Призовой фонд (общий и в разрезе филиалов) </h4>
                                <p>1. 19 000 000 (девятнадцать миллионов) тенге.</p>
                                <p>2. 1 000 000 (один миллион) тенге на каждый филиал.</p>
                                <h4>Периодичность розыгрыша/подвед ения итогов</h4>
                                <p>Подведение итогов - 07.04.2020 г.</p>
                                <p>Определение победителя в онлайн трансляции (Инстаграм и Фейсбук) с Алматы (ГО), по номеру договора.</p>
                            </Grid>

                        </Grid>

                    </Grid>


                    <div className={classes.drpBack} onClick={() => setOpen2(false)}></div>
                </Grid>




            </Grid>
        </Grid >
    );
};

export default Banner;
