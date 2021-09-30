import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieList } from '../../reducers/actions/Movie';
import News from "../../components/News";
import Theaters from '../../components/Theaters';
import PopUp from '../../components/PopUp';
import CarouselBanner from './Carousel';
import Showtime from '../../components/Showtime';
import LoadingPage from '../../components/LoadingPage';
import Ads from '../../components/Ads';
import { useHistory } from 'react-router';

export default function Homepage() {

  // setup các biến để show trailer ra dialog
  const [open, setOpen] = useState(false);
  const [trailer, setTrailer] = useState("")
  const handleTrailer = (newTrailer) => {
    setTrailer(newTrailer)
    setOpen(!open)
  }

  const history = useHistory()
  // console.log(history)
  const { movieList, loading, error } = useSelector((state) => state.movieReducer);
  // useDispatch: dispatch action lấy api movieList và đẩy data trả về lên store ( đi 2 chiều)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList())
  }, [])

  useEffect(() => {
    document.getElementById(history.location.key)?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
  }, [])

  useEffect(() => {
    document.title = 'Tix - Trang chủ'
  }, [])

  if (loading) {
    return <LoadingPage />
  }
  if (error) {
    return <div>{error}</div>
  }

  const handleButton = (closeButton) => {
    setOpen(closeButton)
  }


  return (
    <div>
      <CarouselBanner onHandleTrailer={handleTrailer} />

      <div id='showtimes'>
        <Showtime movieList={movieList} onHandleTrailer={handleTrailer} />
      </div>

      <PopUp trailer={trailer} open={open} onHandleButton={handleButton} />
      <div id='theater'>
        <Theaters />
      </div>

      <div id='news'>
        <News />
      </div>

      <div id='ads'>
        <Ads />
      </div>
    </div>
  )
}

