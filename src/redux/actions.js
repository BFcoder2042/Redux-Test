import { GET_SLIDES } from "./types"
import { GET_PRODUCTS } from "./types"
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