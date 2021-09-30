import React from 'react'
import { Link } from 'react-router-dom'
import useStyle from './style'

export default function CarouselItem(props) {
    const { movie } = props
    const classes = useStyle()
    const handleTrailer = (movieTrailer) => {
        props.onHandleTrailer(movieTrailer)
    }
    return (
        <div className={classes.showTime__Item}>
            <i className={`${classes.play} fa fa-play`} onClick={() => handleTrailer(movie.trailer)}></i>
            <Link to={`/phim/${movie.maPhim}`} style={{ color: 'black', textDecoration: 'none' }}>
                <div className={`${classes.itemMovie} item`} key={movie.maPhim}>
                    <div className={classes.card} >
                        <div className={classes.card__rating}>{movie.danhGia}</div>

                        <div className={classes.card__img}>
                            <div className={classes.over__lay}></div>
                            <img className="card-img-top" src={movie.hinhAnh} alt="movie" />
                        </div>

                        <div className={`${classes.card__footer} card-footer`} >

                            <p style={{ transition: 'all 1s' }} className="card-title">
                                <span>C13</span>{movie.tenPhim}
                            </p>
                            <button className={`${classes.card__booking} btn btn-danger`}>MUA VÉ</button>
                        </div>
                    </div>

                </div>
            </Link>
        </div>
    )
}

