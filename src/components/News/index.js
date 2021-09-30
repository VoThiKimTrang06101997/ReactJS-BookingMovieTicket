import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useStyles from './style'
import { createMuiTheme, Grid, MuiThemeProvider } from '@material-ui/core';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200
            }
        },
        overrides: {
            MuiBox: {
                root: {
                    padding: 0
                }
            }
        }
    })
    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar className={classes.appBar} position="static">
                    <div>
                        <Tabs className={classes.tabBar} value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab className={classes.tabButton} label="Điện Ảnh 24h" {...a11yProps(0)} />
                            <Tab className={classes.tabButton} label="Review" {...a11yProps(1)} />
                            <Tab className={classes.tabButton} label="Khuyến Mãi" {...a11yProps(2)} />
                        </Tabs>
                    </div>

                </AppBar>

                <TabPanel value={value} index={0}>

                    <Grid container justify='space-between' style={{ marginBottom: '10px' }} >

                        <Grid item style={{ width: '49%' }}>
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt="img" />
                                <div >
                                    <h4 >Khai trương rạp xịn giá ngon, chuẩn xì tai Sài Gòn</h4>
                                    <p >Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành
                                    khi sắp tới đây<br /> thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</p>
                                </div>
                            </a>

                        </Grid>

                        <Grid item style={{ width: '49%' }} >
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt="img" />
                                <div >
                                    <h4>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</h4>
                                    <p >Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn<br /> thót tim fans hâm mộ</p>
                                </div>
                            </a>
                        </Grid>

                    </Grid>

                    <Grid container justify='space-between'>
                        <Grid item style={{ width: '32%' }}>
                            <a href="/#" className={classes.latestNews}>
                                <img src="./img/latest-news.png" alt="img" />
                                <div >
                                    <h4 >PROMISING YOUNG WOMAN | Bông <br />hồng nước Anh Carey Mulligan và màn trả thù</h4>
                                    <p >Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan<br /> ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >
                            <a href="/#" className={classes.latestNews}>
                                <img src="/img/latest-news.png" alt="img" />
                                <div>
                                    <h4>Tiệc trăng máu chính thức cán mốc <br />2 tỉ chỉ sau 2 tuần công chiếu</h4>
                                    <p >Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia<br /> nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. </p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                        </Grid>
                    </Grid>

                </TabPanel>

                <TabPanel value={value} index={1}>

                    <Grid container justify='space-between' style={{ marginBottom: '10px' }} >

                        <Grid item style={{ width: '49%' }}>
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt='img' />
                                <div >
                                    <h4 >Khai trương rạp xịn giá ngon, chuẩn xì tai Sài Gòn</h4>
                                    <p >Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành
                                    khi sắp tới đây<br /> thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</p>
                                </div>
                            </a>

                        </Grid>

                        <Grid item style={{ width: '49%' }} >
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt='img' />
                                <div >
                                    <h4>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</h4>
                                    <p >Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn<br /> thót tim fans hâm mộ</p>
                                </div>
                            </a>
                        </Grid>

                    </Grid>

                    <Grid container justify='space-between'>
                        <Grid item style={{ width: '32%' }}>
                            <a href="/#" className={classes.latestNews}>
                                <img src="./img/latest-news.png" alt='img' />
                                <div >
                                    <h4 >PROMISING YOUNG WOMAN | Bông <br />hồng nước Anh Carey Mulligan và màn trả thù</h4>
                                    <p >Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan<br /> ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >
                            <a href="/#" className={classes.latestNews}>
                                <img src="/img/latest-news.png" alt='img' />
                                <div>
                                    <h4>Tiệc trăng máu chính thức cán mốc <br />2 tỉ chỉ sau 2 tuần công chiếu</h4>
                                    <p >Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia<br /> nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. </p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                        </Grid>
                    </Grid>

                </TabPanel>

                <TabPanel value={value} index={2}>

                    <Grid container justify='space-between' style={{ marginBottom: '10px' }} >

                        <Grid item style={{ width: '49%' }}>
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt="img" />
                                <div >
                                    <h4 >Khai trương rạp xịn giá ngon, chuẩn xì tai Sài Gòn</h4>
                                    <p >Cư dân nơi khác đang sắp “gato nổ mắt” với dân Sài Thành
                                    khi sắp tới đây<br /> thành phố HCM sẽ chào đón một rạp chiếu phim mang phong cách Artistic Urban Lifestyle đầu tiên tại Việt Nam!</p>
                                </div>
                            </a>

                        </Grid>

                        <Grid item style={{ width: '49%' }} >
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt="img" />
                                <div >
                                    <h4>Ấn định chắc nịch ngày khởi chiếu 16.04, Lý Hải tung clip Lật Mặt: 48H đậm chất</h4>
                                    <p >Trước thềm khởi chiếu 16.04 này, Lý Hải bất ngờ tung clip rượt đuổi gay cấn<br /> thót tim fans hâm mộ</p>
                                </div>
                            </a>
                        </Grid>

                    </Grid>

                    <Grid container justify='space-between'>
                        <Grid item style={{ width: '32%' }}>
                            <a href="/#" className={classes.latestNews}>
                                <img src="./img/latest-news.png" alt="img" />
                                <div >
                                    <h4 >PROMISING YOUNG WOMAN | Bông <br />hồng nước Anh Carey Mulligan và màn trả thù</h4>
                                    <p >Đề cử giải Oscar danh giá vừa gọi tên Carey Mulligan<br /> ở hạng mục nữ chính xuất sắc nhất cho vai diễn "đẫm máu" nhất sự nghiệp của cô trong phim</p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >
                            <a href="/#" className={classes.latestNews}>
                                <img src="/img/latest-news.png" alt="img" />
                                <div>
                                    <h4>Tiệc trăng máu chính thức cán mốc <br />2 tỉ chỉ sau 2 tuần công chiếu</h4>
                                    <p >Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia<br /> nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng của tác phẩm. </p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                            <Grid item xs={12}>
                                <a className={classes.bonusNews} href="/#">
                                    <Grid container justify='space-between' >
                                        <Grid item style={{ width: '20%', padding: '7px' }} >
                                            <img src="/img/latest-news.png" alt="img" />
                                        </Grid>
                                        <Grid item style={{ width: '78%' }}>
                                            <p> Ác Quỷ Đối Đầu soán ngôi Peninsula, trở thành phim đứng đầu doanh thu tại Hàn Quốc mùa dịch</p>
                                        </Grid>
                                    </Grid>
                                </a>
                            </Grid>

                        </Grid>
                    </Grid>

                </TabPanel>

            </div >
        </MuiThemeProvider>
    );
}
