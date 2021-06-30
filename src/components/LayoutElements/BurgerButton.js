import React from "react";
import { connect, useDispatch } from "react-redux";
import '../../styles/burgerButton.scss'
import { switchBurger } from "../../redux/actions";

const BurgerButton = ({ syncBurger }) => {
    const dispatch = useDispatch()
    const handlerBurger = (event) => {
        console.log(event.target);
        dispatch(switchBurger())
    }
    document.body.style.overflow = syncBurger ? "hidden" : "visible"
    return (
        <div id="nav-icon3" onClick={handlerBurger} className={syncBurger ? 'open' : ''} style={{
            left: syncBurger ? '200px' : '0px'
        }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        syncBurger: state.burger.burger
    }
}

export default connect(mapStateToProps, null)(BurgerButton)