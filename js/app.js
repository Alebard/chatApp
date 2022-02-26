import {SCREENS, UI} from "./view.js";
import {classesMessageFrom, renderMessage, MessageData, renderOldMessage} from "./render.js";
import {sendRequest} from "./api.js";
import {URLS} from "./urls.js";
import Cookies from 'js-cookie'



export let myEmail ='';


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


export function sendMessage() {
    const messageText = UI.MESSAGE_INPUT.value;
    const isNotValidMessage = (UI.MESSAGE_INPUT.value.length < 1)
    if (isNotValidMessage) {
        return
    }
    socket.send(JSON.stringify({text: messageText}));
    UI.MESSAGE_FORM.reset()
    return false;
}


export function createMessage(messageData, method){
    const className = getClassName(messageData)
    renderMessage(messageData, className, method)
}

function getClassName(messageData) {
     if(isMyMessage(messageData)){
         return classesMessageFrom.me
     }else{
         return classesMessageFrom.other
     }
}

export function isMyMessage(messageData) {
    return (myEmail === messageData.userEmail)
}

let socket = null
export let oldMessages = null


export async function chatStart() {

    myEmail = (await sendRequest('GET', URLS.ME)).email
    console.log(Cookies.get('token')) // выводит верный токен
    console.log(URLS.SOCKET) // получает урл с undefined токеном
    socket = new WebSocket(URLS.SOCKET); //обращается к url  с undefined токеном
    console.log(Cookies.get('token')) // выводит верный токен
    console.log(URLS.SOCKET) // получает урл с undefined токеном
    socket.onmessage = function(event) {
        console.log(event.data) // ошибка
        const messageData = new MessageData(JSON.parse(event.data));
        createMessage(messageData, 'append')
    };
    oldMessages = (await sendRequest("GET", URLS.MESSAGE)).messages.reverse();
    renderOldMessage()
    UI.MESSAGES_WRAPPER.scrollIntoView(false)
}


document.querySelector('.messages_wrapper').addEventListener('scroll', scrollMessage)

export function scrollMessage() {
    if (this.scrollTop === 0){
        const wrapperHeight = UI.MESSAGES_WRAPPER.scrollHeight;
        renderOldMessage();
        const wrapperHeightAfterScroll = UI.MESSAGES_WRAPPER.offsetHeight;
        this.scrollTo(0, wrapperHeightAfterScroll - wrapperHeight);
    }
}