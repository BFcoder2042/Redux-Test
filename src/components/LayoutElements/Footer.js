import React from "react";
import '../../styles/footer.scss'
import { connect, useDispatch } from "react-redux";
import logo from '../../staticImages/logo.svg'
import { fetchedFooter } from "../../redux/actions";

const Contacts = ({ syncFooter }) => {
    const dispatch = useDispatch()
    dispatch(fetchedFooter())
    return (
        <div className="footer">
            {syncFooter.length !== 0 &&
                <div className='footer_container'>
                    <img src={logo} alt='logo'></img>
                    <div className='footer_icons'>
                        {syncFooter[0].icons.map((item, index) => {
                            return <div className='footer_icon'
                                key={index}
                                style={{ background: `url(${item.image})` }}></div>
                        })}
                    </div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        syncFooter: state.footer.fetchedFooter
    }
}

export default connect(mapStateToProps, null)(Contacts)