import {getCookie} from "./cookie.js";

export async function sendRequest(method, url, options) {
    const token = getCookie('token');
    const fetchBody = {
        method: method,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`,
        },
    }

    const needBody =  (method === 'POST' || method === 'PATCH')
    if(needBody){
        fetchBody.body = JSON.stringify(options.body);
    }
    const response = await fetch(url,fetchBody)
    return await response.json()
}
