import { Comments } from "./components/comments";
import { Ajax } from "./utils/ajax";

const list = new Comments(document.querySelector('.comments'));

Ajax.get('http://localhost:4001/comments'), 
(response) => {
    console.log(response);
},
    (e) => {
        console.log(e)
    };