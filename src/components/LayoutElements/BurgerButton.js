import React, { useState } from "react";
import '../../styles/burgerButton.scss'

export const BurgerButton = () => {
    let [burger, setBurger] = useState(false)

    const toggleClassBurgerButton = () => {
        setBurger(
            burger = !burger
        )
    }

    return (
        <div id="nav-icon3" onClick={toggleClassBurgerButton} className={burger ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}