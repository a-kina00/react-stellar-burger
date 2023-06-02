import PropTypes from 'prop-types';

const BURGER_API_URL = 'https://norma.nomoreparties.space/api';

const checkReponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

const ESC_KEYCODE = 27;

const requirements = () => {
    return {
        _id: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        image: PropTypes.string,
        image_large: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired
    }
}

export { BURGER_API_URL, checkReponse, ESC_KEYCODE, requirements }