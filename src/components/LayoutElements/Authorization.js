import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { BiPlus } from 'react-icons/bi';
import logo from '../../staticImages/logo_dark.svg'
import '../../styles/logIn.scss'
import { switchRegister } from "../../redux/actions";

const Authorization = () => {
    const dispatch = useDispatch()
    const log_in = useSelector(state => state.log_in.log_in)
    const register = useSelector(state => state.register.register)
    const handlerPlus = () => {
        dispatch(switchRegister(true))
    }
    return (
        <div className={`log_in ${log_in && !register ? 'show' : 'hide'}`}>
            {log_in &&
                <div className='container'>
                    <div className='logo_plus'>
                        <img src={logo} alt='logo'></img>
                        <div className='log_in--plus' onClick={handlerPlus}>
                            <div className='scale'></div>
                            <BiPlus />
                        </div>
                    </div>
                    <div className='log_in--inputs'>
                        <input placeholder="Логин или email"></input>
                        <input placeholder="Пароль" type='password'></input>
                    </div>
                    <div className='log_in_btn'>войти</div>
                </div>
            }
        </div>
    )
}

export default connect(null, null)(Authorization)