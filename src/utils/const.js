import PropTypes from 'prop-types';

const BURGER_API_URL = 'https://norma.nomoreparties.space/api';

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const ESC_KEYCODE = 27;

const requirements = () => {
    return {
        _id: PropTypes.string,
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string
    }
}

export { BURGER_API_URL, checkReponse, ESC_KEYCODE, requirements }