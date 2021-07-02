import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import '../../styles/sideBar.scss'
import SideBarItems from "./SideBarItems";


export const SideBar = () => {
    const burger = useSelector(state => state.burger.burger)
    let [style, setStyle] = useState({});
    let [sideBarChild, setSideBarChild] = useState(
        [{
            id: 1,
            title: 'каталог',
            action: null,
            subItems: {
                active: false,
                child: [
                    {
                        id: 1,
                        title: 'техника',
                        action: null
                    },
                    {
                        id: 2,
                        title: 'игры',
                        action: null
                    },
                    {
                        id: 3,
                        title: 'аксессуары',
                        action: null
                    },
                    {
                        id: 4,
                        title: 'услуги',
                        action: null
                    },
                    {
                        id: 5,
                        title: 'смотреть все',
                        action: null
                    }
                ]
            }

        }, {
            id: 2,
            title: 'личный кабинет',
            action: null,
            subItems: {
                active: false,
                child: []
            }
        },
        {
            id: 3,
            title: 'связь с нами',
            action: null,
            subItems: {
                active: false,
                child: [{
                    id: 1,
                    title: 'отправить сообщение',
                    action: null
                },
                {
                    id: 2,
                    title: 'заказать звонок',
                    action: null
                },
                ]
            }
        }]
    )
    const toggleSubItems = (id) => {
        setSideBarChild(
            sideBarChild.map(item => {
                if (item.id !== id) item.subItems.active = false
                if (item.subItems.child.length !== 0 && item.id === id)
                    item.subItems.active = !item.subItems.active
                return item
            })
        )
    }
    useEffect(() => {
        setStyle(
            { height: window.innerHeight + 'px' }
        )
    }, [])

    return (
        <div className="side_bar" style={{ height: style.height, width: burger ? '250px' : '0px' }}>
            {sideBarChild.map(item => {
                return <SideBarItems toggleSubItems={toggleSubItems} child={item} key={item.id}></SideBarItems>
            })}
        </div>
    )
}
