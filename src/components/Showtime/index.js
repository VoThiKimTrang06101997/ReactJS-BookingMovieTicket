import useStyle from './style'
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Carousel from '../Carousel';
import { createMuiTheme, Hidden, MuiThemeProvider } from '@material-ui/core';
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
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

export default function Showtime(props) {
    const classes = useStyle()
    const { movieList } = props

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <Hidden mdDown>


                <ArrowForwardIosRoundedIcon style={{ right: "-50px" }} onClick={onClick} className={classes.Arrow} />
            </Hidden>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <Hidden mdDown>
                <ArrowBackIosRoundedIcon style={{ left: "-50px" }} onClick={onClick} className={classes.Arrow} />
            </Hidden>
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        rows: 2,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  
                }
              },
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                rows: 1
              }
            },
            
            {
                breakpoint: 325,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  rows: 1
                }
              },

          ]
    };

    const handleTrailer = (movieTrailer) => {
        props.onHandleTrailer(movieTrailer)
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
            MuiTabs: {
                flexContainer: {
                    justifyContent: 'center',
                    '& button:focus': {
                        outline: 'none',
                        background: 'none',
                    }
                }
            },
            MuiTab: {
                wrapper: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                    textTransform: 'none',
                }
            },
            MuiTouchRipple: {
                root: {
                    display: 'none'
                }
            },
            MuiTypography: {
                root: {
                    position: 'relative'
                }
            }
        }
    })

    return (
        <MuiThemeProvider theme={theme}>
            <div className={classes.showTime}>

                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Đang Chiếu" {...a11yProps(0)} />
                    <Tab label="Sắp Chiếu" {...a11yProps(1)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                    <Carousel movieList={movieList} settings={settings} onHandleTrailer={handleTrailer} />
                </TabPanel >

                <TabPanel value={value} index={1}>
                    <Carousel movieList={movieList} settings={settings} onHandleTrailer={handleTrailer} />
                </TabPanel >

            </div>
        </MuiThemeProvider>
    )
}
