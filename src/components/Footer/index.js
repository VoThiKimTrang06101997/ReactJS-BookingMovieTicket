import React from 'react'
import useStyles from './style'
import data from './data.json'
import { createMuiTheme, Grid, Hidden, MuiThemeProvider } from '@material-ui/core';
import WebLogo from "../../assets/img/web-logo.png";

export default function Footer() {
    const classes = useStyles()
    const dataCompany = data
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200
            },
        }
    })
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.footer}>
                <div className={classes.footer__content}>
                    <Grid container justify='space-between' className={classes.footer__up}  >
                        <Grid item xs={12} md={4} className={classes.footer__tix}>
                            <Hidden mdDown>
                                <img src={WebLogo} alt=""/>
                                <p style={{marginTop: "15px"}}>TIX</p>
                            </Hidden>

                            <Grid container justify='space-between' alignItems='center' >
                                <Grid item>
                                    <Hidden mdDown>
                                        <a href="/#">FAQ</a>
                                        <a href="/#">Brand Guidelines</a>
                                    </Hidden>
                                </Grid>
                                <Grid item className={classes.tix__policy}>
                                    <a href="/#">Thỏa thuận sử dụng</a>
                                    <a href="/#">Chính sách bảo mật</a>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Hidden smDown>
                            <Grid container justify='space-around' item md={8}>
                                <Hidden mdDown>
                                    <Grid item xs={4} className="footer__company">
                                        <p>Đối tác</p>
                                        <div className="row">
                                            {dataCompany.map((item, index) => {
                                                return (
                                                    <div className="col-sm-3 mb-2">
                                                        <a href="/#">
                                                            <img src={item.hinhAnh} alt="img" className={classes.logo} />
                                                        </a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </Grid>
                                </Hidden>
                                <Grid item xs={4} className={classes.footer__social}>
                                    <Hidden mdDown>
                                        <Grid item sm={6} >
                                            <Grid item md={12} style={{ textAlign: 'center' }} >
                                                <p>MOBILE APP</p>
                                                <Grid item xs={12} container justify='space-around' >

                                                    <Grid item xs={6}>
                                                        <a href><img className={classes.logo} src="./img/mobile-system/apple-logo.png" alt="" /></a>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <a href><img className={classes.logo} src="./img/mobile-system/android-logo.png" alt="" /></a>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Hidden>

                                    <Grid item sm={6} container >
                                        <Grid item md={12} style={{ textAlign: 'center' }} >

                                            <Hidden mdDown>
                                                <p>SOCIAL APP</p>
                                            </Hidden>

                                            <Grid item xs={12} container justify='space-around' >
                                                <Grid item xs={6}>
                                                    <a href><img className={classes.logo} src="./img/media/facebook-logo.png" alt="" /></a>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <a href><img className={classes.logo} src="./img/media/zalo-logo.png" alt="" /></a>
                                                </Grid>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Hidden>
                    </Grid>

                    <div className={classes.footer__down}>
                        <Grid container>
                            <Grid item xs={12} md={2} className={classes.down__left}>
                                <img src="./img/logo-connect/zion-logo.jpg" alt="" />
                            </Grid>
                            <Grid item xs={12} md={8} className={classes.down__middle}>
                                <p>TIX - Cinema</p>
                                <p>Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
                                <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783.</p>
                                <p>Đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
                                <p>MỌI THÔNG TIN ĐỀU KHÔNG LIÊN QUAN ĐẾN TỔ CHỨC VÀ CÁ NHÂN NÀO.</p>
                                <p>Email: <span>TixMovieCompany@gmail.com</span></p>
                            </Grid>
                            <Grid item xs={12} md={2} className={classes.down__right}>
                                <img src="./img/media/certificate.png" alt="" />
                            </Grid>
                        </Grid >
                    </div >

                </div>
            </div >
        </MuiThemeProvider>
    )
}
