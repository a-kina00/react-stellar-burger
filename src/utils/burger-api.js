import { BURGER_API_URL, checkReponse } from "./const"

function getInfo(setData, setStatus) {
    return fetch(`${BURGER_API_URL}/ingredients`)
        .then(checkReponse)
        .then(json => setData(json.data))
        .catch(error => {
            console.error(error);
            setStatus(error)
        });
}


function orderBurger(ingredients, setOrder, setStatus, type) {
    return fetch(`${BURGER_API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "ingredients": ingredients })
    })
        .then(checkReponse)
        .then(json => setOrder(json.order.number))
        .catch(error => {
            console.error(error);
            setStatus(error)
        });
}

export { getInfo, orderBurger }
