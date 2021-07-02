import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { BiMinus } from 'react-icons/bi';
import logo from '../../staticImages/logo_dark.svg'
import '../../styles/register.scss'
import { switchRegister } from "../../redux/actions";

const Register = () => {
    const dispatch = useDispatch()
    const register = useSelector(state => state.register.register)
    const handlerMinus = () => {
        dispatch(switchRegister(false))
    }
    return (
        <div className={`register ${register ? 'show' : 'hide'}`}>
            <div className='container'>
                <div className='logo_plus'>
                    <img src={logo} alt='logo'></img>
                    <div className='register--plus' onClick={handlerMinus}>
                        <div className='scale'></div>
                        <BiMinus />
                    </div>
                </div>
                <div className='register--inputs'>
                    <input placeholder="Логин"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Пароль" type='password'></input>
                </div>
                <div className='register_btn'>зарегистрироваться</div>
            </div>
        </div>
    )
}

export default connect(null, null)(Register)