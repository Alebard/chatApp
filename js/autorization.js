import {SCREENS, UI} from "./view.js";
import {closePopup} from "./app.js";
import {sendRequest} from "./api.js";
import {URLS} from "./urls.js";

export function sendToken() {
    const user = {}
    user.email = UI.AUTORIZATION_INPUT.value;
    sendRequest('POST', URLS.USER, { body: user });
    closePopup();
    SCREENS.CONFIRM.style.display = 'flex';
}


export function confirm() {
    const token = UI.CONFIRM_INPUT.value;
    document.cookie = "token="+token;
    closePopup();
    showMessages();
}
















const   a = 123;


export default {a}


