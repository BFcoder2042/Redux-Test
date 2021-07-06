import React from "react";
import '../../styles/sideBar.scss'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { switchBurger } from "../../redux/actions";


export default function SideBarItems({ child, toggleSubItems }) {
    const dispatch = useDispatch()
    const handlerBurger = () => {
        dispatch(switchBurger())
    }
    return (
        <div className='side_bar_items'>
            <div className='side_bar_item' onClick={() => toggleSubItems(child.id, child)}>{child.title}
                {child.action === 'link' &&
                    <a href={child.path}></a>
                }
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
                        return <div className='side_bar_item_child' key={item.id} onClick={handlerBurger}>
                            {item.action === 'link' &&
                                <Link to={'/catalog/' + item.path}></Link>
                            }
                            {item.title}
                            <IoIosArrowForward />
                        </div>
                    })}
                </div>
            }
        </div>
    )
}


