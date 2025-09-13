
import { getData as getDate } from './scripts1.js';
const showDate = () => {
    try {
        const date = getDate ();
        return date;
    } catch (error) {
        return "Could not get date";
    }
   
};

console.log(showDate());
