import React from "react";
import '../../styles/sliderCarousel.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchedSlides } from "../../redux/actions";

const SliderCarousel = ({ syncSlide }) => {
    const burger = useSelector(state => state.burger.burger)
    const dispatch = useDispatch()
    dispatch(fetchedSlides())
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <div className='slider' style={{ transform: burger ? 'scale(0.8)' : 'scale(1)' }}>
            <Slider {...settings}>
                {syncSlide.map(slide => {
                    return <div className='slider_item' key={slide.id} style='color:red;'>
                        <div className="slider_item_slide" style={{ background: `url(${slide.image})` }}>
                            <div className="slide_item--title--description--button">
                                <div className="slider_item_slide--title">{slide.title}</div>
                                <div className="slider_item_slide--description">{slide.description}</div>
                                <div className="slider_item_slide--button">{slide.buttonText}</div>
                            </div>
                        </div>
                    </div>
                })}
            </Slider>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        syncSlide: state.slides.fetchedSlides
    }
}

export default connect(mapStateToProps, null)(SliderCarousel)
