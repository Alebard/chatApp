import {UI, BTNS, SCREENS, FORMS} from "./view.js";
import {getToken, rename} from "./api.js";
import {getCookie} from "./cookie.js";
import {confirm} from "./autorization.js";


FORMS.AUTORIZATION.addEventListener('submit', getToken);
FORMS.CONFIRM.addEventListener('submit', confirm);
FORMS.RENAME.addEventListener('submit', rename)
UI.MESSAGE_FORM.addEventListener('submit', sendMessage);
BTNS.OPTIONS.addEventListener('click', showOptions);
BTNS.SCREEN_CLOSE.forEach((item) => item.addEventListener('click', closePopup));


function sendMessage() {
    const messageText = UI.MESSAGE_INPUT.value;
    const isNotValidMessage = (UI.MESSAGE_INPUT.value.length < 1)
    if (isNotValidMessage) {
        return
    }
    UI.MESSAGE_TEMPLATE.content.querySelector('.message_text').textContent = `Я: ${messageText}`;
    UI.MESSAGE_TEMPLATE.content.querySelector('.message_time').textContent = getNowTime();
    UI.MESSAGES_WRAPPER.append(UI.MESSAGE_TEMPLATE.content.cloneNode(true));
    UI.MESSAGES_WRAPPER.scrollIntoView(false)
    UI.MESSAGE_FORM.reset();
}


function getNowTime() {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}`
}


function showOptions() {
    SCREENS.OPTIONS.style.display = 'flex';
}


export function closePopup() {
    SCREENS.POPUPS.forEach((item) => item.style.display = 'none')
}



if(getCookie('token') === undefined){
    SCREENS.AUTORIZATION.style.display = 'flex';
}
