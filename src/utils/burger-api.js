import { BURGER_API_URL, checkReponse } from "./const"
import { openModal } from "../services/reducers/ingredients";
import { updateData } from "../services/reducers/ingredients";


function getInfo() {
    return function (dispatch) {
        fetch(`${BURGER_API_URL}/ingredients`)
            .then(checkReponse)
            .then(json => {
                dispatch(updateData({ data: json.data, title: 'data' }))
            })
            .catch(error => {
                console.error(error);
                dispatch(updateData({ data: error, title: 'errorMsg' }))
            });
    }
}

function orderBurger(ingredients) {
    return function (dispatch) {
        fetch(`${BURGER_API_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "ingredients": ingredients })
        })
            .then(checkReponse)
            .then(json => {
                dispatch(updateData({ data: json.order.number, title: 'order' }))
                dispatch(openModal({ title: 'order' }))
            })
            .catch(error => {
                console.error(error);
                dispatch(updateData({ data: error, title: 'errorMsg' }))
            });
    }
}

export { getInfo, orderBurger }
