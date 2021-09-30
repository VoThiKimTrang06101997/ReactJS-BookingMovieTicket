import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';
import { getTheaters } from '../../reducers/actions/Theater';
import useStyle from './style';
import { Grid } from '@material-ui/core';
import LoadingComponent from '../LoadingComponent';
import ListMovieTheater from '../ListMovieTheater';

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

export default function Theaters() {

    const classes = useStyle();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [value1, setValue1] = React.useState(0);
    const handleChange1 = (event, newValue) => {
        setValue1(newValue);
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTheaters())
    }, [])

    const { theaterList, loading, error } = useSelector((state) => state.theaterReducer);
    if (loading) {
        return <LoadingComponent />
    }
    if (error) {
        return <div>{error}</div>
    }
    const theme = createMuiTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 576,
                md: 768,
                lg: 992,
                xl: 1200
            },
        },
        overrides: {
            MuiBox: {
                root: {
                    padding: 0
                }
            },
            MuiTabScrollButton: {
                vertical: {
                    height: '0',
                    opacity: '0'
                }
            }

        }
    });

    return (
        <div className={classes.theater}>

            <MuiThemeProvider theme={theme}>
                <Grid container>

                    <Grid item xs={12} md={2}>
                        <div className={classes.root}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                className={classes.tabs}
                                value={value}
                                onChange={handleChange}
                                aria-label="simple tabs example">

                                {theaterList?.map((item, index) => {
                                    return (
                                        // SỬA LẠI ĐỂ RENDER RA LOGO
                                        <Tab className={classes.maxWidthMobile} label={
                                            <img style={{ width: '50px', height: '50px' }}
                                                src={item.logo} />
                                        }
                                            {...a11yProps(index)} />
                                    )
                                })}
                            </Tabs>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={10}>
                        {theaterList?.map((item, index) => {
                            // TRẢ VỀ 6 TabPanel lần 1
                            return (
                                <TabPanel value={value} index={index} >

                                    <Grid container>
                                        <Grid item xs={12} md={4} >

                                            <div className={classes.root}>
                                                <Tabs orientation="vertical"
                                                    variant="scrollable"
                                                    className={classes.theaterChildList}
                                                    // className={classes.tabs}
                                                    value={value1}
                                                    onChange={handleChange1}
                                                    aria-label="simple tabs example">

                                                    {item.lstCumRap?.map((item1, index1) => {
                                                        return (
                                                            <Tab className={classes.maxWidthMobile} label={

                                                                <Grid container justify="space-between" >

                                                                    <Grid item xs={3} >
                                                                        <img style={{ width: '50px', height: '50px' }} src="/img/theater.png" alt="img" />
                                                                    </Grid>

                                                                    <Grid item xs={9} style={{ fontSize: '14px', textAlign: 'left', paddingLeft: '5px' }}>
                                                                        {item1.tenCumRap}
                                                                        <p>{item1.diaChi}</p>
                                                                    </Grid>
                                                                </Grid>

                                                            }  {...a11yProps(index1)} />
                                                        )
                                                    })}
                                                </Tabs>
                                            </div>

                                        </Grid>

                                        <Grid item xs={12} md={8}>
                                            {item.lstCumRap?.map((item2, index2) => {

                                                return (

                                                    <TabPanel value={value1} index={index2} className={classes.theaterMovieList} >

                                                        {item2.danhSachPhim?.map((item3, index3) => {

                                                            return (
                                                                <div key={item3.maPhim}>
                                                                    <ListMovieTheater lstShowtimeMovie={item3} />
                                                                </div>

                                                            )
                                                        })}

                                                    </TabPanel>
                                                )
                                            })}

                                        </Grid>
                                    </Grid>

                                </TabPanel>
                            )
                        })}
                    </Grid>

                </Grid>
            </MuiThemeProvider>

        </div >
    );
}
