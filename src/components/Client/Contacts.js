import React from "react";
import { connect, useDispatch } from "react-redux";
import '../../styles/contacts.scss'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { fetchedContacts } from "../../redux/actions";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Contacts = ({ syncContacts }) => {

    const dispatch = useDispatch()
    dispatch(fetchedContacts())
    return (
        <div className="contacts">
            <div className="contacts_title">Вы можете найти нас здесь</div>
            {syncContacts.map((item, index) => {
                return <div className="contacts_map_content" key={index}>
                    <div className="contacts_content">
                        <div className="contacts_content_item">Адрес: {item.address}</div>
                        <div className="contacts_content_item">Телефон: {item.phone}</div>
                        <div className="contacts_content_item">Email: {item.email}</div>
                        <div className="contacts_content_item">Время работы: {item.working_hours}</div>
                    </div>
                    <div className="contacts_map">
                        <MapContainer center={item.coordinates.split(',')} zoom={15} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
                            />
                            <Marker position={item.coordinates.split(',')} >
                                <Popup>
                                    GAMER
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        syncContacts: state.contacts.fetchedContacts
    }
}

export default connect(mapStateToProps, null)(Contacts)