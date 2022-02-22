import {SCREENS, UI} from "./view.js";
import {classesMessageFrom, renderMessage, MessageData} from "./render.js";
import {sendRequest} from "./api.js";
import {URLS} from "./urls.js";


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

const socket = new WebSocket(URLS.SOCKET);

export function sendMessage() {
    const messageText = UI.MESSAGE_INPUT.value;
    const isNotValidMessage = (UI.MESSAGE_INPUT.value.length < 1)
    if (isNotValidMessage) {
        return
    }
    socket.send(JSON.stringify({text: messageText}));
    return false;
}

socket.onmessage = function(event) {
    console.log(event.data)
    const messageData = new MessageData(JSON.parse(event.data));
    createMessage(messageData)
    UI.MESSAGE_FORM.reset()
};

async function createMessage(messageData){
    const className = await getClassName(messageData)
    renderMessage(messageData, className)
}

 async function getClassName(messageData) {
    const meReq = sendRequest('GET', URLS.ME);
    const meRes = await meReq
    const isMe = (meRes.email === messageData.userEmail)
     if(isMe){
         return classesMessageFrom.me
     }else{
         return classesMessageFrom.other
     }
}

