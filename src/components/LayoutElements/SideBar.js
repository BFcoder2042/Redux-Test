import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import '../../styles/sideBar.scss'
import SideBarItems from "./SideBarItems";
import { fetchedSideBar } from "../../redux/actions";
import { openSubItemsSideBar } from "../../redux/actions";



const SideBar = () => {
    const dispatch = useDispatch()
    dispatch(fetchedSideBar())
    const burger = useSelector(state => state.burger.burger)
    const sideBar = useSelector(state => state.sideBar.fetchedSideBar)
    let [style, setStyle] = useState({});

    useEffect(() => {
        setStyle(
            { height: window.innerHeight + 'px' }
        )
    }, [])


    const toggleSubItems = (id) => {
        dispatch(openSubItemsSideBar(id))
    }

    return (
        <div className="side_bar" style={{ height: style.height, width: burger ? '250px' : '0px' }}>
            {sideBar.map(item => {
                return <SideBarItems toggleSubItems={toggleSubItems} child={item} key={item.id}></SideBarItems>
            })}
        </div>
    )
}

export default connect(null, null)(SideBar)