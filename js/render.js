import {UI} from "./view.js";
import {createMessage, myEmail, oldMessages, scrollMessage} from "./app.js"

export const classesMessageFrom = {
    me: 'message-user',
    other: 'message-answer'
}


export function renderMessage(messageData, className, method) {
    const message = document.createElement('div');
    message.className = `message ${className} new`;
    const messageContent = UI.MESSAGE_TEMPLATE.content.cloneNode(true)
    messageContent.querySelector('.message_text').textContent = `${messageData.userName}: ${messageData.userMessage}`;
    messageContent.querySelector('.message_time').textContent = `${messageData.userMessageHour}:${messageData.userMessageMinutes}`;
    message.append(messageContent)
    if (method=== 'append'){
        UI.MESSAGES_WRAPPER.append(message)
        UI.MESSAGES_WRAPPER.scrollIntoView(false)
    }else{
        UI.MESSAGES_WRAPPER.prepend(message)
    }
    setTimeout(function () {
        message.classList.remove('new')
    }, 2000)
}

export function MessageData(messageData) {
    this.userMessage = messageData.text;
    this.userMessageHour = (new Date(messageData.createdAt)).getHours();
    this.userMessageMinutes = (new Date(messageData.createdAt)).getMinutes();
    this.userEmail = messageData.user.email;
    this.userName = messageData.user.email === myEmail ? 'я' : messageData.user.name ;
    }


export function renderOldMessage(){
    if (oldMessages.length < 1){
        notMessage()
    }
    const messagesForShow = oldMessages.splice(0, 20)
    messagesForShow.forEach((data) => {
        const messageData = new MessageData(data);
        createMessage(messageData, 'prepend');
    })
}

function notMessage() {
    const message = document.createElement('div')
    message.textContent = 'Вся история загружена'
    message.style = 'text-align: center; margin: 15px;'
    UI.MESSAGES_WRAPPER.prepend(message)
    document.querySelector('.messages_wrapper').removeEventListener('scroll', scrollMessage);
}


