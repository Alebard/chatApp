import {UI} from "./view.js";
import {closePopup} from "./main.js";



export function confirm() {
    const token = UI.CONFIRM_INPUT.value;
    document.cookie = "token="+token;
    closePopup();
}
















const   a = 123;


export default {a}


