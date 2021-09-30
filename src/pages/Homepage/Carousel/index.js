import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import homeCarouselData from "../../../constants/homeCarouselData";
import SearchStickets from "./SearchTickets";
import './carousel.css';
import useStyles from "./styles";
import { Link } from 'react-router-dom';

export default function CarouselBanner(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 5000, //speed per sence
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slickdotsbanner", // đổi tên class để dùng css chỉnh sửa riêng cho dot trong trường hợp dùng 2 Slider
    responsive: [
      {
          breakpoint: 768,
          settings: {
            dots:false,
          }
        },
      {
        breakpoint: 425,
        settings: {
          arrows:false,
          dots:false,
        }
      },
    ]
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <ArrowForwardIosRoundedIcon style={{ right: "15px" }} onClick={onClick} className={classes.Arrow} />
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <ArrowBackIosRoundedIcon style={{ left: "15px" }} onClick={onClick} className={classes.Arrow} />
    );
  }

  const handleTrailer = (movieTrailer) => {
    props.onHandleTrailer(movieTrailer)
  }

  return (
    <div id='carousel' className={classes.carousel}>
      <Slider {...settings}  >
        {homeCarouselData.map((movie) => {
          return (
            <div className={classes.showTime__Item}>
              <i class={`${classes.play} fa fa-play`} onClick={() => handleTrailer(movie.trailer)} ></i>
              <Link to={`/phim/${movie.maPhim}`}>
                <div className={`${classes.itemMovie} item`} key={movie.maPhim}>
                  <div className={classes.card} >
                    <div className={classes.card__img}>
                      <div className={classes.over__lay}></div>
                      <img className="card-img-top" src={movie.hinhAnh} alt="movie" />
                    </div>

                  </div>

                </div>
              </Link>
            </div>
          )
        })}
      </Slider>
      <SearchStickets />
    </div>
  );
}
