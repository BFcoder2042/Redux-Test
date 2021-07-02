import React, { useState } from "react";
import '../../styles/sideBar.scss'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';


export default function SideBarItems({ child, toggleSubItems }) {
    return (
        <div className='side_bar_items' >
            <div className='side_bar_item' onClick={() => toggleSubItems(child.id)}>{child.title}
                {child.subItems.child.length !== 0 &&
                    <div>{
                        !child.subItems.active ? <IoIosArrowDown /> : <IoIosArrowUp />
                    }
                    </div>
                }
            </div>
            {child.subItems.child.length > 0 &&
                <div className="side_bar_items_child" style={{ height: child.subItems.active ? child.subItems.child.length * 56 + 'px' : '0px' }}>
                    {child.subItems.child.map(item => {
                        return <div className='side_bar_item_child' key={item.id}>
                            {item.title}
                            <IoIosArrowForward />
                        </div>
                    })}
                </div>
            }
        </div>
    )
}