import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import '../../styles/backSideBar.scss'
import { switchBurger } from "../../redux/actions";

const BackSideBar = ({ syncBurger }) => {
    let [style, setStyle] = useState({});
    useEffect(() => {
        setStyle(
            { height: window.innerHeight + 'px' }
        )
    }, [])
    const dispatch = useDispatch()
    const handlerBack = () => {
        dispatch(switchBurger())
    }
    return (
        <div className="pointer_none" onClick={handlerBack} style={{
            background: syncBurger ? '#00000082' : 'transparent',
            pointerEvents: syncBurger ? 'unset' : 'none',
            zIndex: syncBurger ? '5' : '0',
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