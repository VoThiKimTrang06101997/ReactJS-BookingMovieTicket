import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMovieDetail } from '../../reducers/actions/Theater';
import { Link, useParams } from "react-router-dom";
import useStyles from './style'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { createMuiTheme, makeStyles, MuiThemeProvider } from "@material-ui/core";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LoadingPage from '../../components/LoadingPage';
import PopUp from '../../components/PopUp';
import TimeButton from '../../components/TimeButton';
import ListMovieDetail from '../../components/ListMovieDetail';

// VERTICAL TAB MATERIAL
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const verticalStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 500,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// SIMPLE TAB MATERIAL
function TabPanelSimple(props) {
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
function a11yPropsSimple(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const simpleStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    '& ul': {
      listStyle: 'none'
    }
  },
}));
TabPanelSimple.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const renderStyleBar = (danhGia) => {
  const point = parseFloat(danhGia);
  let clipPath = "";
  /** 5 điểm */
  if (point >= 0 && point <= 1.25) {
    clipPath = `polygon( 50% 0, 100% 0,${40 * point + 50}% 0, 50% 50%)`;
  }
  /** 6 điểm */
  if (point > 1.25 && point <= 3.75) {
    clipPath = `polygon(50% 0, 100% 0, 100% 50%, 100% 100%, 100% ${40 * point - 50
      }%, 50% 50%)`;
  }

  if (point > 3.75 && point <= 6.25) {
    clipPath = `polygon(50% 0, 100% 0, 100% 50%, 100% 100%, ${-40 * point + 250
      }% 100%, 50% 50%)`;
  }

  /** 7 điểm */
  if (point > 6.25 && point <= 8.75) {
    clipPath = `polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, 0 ${-40 * point + 350
      }%, 50% 50%`;
  }

  if (point > 8.75 && point <= 10) {
    clipPath = `polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, ${40 * point - 350
      }% 0, 50% 50%`;
  }

  return {
    WebkitClipPath: clipPath,
    MozClipPath: clipPath,
    msClipPath: clipPath,
    OClipPath: clipPath,
    clipPath: clipPath,
  };
};

export default function MovieDetail() {

  //CSS TỪ FILE STYLE
  const classes = useStyles()
  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("")
  const handleTrailer = (newTrailer) => {
    setTrailer(newTrailer)
    setOpen(!open)
  }
  const handleButton = (closeButton) => {
    setOpen(closeButton)
  }

  //KHỞI TẠO CHO VERTICAL TAB
  const verticalCss = verticalStyles()
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // KHỞI TẠO CHO SIMPLE TAB
  // const simpleCss = simpleStyles()
  const [valueSimple, setValueSimple] = React.useState(0);
  const handleChangeSimple = (event, newValue) => {
    setValueSimple(newValue);
  };

  //LẤY MÃ PHIM TỪ URL
  const param = useParams()
  // console.log(param)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieDetail(param.movieId))
  }, [param.movieId])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    document.title = "Chi tiết"
  }, [])

  // LẤY DATA TỪ STORE VỀ
  const { movieDetail, loading, error } = useSelector((state) => state.theaterReducer);

  if (loading) {
    return <LoadingPage />
  }
  if (error) {
    return <div>{error}</div>
  }

  // OVERIDE LẠI CLASS CỦA MATERIAL
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

        }
      }

    }
  });

  return (
    <MuiThemeProvider theme={theme}>

      <div className={classes.movieDetail}>
        {/* NỬA TRÊN */}
        <div className={classes.movieDetail__up} style={{ backgroundImage: `url(${movieDetail?.hinhAnh})` }}>
          <PlayCircleOutlineIcon className={classes.play} onClick={() => handleTrailer(movieDetail.trailer)} />

          <Grid className={classes.up__content} container justify='space-between' alignItems='center'>

            <Grid className={classes.content__left} container item xs={10}>
              <Hidden smDown>
                <Grid item className={classes.leftImg} sm={4} >
                  <img src={movieDetail?.hinhAnh} alt="movieDetail" />
                </Grid>
              </Hidden>

              <Grid className={classes.leftName} item xs={12} sm={8} >
                <p>{movieDetail?.ngayKhoiChieu.split('T', 1)}</p>
                <div><span>C13</span><p>{movieDetail?.tenPhim}</p></div>
                <button className={classes.leftName__button} onClick={() => document.getElementById('movieInfo').scrollIntoView({ block: 'center', inline: 'center' })}>Mua vé</button>
              </Grid>

            </Grid>

            <Grid className={classes.content__right} item xs={2}>
              <Hidden smDown>
                <h1 className={classes.movieRating__point}>
                  {movieDetail?.danhGia}
                  <span className={classes.movieRating__circle} style={renderStyleBar(movieDetail?.danhGia)}></span>
                </h1>

              </Hidden>
            </Grid>

          </Grid>

        </div>

        {/* NỬA DƯỚI */}
        <div id='movieInfo' className={classes.movieDetail__down}  >

          <Tabs className={classes.movieInfo} value={valueSimple} onChange={handleChangeSimple} aria-label="simple tabs example">
            <Tab label="Lịch Chiếu" {...a11yPropsSimple(0)} />
            <Tab label="Thông Tin" {...a11yPropsSimple(1)} />
            <Tab label="Đánh Giá" {...a11yPropsSimple(2)} />
          </Tabs>

          <TabPanelSimple className={classes.movieValues} value={valueSimple} index={0}>
            <Grid style={{ backgroundColor: 'white' }} container direction='row' alignItems='flex-start'>
              <Grid item xs={12} md={3} >
                <Tabs
                  className={verticalCss.tabs}
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example">
                  {movieDetail?.heThongRapChieu?.map((item, index) => {
                    return (
                      <Tab key={index} label={<img style={{ width: '50px', height: '50px' }} src={item.logo} alt="img" />} {...a11yProps(index)} />
                    )
                  })}
                </Tabs>
              </Grid>

              <Grid item xs={12} md={9}>
                {movieDetail?.heThongRapChieu.map((item1, index1) => {
                  return (
                    <TabPanel className={classes.theaterMovieDetail} value={value} index={index1}>
                      {item1.cumRapChieu?.map((item2, index2) => {
                        console.log(item2)
                        return (
                          <ListMovieDetail lichChieuPhim={item2.lichChieuPhim} tenCumRap={item2.tenCumRap} />
                        )
                      })}
                    </TabPanel>
                  )
                })}
              </Grid>
            </Grid>
          </TabPanelSimple>

          <TabPanelSimple className={classes.movieValues} value={valueSimple} index={1}>

            <Grid style={{ color: 'white' }} container direction='row' justify='space-around' alignItems='flex-start'>
              <Grid container item xs={12} md={6}>
                <ul>
                  <li>Ngày công chiếu</li>
                  <li>Đạo diễn</li>
                  <li>Diễn viên</li>
                  <li>Thể loại</li>
                  <li>Định dạng</li>
                  <li>Quốc gia SX</li>
                </ul>
                <ul>
                  <li>{movieDetail?.ngayKhoiChieu.split('T')[0]}</li>
                  <li>STRING</li>
                  <li>STRING</li>
                  <li>STRING</li>
                  <li>STRING</li>
                  <li>Việt Nam</li>
                </ul>
              </Grid>

              <Grid item xs={12} md={6}>
                <b>Nội dung</b>
                <p>{movieDetail?.moTa}</p>
              </Grid>
            </Grid>

          </TabPanelSimple>

          <TabPanelSimple className={classes.movieValues} value={valueSimple} index={2}>
            <Grid className={classes.evaluate} container justify='center' alignItems='center' >
              <div><span>P</span> Bạn nghĩ gì về phim này ?</div>
            </Grid>

          </TabPanelSimple>

        </div>

      </div>

      <PopUp trailer={trailer} open={open} onHandleButton={handleButton} />

    </MuiThemeProvider>
  )
}
