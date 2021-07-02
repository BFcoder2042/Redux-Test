import React, { useState, useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import '../../styles/backSideBar.scss'
import { switchBurger } from "../../redux/actions";
import { switchLogIn } from "../../redux/actions";
import { switchRegister } from "../../redux/actions";


const BackSideBar = ({ syncBurger }) => {
    const log_in = useSelector(state => state.log_in.log_in)
    const register = useSelector(state => state.register.register)
    let [style, setStyle] = useState({});
    useEffect(() => {
        setStyle(
            { height: window.innerHeight + 'px' }
        )
    }, [])
    const dispatch = useDispatch()
    const handlerBack = () => {
        if (syncBurger) dispatch(switchBurger())
        if (log_in) dispatch(switchLogIn())
        if (register) dispatch(switchRegister(false))
    }
    return (
        <div className="pointer_none" onClick={handlerBack} style={{
            background: syncBurger || log_in || register ? '#00000082' : 'transparent',
            pointerEvents: syncBurger || log_in ? 'unset' : 'none',
            zIndex: syncBurger || log_in ? '5' : '0',
            height: style.height
        }}></div>
    )
}
const mapStateToProps = state => {
    return {
        syncBurger: state.burger.burger
    }
}

export default connect(mapStateToProps, null)(BackSideBar)