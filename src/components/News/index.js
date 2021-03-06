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
                            <Tab className={classes.tabButton} label="??i???n ???nh 24h" {...a11yProps(0)} />
                            <Tab className={classes.tabButton} label="Review" {...a11yProps(1)} />
                            <Tab className={classes.tabButton} label="Khuy???n M??i" {...a11yProps(2)} />
                        </Tabs>
                    </div>

                </AppBar>

                <TabPanel value={value} index={0}>

                    <Grid container justify='space-between' style={{ marginBottom: '10px' }} >

                        <Grid item style={{ width: '49%' }}>
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt="img" />
                                <div >
                                    <h4 >Khai tr????ng r???p x???n gi?? ngon, chu???n x?? tai S??i G??n</h4>
                                    <p >C?? d??n n??i kh??c ??ang s???p ???gato n??? m???t??? v???i d??n S??i Th??nh
                                    khi s???p t???i ????y<br /> th??nh ph??? HCM s??? ch??o ????n m???t r???p chi???u phim mang phong c??ch Artistic Urban Lifestyle ?????u ti??n t???i Vi???t Nam!</p>
                                </div>
                            </a>

                        </Grid>

                        <Grid item style={{ width: '49%' }} >
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt="img" />
                                <div >
                                    <h4>???n ?????nh ch???c n???ch ng??y kh???i chi???u 16.04, L?? H???i tung clip L???t M???t: 48H ?????m ch???t</h4>
                                    <p >Tr?????c th???m kh???i chi???u 16.04 n??y, L?? H???i b???t ng??? tung clip r?????t ??u???i gay c???n<br /> th??t tim fans h??m m???</p>
                                </div>
                            </a>
                        </Grid>

                    </Grid>

                    <Grid container justify='space-between'>
                        <Grid item style={{ width: '32%' }}>
                            <a href="/#" className={classes.latestNews}>
                                <img src="./img/latest-news.png" alt="img" />
                                <div >
                                    <h4 >PROMISING YOUNG WOMAN | B??ng <br />h???ng n?????c Anh Carey Mulligan v?? m??n tr??? th??</h4>
                                    <p >????? c??? gi???i Oscar danh gi?? v???a g???i t??n Carey Mulligan<br /> ??? h???ng m???c n??? ch??nh xu???t s???c nh???t cho vai di???n "?????m m??u" nh???t s??? nghi???p c???a c?? trong phim</p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >
                            <a href="/#" className={classes.latestNews}>
                                <img src="/img/latest-news.png" alt="img" />
                                <div>
                                    <h4>Ti???c tr??ng m??u ch??nh th???c c??n m???c <br />2 t??? ch??? sau 2 tu???n c??ng chi???u</h4>
                                    <p >Sau 2 tu???n ra m???t, Ti???c Tr??ng M??u ch??nh th???c gia<br /> nh???p c??u l???c b??? phim ??i???n ???nh ?????t 100 t??? ?????ng doanh thu ph??ng v??. D??n ng??i sao ???b???c t?????? c???a phim c??ng l???n ?????u ti??n h???i t??? ?????y ????? trong m???t khung h??nh ????? ??n m???ng th??nh t??ch ???n t?????ng c???a t??c ph???m. </p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                    <h4 >Khai tr????ng r???p x???n gi?? ngon, chu???n x?? tai S??i G??n</h4>
                                    <p >C?? d??n n??i kh??c ??ang s???p ???gato n??? m???t??? v???i d??n S??i Th??nh
                                    khi s???p t???i ????y<br /> th??nh ph??? HCM s??? ch??o ????n m???t r???p chi???u phim mang phong c??ch Artistic Urban Lifestyle ?????u ti??n t???i Vi???t Nam!</p>
                                </div>
                            </a>

                        </Grid>

                        <Grid item style={{ width: '49%' }} >
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt='img' />
                                <div >
                                    <h4>???n ?????nh ch???c n???ch ng??y kh???i chi???u 16.04, L?? H???i tung clip L???t M???t: 48H ?????m ch???t</h4>
                                    <p >Tr?????c th???m kh???i chi???u 16.04 n??y, L?? H???i b???t ng??? tung clip r?????t ??u???i gay c???n<br /> th??t tim fans h??m m???</p>
                                </div>
                            </a>
                        </Grid>

                    </Grid>

                    <Grid container justify='space-between'>
                        <Grid item style={{ width: '32%' }}>
                            <a href="/#" className={classes.latestNews}>
                                <img src="./img/latest-news.png" alt='img' />
                                <div >
                                    <h4 >PROMISING YOUNG WOMAN | B??ng <br />h???ng n?????c Anh Carey Mulligan v?? m??n tr??? th??</h4>
                                    <p >????? c??? gi???i Oscar danh gi?? v???a g???i t??n Carey Mulligan<br /> ??? h???ng m???c n??? ch??nh xu???t s???c nh???t cho vai di???n "?????m m??u" nh???t s??? nghi???p c???a c?? trong phim</p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >
                            <a href="/#" className={classes.latestNews}>
                                <img src="/img/latest-news.png" alt='img' />
                                <div>
                                    <h4>Ti???c tr??ng m??u ch??nh th???c c??n m???c <br />2 t??? ch??? sau 2 tu???n c??ng chi???u</h4>
                                    <p >Sau 2 tu???n ra m???t, Ti???c Tr??ng M??u ch??nh th???c gia<br /> nh???p c??u l???c b??? phim ??i???n ???nh ?????t 100 t??? ?????ng doanh thu ph??ng v??. D??n ng??i sao ???b???c t?????? c???a phim c??ng l???n ?????u ti??n h???i t??? ?????y ????? trong m???t khung h??nh ????? ??n m???ng th??nh t??ch ???n t?????ng c???a t??c ph???m. </p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                    <h4 >Khai tr????ng r???p x???n gi?? ngon, chu???n x?? tai S??i G??n</h4>
                                    <p >C?? d??n n??i kh??c ??ang s???p ???gato n??? m???t??? v???i d??n S??i Th??nh
                                    khi s???p t???i ????y<br /> th??nh ph??? HCM s??? ch??o ????n m???t r???p chi???u phim mang phong c??ch Artistic Urban Lifestyle ?????u ti??n t???i Vi???t Nam!</p>
                                </div>
                            </a>

                        </Grid>

                        <Grid item style={{ width: '49%' }} >
                            <a href="/#" className={classes.hotNews}>
                                <img src="./img/hot-news.jpg" alt="img" />
                                <div >
                                    <h4>???n ?????nh ch???c n???ch ng??y kh???i chi???u 16.04, L?? H???i tung clip L???t M???t: 48H ?????m ch???t</h4>
                                    <p >Tr?????c th???m kh???i chi???u 16.04 n??y, L?? H???i b???t ng??? tung clip r?????t ??u???i gay c???n<br /> th??t tim fans h??m m???</p>
                                </div>
                            </a>
                        </Grid>

                    </Grid>

                    <Grid container justify='space-between'>
                        <Grid item style={{ width: '32%' }}>
                            <a href="/#" className={classes.latestNews}>
                                <img src="./img/latest-news.png" alt="img" />
                                <div >
                                    <h4 >PROMISING YOUNG WOMAN | B??ng <br />h???ng n?????c Anh Carey Mulligan v?? m??n tr??? th??</h4>
                                    <p >????? c??? gi???i Oscar danh gi?? v???a g???i t??n Carey Mulligan<br /> ??? h???ng m???c n??? ch??nh xu???t s???c nh???t cho vai di???n "?????m m??u" nh???t s??? nghi???p c???a c?? trong phim</p>
                                </div>
                            </a>
                        </Grid>

                        <Grid item container style={{ width: '32%' }} >
                            <a href="/#" className={classes.latestNews}>
                                <img src="/img/latest-news.png" alt="img" />
                                <div>
                                    <h4>Ti???c tr??ng m??u ch??nh th???c c??n m???c <br />2 t??? ch??? sau 2 tu???n c??ng chi???u</h4>
                                    <p >Sau 2 tu???n ra m???t, Ti???c Tr??ng M??u ch??nh th???c gia<br /> nh???p c??u l???c b??? phim ??i???n ???nh ?????t 100 t??? ?????ng doanh thu ph??ng v??. D??n ng??i sao ???b???c t?????? c???a phim c??ng l???n ?????u ti??n h???i t??? ?????y ????? trong m???t khung h??nh ????? ??n m???ng th??nh t??ch ???n t?????ng c???a t??c ph???m. </p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
                                            <p> ??c Qu??? ?????i ?????u so??n ng??i Peninsula, tr??? th??nh phim ?????ng ?????u doanh thu t???i H??n Qu???c m??a d???ch</p>
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
