import {UI, BTNS, SCREENS, FORMS} from "./view.js";
import {getCookie} from "./cookie.js";
import {confirm, sendToken} from "./autorization.js";
import {sendMessage, showPopup, closePopup, rename, showOptions, chatStart} from "./app.js";


FORMS.AUTORIZATION.addEventListener('submit', sendToken);
FORMS.CONFIRM.addEventListener('submit', confirm);
FORMS.RENAME.addEventListener('submit', rename)
UI.MESSAGE_FORM.addEventListener('submit', sendMessage);
BTNS.OPTIONS.addEventListener('click', showOptions);
BTNS.SCREEN_CLOSE.forEach((item) => item.addEventListener('click', closePopup));


if(getCookie('token') === undefined){
    showPopup(SCREENS.AUTORIZATION)
}else{
    chatStart();
}