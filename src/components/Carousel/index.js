import React from 'react'
import Slider from "react-slick";
import CarouselItem from '../CarouselItem';
export default function Carousel(props) {
    const { movieList, settings } = props
    const handleTrailer = (movieTrailer) => {
        props.onHandleTrailer(movieTrailer)
    }
    return (
        <Slider {...settings}>
            {movieList.map((movie) => {
                return (
                    <CarouselItem movie={movie} onHandleTrailer={handleTrailer} />
                )
            })}
        </Slider>
    )
}
