import {getCookie} from "./cookie.js";

const url = 'https://chat1-341409.oa.r.appspot.com/api/'
export const URLS ={
    USER : `${url}user/`,
    MESSAGE : `${url}messages/`,
    ME: `${url}user/me`,
    SOCKET: `ws://chat1-341409.oa.r.appspot.com/websockets?${getCookie('token')}`
}