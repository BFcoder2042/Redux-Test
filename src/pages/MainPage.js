import React from "react"
import SliderCarousel from "../components/Client/SliderCarousel"
import Product from "../components/Client/Products"

export const MainPage = () => {
    return (
        <React.Fragment>
            <SliderCarousel />
            <Product />
        </React.Fragment>
    )
}