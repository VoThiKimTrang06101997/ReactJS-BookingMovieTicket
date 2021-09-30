import { React } from 'react'
import useStyles from './style'
import Slider from "react-slick"
import data from './data.json'
import { createMuiTheme, Grid, MuiThemeProvider } from '@material-ui/core'
export default function Ads() {
    const adsData = data
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    const classes = useStyles()
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
            <div className={classes.mobileApp}>
                <div className={classes.mainMaxWidth}>
                    <Grid container>
                        <Grid item xs={12} lg={6}>
                            <div className={classes.mobileApp__left}>
                                <div>
                                    <p className={classes.textLeft}>Ứng dụng tiện lợi dành cho</p>
                                    <p className={classes.textLeft}>người yêu điện ảnh</p>
                                    <br />
                                    <p>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                                    <br />
                                    <button className="btn btn-danger">App miễn phí - Tải về ngay!</button>
                                    <br />
                                    <p>Tix có hai phiên bản <span><a href="/#">IOS</a></span> và <span><a href="/#">Android</a></span>
                                    </p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <div className={classes.mobileApp__right}>
                                <Slider {...settings} className={classes['slick-mobile']} >
                                    {adsData.map((item, index) => {
                                        return (
                                            <div className="item" key={index}>
                                                <img src={item.hinhAnh} alt="IMG" />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </MuiThemeProvider>
    )
}
