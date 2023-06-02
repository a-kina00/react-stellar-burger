import { BURGER_API_URL, checkReponse } from "./const"

function getInfo(setData, setStatus, type) {
    return fetch(`${BURGER_API_URL}/${type}`)
        .then(checkReponse)
        .then(json => setData(json.data))
        .catch(error => {
            console.error(error);
            setStatus(error)
        });
}

export { getInfo }
