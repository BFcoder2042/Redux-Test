import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import '../../styles/burgerButton.scss'
import { switchBurger } from "../../redux/actions";
import { closedSubItemsSideBar } from "../../redux/actions";


const BurgerButton = ({ syncBurger }) => {
    const log_in = useSelector(state => state.log_in.log_in)
    const dispatch = useDispatch()
    const handlerBurger = () => {
        dispatch(switchBurger())
    }
    useEffect(() => {
        if (!syncBurger) dispatch(closedSubItemsSideBar())
    })
    document.body.style.overflow = syncBurger ? "hidden" : ""
    return (
        <div id="nav-icon3" onClick={handlerBurger} className={syncBurger ? 'open' : ''} style={{
            left: syncBurger ? '200px' : '0px',
            zIndex: log_in ? '1' : '90'
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