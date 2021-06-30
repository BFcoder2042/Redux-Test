import { GET_SLIDES } from "./types"
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
export function fetchedSlides() {
    return dispatch => {
        const result = slides
        dispatch({ type: GET_SLIDES, payload: result })
    }
}