import React, { useState } from "react";
import { BsFillPersonFill } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { BiShoppingBag } from 'react-icons/bi';
import BurgerButton from "./BurgerButton";
import logo from '../../staticImages/logo.svg'
import '../../styles/header.scss'

export const Header = () => {

    let [style, setStyle] = useState({})

    const showInput = () => {
        let stylesElements = {
            active: true,
            transform: 'translate(-250px)',
            width: '220px',
            padding: '0px 25px',
            border: 'solid 1px #ffff'
        }
        if (!style.active) {
            setStyle(
                { ...style, ...stylesElements }
            )
        }
        else setStyle({})
    }

    return (
        <header>
            <BurgerButton></BurgerButton>
            <img src={logo} alt='logo'></img>
            <div className='header--log_in_search_basket'>
                <div className='header--log_in' style={{ transform: style.transform }}>войти <BsFillPersonFill /></div>
                <div className='header--search_basket'>
                    <div className='header--search' >
                        <BsSearch onClick={showInput} />
                        <input style={{ width: style.width, padding: style.padding, border: style.border }}></input>
                    </div>
                    <div className='header--basket'><BiShoppingBag /></div>
                </div>
            </div>
        </header>
    )
}