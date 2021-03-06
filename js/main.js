import {UI, BTNS, SCREENS, FORMS} from "./view.js";
import {confirm, sendToken} from "./autorization.js";
import {sendMessage, showPopup, closePopup, rename, showOptions, chatStart} from "./app.js";
import Cookies from 'js-cookie'


FORMS.AUTORIZATION.addEventListener('submit', sendToken);
FORMS.CONFIRM.addEventListener('submit', confirm);
FORMS.RENAME.addEventListener('submit', rename)
UI.MESSAGE_FORM.addEventListener('submit', sendMessage);
BTNS.OPTIONS.addEventListener('click', showOptions);
BTNS.SCREEN_CLOSE.forEach((item) => item.addEventListener('click', closePopup));


if(Cookies.get('token')){
    chatStart();
}else{
    showPopup(SCREENS.AUTORIZATION)
}

