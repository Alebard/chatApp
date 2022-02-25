import {SCREENS, UI} from "./view.js";
import {chatStart, closePopup, showPopup} from "./app.js";
import {sendRequest} from "./api.js";
import {URLS} from "./urls.js";
// import {showMessages} from "./render.js";


export function sendToken() {
    const user = {}
    user.email = UI.AUTORIZATION_INPUT.value;
    sendRequest('POST', URLS.USER, { body: user });
    closePopup();
    showPopup(SCREENS.CONFIRM)
}


export function confirm() {
    const token = UI.CONFIRM_INPUT.value;
    document.cookie = "token="+token;
    closePopup();
    chatStart()
}
















const   a = 123;


export default {a}


