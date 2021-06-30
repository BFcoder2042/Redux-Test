import React from "react";
import { connect, useDispatch } from "react-redux";
import '../../styles/backSideBar.scss'
import { switchBurger } from "../../redux/actions";

const BackSideBar = ({ syncBurger }) => {
    const dispatch = useDispatch()
    const handlerBack = () => {
        dispatch(switchBurger())
    }
    return (
        <div className="pointer_none" onClick={handlerBack} style={{
            background: syncBurger ? '#00000082' : 'transparent',
            zIndex: syncBurger ? '5' : '0',
        }}></div>
    )
}
const mapStateToProps = state => {
    return {
        syncBurger: state.burger.burger
    }
}

export default connect(mapStateToProps, null)(BackSideBar)