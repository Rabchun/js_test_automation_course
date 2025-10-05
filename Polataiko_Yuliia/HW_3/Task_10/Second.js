import { getDate } from './First.js'

const showDate = () => {
    try {
        const date = getDate();
        console.log(date);
        return date;
    } catch {
        console.log("An error has occurred");
        return "An error has occurred";
    }
};

showDate();