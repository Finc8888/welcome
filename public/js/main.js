// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
// console.log('nanoid = ', model.id)
console.log('from main');
const getCookie = () => {
    const cookies = new Map();
    const list = document.cookie.split('; ');

    // eslint-disable-next-line no-restricted-syntax
    for (const cookie of list) {
        if (cookie.includes('=')) {
            const p = cookie.indexOf('=');
            const name = cookie.substring(0, p);
            let value = cookie.substring(p + 1);
            value = decodeURIComponent(value);
            cookies.set(name, value);
        } else {
            console.warn('It is not cookie group.');
        }
    }
    return cookies;
};
