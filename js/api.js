import {SCREENS, UI} from "./view.js";
import {closePopup} from "./main.js";
import {getCookie} from "./cookie.js";

const url = 'https://chat1-341409.oa.r.appspot.com/api/user';

export async function rename() {
    const name ={
        name : UI.RENAME_INPUT.value
    }
    sendRequest('PATCH', getCookie('token'), name);
    closePopup();

}



export function getToken() {
    const user = {}
    user.email = UI.AUTORIZATION_INPUT.value;
    sendRequest('POST', getCookie('token'), user );
    closePopup();
    SCREENS.CONFIRM.style.display = 'flex';

}

export function sendRequest(method, token, body) {
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        })
            .catch(alert)
}
