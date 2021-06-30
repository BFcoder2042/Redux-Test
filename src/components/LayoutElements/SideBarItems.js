import React from "react";
import '../../styles/sideBar.scss'

export default function SideBarItems({ child, sideBarChild, toggleSubItems }) {
    return (
        <div className='side_bar_items' >
            <div className='side_bar_item' onClick={() => toggleSubItems(child.id)}>{child.title}</div>
            {child.subItems.child.length > 0 &&
                <div className="side_bar_items_child" style={{ height: child.subItems.active ? child.subItems.child.length * 56 + 'px' : '0px' }}>
                    {child.subItems.child.map(item => {
                        return <div className='side_bar_item_child' key={item.id}>
                            {item.title}
                        </div>
                    })}
                </div>
            }
        </div>
    )
}