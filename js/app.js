import {SCREENS, UI} from "./view.js";
import {classesMessageFrom, renderMessage} from "./render.js";
import {sendRequest} from "./api.js";
import {URLS} from "./urls.js";

export function sendMessage() {
    const messageText = UI.MESSAGE_INPUT.value;
    const isNotValidMessage = (UI.MESSAGE_INPUT.value.length < 1)
    if (isNotValidMessage) {
        return
    }
    const messageData = {
        userName : 'Я',
        userMessage : messageText,
        userMessageHour : new Date().getHours(),
        userMessageMinutes : new Date().getMinutes(),
    }
    renderMessage(messageData, classesMessageFrom.me)
    UI.MESSAGE_FORM.reset();
}


export function showOptions() {
  SCREENS.OPTIONS.style.display = 'flex';
}
export function showPopup(popup) {
  popup.style.display = 'flex';
}

export function closePopup() {
    SCREENS.POPUPS.forEach((item) => item.style.display = 'none')
}




export function rename() {
    const name = {
        name: UI.RENAME_INPUT.value
    }
    sendRequest('PATCH', URLS.USER, {body : name});
    closePopup();
}