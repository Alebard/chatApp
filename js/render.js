import {sendRequest} from "./api.js";
import {UI, BTNS, SCREENS, FORMS} from "./view.js";
import {URLS} from "./urls.js";

export const classesMessageFrom = {
    me : 'message-user',
    other: 'message-answer'
}



export async function showMessages() {
    const messages = (await sendRequest("GET", URLS.MESSAGE)).messages;
    messages.forEach((data) => {
        createMessage(data)
    })
}

function createMessage(data) {
    const messageData = new MessageData(data)
    renderMessage(messageData, classesMessageFrom.other)
}

export function renderMessage(messageData, className) {
    UI.MESSAGE_TEMPLATE.content.querySelector('.message_text').textContent = `${messageData.userName}: ${messageData.userMessage}`;
    UI.MESSAGE_TEMPLATE.content.querySelector('.message_time').textContent = `${messageData.userMessageHour}:${messageData.userMessageMinutes}`;
    UI.MESSAGE_TEMPLATE.content.querySelector('.message').classList.add(className);
    UI.MESSAGES_WRAPPER.append(UI.MESSAGE_TEMPLATE.content.cloneNode(true));
    UI.MESSAGES_WRAPPER.scrollIntoView(false)
}


function MessageData(messageData) {
        this.userName = messageData.username;
        this.userMessage = messageData.message;
        this.userMessageHour = (new Date(messageData.createdAt)).getHours();
        this.userMessageMinutes = (new Date(messageData.createdAt)).getMinutes();
}

