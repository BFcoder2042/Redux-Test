import React from "react"
import SliderCarousel from "../components/Client/SliderCarousel"
import Product from "../components/Client/Products"
import Contacts from "../components/Client/Contacts"

export const MainPage = () => {
    return (
        <React.Fragment>
            <SliderCarousel />
            <Product />
            {/* <Contacts /> */}
        </React.Fragment>
    )
}