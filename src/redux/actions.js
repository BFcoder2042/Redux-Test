import { GET_SLIDES } from "./types"
import { GET_PRODUCTS } from "./types"
import { GET_CONTACTS } from "./types"
import { GET_FOOTER } from "./types"
import { SWITCH_BURGER } from "./types"
import { SWITCH_LOG_IN_FORM } from "./types"
import { SWITCH_REGISTER_FORM } from "./types"

let burger = false;
let log_in = false;
let register = false;
const slides = [
    {
        id: 1,
        image: 'http://localhost:3000/images/slide_1.jpg',
        title: 'Spider Man',
        description: 'в наличии',
        buttonText: 'купить',

    }, {
        id: 2,
        image: 'http://localhost:3000/images/slide_2.jpg',
        title: 'Sony DualSense 5',
        description: 'в наличии',
        buttonText: 'купить',

    }, {
        id: 3,
        image: 'http://localhost:3000/images/slide_3.jpg',
        title: 'Playstation 5',
        description: 'в наличии',
        buttonText: 'купить',

    }]
const products = [
    {
        id: 1,
        title: 'техника',
        image: 'http://localhost:3000/images/product_1.jpg',
        type: 'technics'
    }, {
        id: 2,
        title: 'услуги',
        image: 'http://localhost:3000/images/product_2.jpg',
        type: 'services'
    },
    {
        id: 3,
        title: 'аксессуары',
        image: 'http://localhost:3000/images/product_3.jpg',
        type: 'accessories'
    },
    {
        id: 4,
        title: 'игры',
        image: 'http://localhost:3000/images/product_4.jpg',
        type: 'games'
    },
]
const contacts = [
    {
        address: 'Гостиный Двор, проспект К.Маркса, Магнитогорск',
        phone: '8 (950)-734-81-91',
        email: 'malkoviphone@gmail.com',
        working_hours: '9:00 - 21:00',
        additional_info: '',
        coordinates: '53.40286432924223, 58.987150900202884'
    }
]
const footer = [
    {
        logo: '',
        icons: [
            {
                image: 'http://localhost:3000/images/footer_icon_1.svg',
                link: ''
            },
            {
                image: 'http://localhost:3000/images/footer_icon_2.svg',
                link: ''
            }
        ]
    }
]
export function fetchedSlides() {
    return dispatch => {
        const result = slides
        dispatch({ type: GET_SLIDES, payload: result })
    }
}
export function fetchedProducts() {
    return dispatch => {
        const result = products
        dispatch({ type: GET_PRODUCTS, payload: result })
    }
}
export function fetchedContacts() {
    return dispatch => {
        const result = contacts
        dispatch({ type: GET_CONTACTS, payload: result })
    }
}
export function fetchedFooter() {
    return dispatch => {
        const result = footer
        dispatch({ type: GET_FOOTER, payload: result })
    }
}
export function switchBurger() {
    return dispatch => {
        burger = !burger
        dispatch({ type: SWITCH_BURGER, payload: burger })
    }
}
export function switchLogIn() {
    return dispatch => {
        log_in = !log_in
        dispatch({ type: SWITCH_LOG_IN_FORM, payload: log_in })
    }
}
export function switchRegister(bool) {
    return dispatch => {
        register = bool
        dispatch({ type: SWITCH_REGISTER_FORM, payload: register })
    }
}