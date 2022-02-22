import {UI} from "./view.js";

export const classesMessageFrom = {
    me: 'message-user',
    other: 'message-answer'
}


export function renderMessage(messageData, className) {
    const message = document.createElement('div');
    message.className = `message ${className} new`;
    const messageContent = UI.MESSAGE_TEMPLATE.content.cloneNode(true)
    messageContent.querySelector('.message_text').textContent = `${messageData.userName}: ${messageData.userMessage}`;
    messageContent.querySelector('.message_time').textContent = `${messageData.userMessageHour}:${messageData.userMessageMinutes}`;
    message.append(messageContent)
    UI.MESSAGES_WRAPPER.append(message);
    UI.MESSAGES_WRAPPER.scrollIntoView(false)
    setTimeout(function () {
        message.classList.remove('new')
    }, 2000)
}


export function MessageData(messageData) {
    this.userName = messageData.user.name;
    this.userMessage = messageData.text;
    this.userMessageHour = (new Date(messageData.createdAt)).getHours();
    this.userMessageMinutes = (new Date(messageData.createdAt)).getMinutes();
    this.userEmail = messageData.user.email;
}

